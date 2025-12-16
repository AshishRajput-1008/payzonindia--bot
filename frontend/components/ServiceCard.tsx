"use client";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  url,
  icon,
}) => {
  return (
    <motion.div className="relative p-4 group max-w-sm mx-auto">
      {/* Featured Image Section with Gradient Border */}
      <div
        className="relative w-40 h-40 mx-auto z-10 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-500"
      >
        <Link href={url} passHref>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover w-12 h-12"
              loading="lazy"
            />
          </div>
        </Link>
      </div>

      {/* Content Section */}
      <div
        className="p-6  text-center bg-gradient-to-r from-blue-900 to-purple-600 min-h-[400px] flex items-end justify-center -mt-[140px]"
        style={{
          clipPath: "polygon(0 30%, 100% 0, 100% 100%, 25% 100%, 0 100%)",
        }}
      >
        <div className="w-full">
          <h3 className="text-xl font-bold text-white mb-2">
            <Link href={url} className="hover:text-blue-600 transition-colors">
              {title}
            </Link>
          </h3>
          <p className="text-white text-sm mb-4 font-semibold">{description}</p>
          <Link href={url} passHref>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-800 transition-colors">
              Read more
              <Plus className="ml-2 w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;