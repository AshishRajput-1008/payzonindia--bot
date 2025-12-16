    "use client";

    import createGlobe, { COBEOptions } from "cobe";
    import { useMotionValue, useSpring } from "motion/react";
    import { useEffect, useRef } from "react";
    import { cn } from "@/lib/utils";

    const MOVEMENT_DAMPING = 1400;

    const DEFAULT_GLOBE_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
    ],
    };

    interface GlobeProps {
    className?: string;
    config?: COBEOptions;
    }

    export const Globe: React.FC<GlobeProps> = ({ className, config = DEFAULT_GLOBE_CONFIG }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerMovement = useRef(0);
    const phi = useRef(0);

    const r = useMotionValue(0);
    const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

    const updatePointer = (clientX: number | null) => {
        pointerInteracting.current = clientX;
        if (canvasRef.current) canvasRef.current.style.cursor = clientX !== null ? "grabbing" : "grab";
    };

    const updateMovement = (clientX: number) => {
        if (pointerInteracting.current !== null) {
        const delta = clientX - pointerInteracting.current;
        pointerMovement.current = delta;
        r.set(r.get() + delta / MOVEMENT_DAMPING);
        }
    };

    useEffect(() => {
        const onResize = () => {
        if (!canvasRef.current) return;
        const width = canvasRef.current.offsetWidth;
        canvasRef.current.width = width * 2;
        canvasRef.current.height = width * 2;
        };

        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvasRef.current!, {
        ...config,
        width: canvasRef.current!.offsetWidth * 2,
        height: canvasRef.current!.offsetWidth * 2,
        onRender: (state) => {
            if (!pointerInteracting.current) phi.current += 0.005;
            state.phi = phi.current + rs.get();
        },
        });

        canvasRef.current!.style.opacity = "1";

        return () => {
        globe.destroy();
        window.removeEventListener("resize", onResize);
        };
    }, [rs, config]);

    return (
        <div className={cn("relative w-full flex justify-center items-center", className)}>
        <canvas
            ref={canvasRef}
            className="w-full max-w-[600px] aspect-square opacity-0 transition-opacity duration-500"
            onPointerDown={(e) => updatePointer(e.clientX)}
            onPointerUp={() => updatePointer(null)}
            onPointerOut={() => updatePointer(null)}
            onMouseMove={(e) => updateMovement(e.clientX)}
            onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
        />
        </div>
    );
    };
