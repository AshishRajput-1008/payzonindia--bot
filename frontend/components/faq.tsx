import React, { useState, useRef, useEffect } from "react";
import { Mic, Send, Volume2, Search, Copy, Trash2, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Image from "next/image";

interface FAQItem {
  id: number;
  question: string;
  questionHindi: string;
  answer: string;
  answerHindi: string;
  keywords: string[];
  category: string;
}

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  reaction?: string;
  source?: "company-faq" | "ai" | "error";
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What services do you offer?",
    questionHindi: "आप क्या सेवाएं प्रदान करते हैं?",
    answer: "We specialize in IT services including web development and software solutions, digital marketing (SEO, paid ads, PR, influencer marketing), fintech APIs for recharge and bill payments, cyber security, broadcasting via Sadaiv Satya, and cyber awareness through Sadaiv Yuva Foundation.",
    answerHindi: "हम आईटी सेवाओं में विशेषज्ञ हैं जिसमें वेब डेवलपमेंट और सॉफ्टवेयर सॉल्यूशंस, डिजिटल मार्केटिंग (एसईओ, पेड ऐड्स, पीआर, इन्फ्लुएंसर मार्केटिंग), फिनटेक एपीआई रिचार्ज और बिल पेमेंट्स के लिए, साइबर सिक्योरिटी, सदैव सत्य के माध्यम से ब्रॉडकास्टिंग, और सदैव युवा फाउंडेशन के माध्यम से साइबर अवेयरनेस शामिल हैं।",
    keywords: ["services", "offerings", "सेवाएं"],
    category: "Services",
  },
  {
    id: 2,
    question: "Where is Payzon India located?",
    questionHindi: "पेज़ोन इंडिया कहाँ स्थित है?",
    answer: "Payzon India Pvt Ltd is located at B1, Raisen Road, Manak Vihar, Patel Nagar, Bhopal, Madhya Pradesh 462022, India.",
    answerHindi: "पेज़ोन इंडिया प्राइवेट लिमिटेड बी1, रायसेन रोड, मनक विहार, पटेल नगर, भोपाल, मध्य प्रदेश 462022, भारत में स्थित है।",
    keywords: ["location", "address", "स्थान"],
    category: "Contact",
  },
  {
    id: 3,
    question: "How can I contact Payzon India?",
    questionHindi: "पेज़ोन इंडिया से संपर्क कैसे करें?",
    answer: "You can contact us at +91 755 485 9540, +91 755 492 3296, or +91 9303430351. Email: info@payzonapi.com.",
    answerHindi: "आप हमसे +91 755 485 9540, +91 755 492 3296, या +91 9303430351 पर संपर्क कर सकते हैं। ईमेल: info@payzonapi.com।",
    keywords: ["contact", "phone", "email", "संपर्क"],
    category: "Contact",
  },
  {
    id: 4,
    question: "What digital marketing services do you provide?",
    questionHindi: "आप कौन सी डिजिटल मार्केटिंग सेवाएं प्रदान करते हैं?",
    answer: "We provide SEO optimization, paid ad campaigns, PR services, influencer marketing, brand promotion, and more to boost your business visibility and growth.",
    answerHindi: "हम एसईओ ऑप्टिमाइजेशन, पेड ऐड कैंपेन, पीआर सेवाएं, इन्फ्लुएंसर मार्केटिंग, ब्रांड प्रमोशन, और अधिक प्रदान करते हैं जो आपके व्यवसाय की दृश्यता और विकास को बढ़ावा देते हैं।",
    keywords: ["digital marketing", "SEO", "ads", "डिजिटल मार्केटिंग"],
    category: "Digital Marketing",
  },
  {
    id: 5,
    question: "What fintech solutions do you offer?",
    questionHindi: "आप कौन से फिनटेक सॉल्यूशंस प्रदान करते हैं?",
    answer: "We offer APIs for mobile recharge, DTH, bill payments, E-KYC verification, GSTN verification, and secure payment methods like UPI.",
    answerHindi: "हम मोबाइल रिचार्ज, डीटीएच, बिल पेमेंट्स, ई-केवाईसी वेरिफिकेशन, जीएसटीएन वेरिफिकेशन, और यूपीआई जैसी सुरक्षित पेमेंट मेथड्स के लिए एपीआई प्रदान करते हैं।",
    keywords: ["fintech", "API", "recharge", "फिनटेक"],
    category: "Fintech",
  },
  {
    id: 6,
    question: "Tell me about your cyber security services.",
    questionHindi: "आपकी साइबर सिक्योरिटी सेवाओं के बारे में बताएं।",
    answer: "We specialize in combating cyber fraud, providing data security, robust protection against digital crimes, and consultancy from expert advisors in the legal sector.",
    answerHindi: "हम साइबर फ्रॉड से लड़ने, डेटा सिक्योरिटी प्रदान करने, डिजिटल क्राइम्स के खिलाफ मजबूत सुरक्षा, और लीगल सेक्टर में विशेषज्ञ सलाहकारों से कंसल्टेंसी में विशेषज्ञ हैं।",
    keywords: ["cyber security", "protection", "साइबर सुरक्षा"],
    category: "Cyber Security",
  },
  {
    id: 7,
    question: "What is Sadaiv Satya?",
    questionHindi: "सदैव सत्य क्या है?",
    answer: "Sadaiv Satya is our broadcasting startup providing real-time news coverage across India with insightful analysis and reliable reporting.",
    answerHindi: "सदैव सत्य हमारा ब्रॉडकास्टिंग स्टार्टअप है जो भारत भर में रीयल-टाइम न्यूज कवरेज, इनसाइटफुल एनालिसिस और रिलायबल रिपोर्टिंग प्रदान करता है।",
    keywords: ["Sadaiv Satya", "broadcasting", "news", "सदैव सत्य"],
    category: "Broadcasting",
  },
  {
    id: 8,
    question: "What does Sadaiv Yuva Foundation do?",
    questionHindi: "सदैव युवा फाउंडेशन क्या करता है?",
    answer: "Sadaiv Yuva Foundation focuses on raising awareness about cyber threats, promoting digital safety, and providing education, resources, and training.",
    answerHindi: "सदैव युवा फाउंडेशन साइबर थ्रेट्स के बारे में जागरूकता बढ़ाने, डिजिटल सेफ्टी को प्रमोट करने, और एजुकेशन, रिसोर्सेज, और ट्रेनिंग प्रदान करने पर फोकस करता है।",
    keywords: ["Sadaiv Yuva", "foundation", "awareness", "सदैव युवा"],
    category: "Cyber Awareness",
  },
  {
    id: 9,
    question: "Do you provide web development services?",
    questionHindi: "क्या आप वेब डेवलपमेंट सेवाएं प्रदान करते हैं?",
    answer: "Yes, we offer innovative web development, project management, support, and maintenance using cutting-edge technologies for scalable solutions.",
    answerHindi: "हां, हम इनोवेटिव वेब डेवलपमेंट, प्रोजेक्ट मैनेजमेंट, सपोर्ट, और मेंटेनेंस प्रदान करते हैं जो स्केलेबल सॉल्यूशंस के लिए कटिंग-एज टेक्नोलॉजीज का उपयोग करते हैं।",
    keywords: ["web development", "websites", "वेब डेवलपमेंट"],
    category: "Web Development",
  },
  {
    id: 10,
    question: "What are your HR services?",
    questionHindi: "आपकी एचआर सेवाएं क्या हैं?",
    answer: "We provide employment services including payroll, benefits administration, HR management, and assistance for employers.",
    answerHindi: "हम एम्प्लॉयमेंट सेवाएं प्रदान करते हैं जिसमें पेरोल, बेनिफिट्स एडमिनिस्ट्रेशन, एचआर मैनेजमेंट, और एम्प्लॉयर्स के लिए असिस्टेंस शामिल हैं।",
    keywords: ["HR", "human resources", "employment", "एचआर"],
    category: "HR Services",
  },
];

const PayzonIndiaFAQ: React.FC = () => {
  const messageIdCounter = useRef(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hello! I'm Grok, your AI assistant for Payzon India. Ask me anything about our services, location, contact, or offerings.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [suggestions, setSuggestions] = useState<FAQItem[]>([]);
  const [typingMessage, setTypingMessage] = useState<string | null>(null);
  const [language, setLanguage] = useState("en-US");
  const [speechSupported, setSpeechSupported] = useState(true);
  const [avatarState, setAvatarState] = useState<"idle" | "typing" | "speaking">("idle");
  const [backendUrl] = useState("https://slategrey-lion-396996.hostingersite.com");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("faqChatHistory");
      if (saved) {
        const parsedMessages = JSON.parse(saved);
        setMessages(parsedMessages);
        const maxId = Math.max(
          ...parsedMessages.map((msg: Message) => msg.id),
          1
        );
        messageIdCounter.current = maxId + 1;
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("faqChatHistory", JSON.stringify(messages));
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;
      if (
        "SpeechRecognition" in window ||
        "webkitSpeechRecognition" in window
      ) {
        const SpeechRecognition =
          (window as any).SpeechRecognition ||
          (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.lang = language;
        recognitionRef.current.interimResults = false;

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          handleSubmit(transcript);
        };

        recognitionRef.current.onend = () => setIsListening(false);
      } else {
        setSpeechSupported(false);
      }
    }
  }, [language]);

  useEffect(() => {
    if (input.trim()) {
      const filtered = faqData
        .filter(
          (faq) =>
            faq.question.toLowerCase().includes(input.toLowerCase()) ||
            faq.questionHindi.toLowerCase().includes(input.toLowerCase()) ||
            faq.keywords.some((kw) =>
              kw.toLowerCase().includes(input.toLowerCase())
            )
        )
        .slice(0, 4);
      setSuggestions(filtered);
    } else {
      setSuggestions(faqData.slice(0, 4));
    }
  }, [input]);

  const handleSubmit = async (query: string = input) => {
    if (!query.trim()) return;

    const newUserMessage: Message = {
      id: messageIdCounter.current++,
      text: query,
      sender: "user",
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setAvatarState("typing");

    try {
      const response = await fetch(`${backendUrl}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      if (!response.ok) throw new Error("Backend error");
      
      const data = await response.json();
      const botResponseText = data.answer;
      const source = data.source || "ai";

      setTypingMessage("");
      let currentText = "";
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < botResponseText.length) {
          currentText += botResponseText[index];
          setTypingMessage(currentText);
          index++;
        } else {
          clearInterval(typingInterval);
          setMessages((prev) => [
            ...prev,
            {
              id: messageIdCounter.current++,
              text: botResponseText,
              sender: "bot",
              source: source as any,
            },
          ]);
          setTypingMessage(null);
          setAvatarState("idle");
          toggleSpeaking(botResponseText);
        }
      }, 30);
    } catch (error) {
      const errorMsg = language === "en-US"
        ? "Sorry, I'm having trouble connecting. Please ensure the backend server is running on port 5000."
        : "क्षमा करें, कनेक्ट करने में समस्या है। कृपया सुनिश्चित करें कि बैकएंड सर्वर चल रहा है।";
      
      setMessages((prev) => [
        ...prev,
        {
          id: messageIdCounter.current++,
          text: errorMsg,
          sender: "bot",
          source: "error",
        },
      ]);
      setAvatarState("idle");
    }
  };

  const handleSuggestionClick = (faq: FAQItem) => {
    const query = language === "en-US" ? faq.question : faq.questionHindi;
    setInput(query);
    handleSubmit(query);
  };

  const toggleListening = () => {
    if (!recognitionRef.current || !speechSupported) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setAvatarState("speaking");
      } catch (error) {
        console.error("Speech recognition error:", error);
        setIsListening(false);
        setAvatarState("idle");
      }
    }
  };

  const toggleSpeaking = (text: string) => {
    if (!synthRef.current || !speechSupported) return;

    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
      setAvatarState("idle");
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.onstart = () => {
        setIsSpeaking(true);
        setAvatarState("speaking");
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        setAvatarState("idle");
      };
      utterance.onerror = (error) => {
        console.error("Speech synthesis error:", error);
        setIsSpeaking(false);
        setAvatarState("idle");
      };
      synthRef.current.speak(utterance);
    }
  };

  const handleSearchMore = () => {
    if (typeof window !== "undefined") {
      const searchQuery = encodeURIComponent("Payzon India Pvt Ltd " + (input || "services location contact offerings"));
      window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
      setMessages((prev) => [
        ...prev,
        {
          id: messageIdCounter.current++,
          text: language === "en-US" ? "I've opened Google search for more information about Payzon India." : "मैंने पेज़ोन इंडिया के बारे में अधिक जानकारी के लिए Google सर्च खोला है।",
          sender: "bot",
        },
      ]);
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en-US" ? "hi-IN" : "en-US"));
  };

  const clearChat = () => {
    setMessages([
      {
        id: 0,
        text: language === "en-US" ? "Hello! I'm Grok, your AI assistant for Payzon India. Ask me anything about our services, location, contact, or offerings." : "नमस्ते! मैं ग्रोक हूं, पेज़ोन इंडिया के लिए आपका एआई असिस्टेंट। हमारी सेवाओं, स्थान, संपर्क, या ऑफरिंग्स के बारे में कुछ भी पूछें।",
        sender: "bot",
      },
    ]);
    messageIdCounter.current = 1;
    localStorage.removeItem("faqChatHistory");
  };

  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const addReaction = (id: number, reaction: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, reaction } : msg))
    );
  };

  const exportChat = () => {
    const chatText = messages.map((msg) => `${msg.sender.toUpperCase()}: ${msg.text}`).join("\n\n");
    const blob = new Blob([chatText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "payzon-chat.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(hsl(var(--muted))_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 bg-clip-text text-transparent">
            Payzon India AI Assistant
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mt-3 max-w-xl mx-auto">
            {language === "en-US" ? "Ask about our innovative services, locations, or partnerships!" : "हमारी नवीन सेवाओं, स्थानों, या साझेदारियों के बारे में पूछें!"}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <motion.button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}         
              aria-label={language === "en-US" ? "Switch to Hindi" : "Switch to English"}
            >
              {language === "en-US" ? "हिन्दी" : "English"}
            </motion.button>
            <motion.button
              onClick={clearChat}
              className="px-4 py-2 bg-gradient-to-r from-destructive to-red-700 text-white rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Clear chat history"
            >
              <Trash2 className="inline w-5 h-5 mr-2 " /> Clear
            </motion.button>
            <motion.button
              onClick={exportChat}
              className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Export chat"
            >
              <Download className="inline w-5 h-5 mr-2" /> Export
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-4xl bg-card backdrop-blur-md border border-border rounded-3xl shadow-lg mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
                 <motion.div
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-20 h-20"
            animate={{
              y: avatarState === "typing" ? [0, -10, 0] : avatarState === "speaking" ? [0, -5, 0] : 0,
              scale: avatarState === "speaking" ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: avatarState === "typing" ? 0.5 : 0.3,
              repeat: avatarState !== "idle" ? Infinity : 0,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Grok AI Assistant"
              width={80}
              height={80}
           className="rounded-full border-2 border-blue-300 shadow-md"

            />
          </motion.div>
          <div className="h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      G
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] sm:max-w-[60%] p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground"
                        : msg.source === "error"
                        ? "bg-destructive/10 text-destructive border border-destructive/20"
                        : "bg-muted text-foreground border border-border"
                    }`}
                  >
                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    {msg.source && (
                      <span className="text-xs mt-2 block opacity-60">
                        {msg.source === "company-faq" ? "📋 Company FAQ" : msg.source === "ai" ? "🤖 Grok AI" : "⚠️ Error"}
                      </span>
                    )}
                    <div className="flex gap-2 mt-2">
                      <button onClick={() => copyMessage(msg.text)} className="text-muted-foreground hover:text-foreground">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button onClick={() => addReaction(msg.id, "👍")} className="text-muted-foreground hover:text-primary">
                        👍
                      </button>
                      <button onClick={() => addReaction(msg.id, "❤️")} className="text-muted-foreground hover:text-red-500">
                        ❤️
                      </button>
                    </div>
                    {msg.reaction && <span className="text-2xl mt-1">{msg.reaction}</span>}
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center  font-bold">
                      U
                    </div>
                  )}
                </motion.div>
              ))}
              {typingMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    G
                  </div>
                  <div className="max-w-[60%] p-4 sm:p-5 rounded-2xl bg-muted text-foreground border border-border">
                    <p className="text-sm sm:text-base leading-relaxed">{typingMessage}</p>
                    <div className="flex gap-1 mt-2">
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          <AnimatePresence>
            {suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 sm:px-6 py-3 bg-muted/50 border-t border-border"
              >
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  {language === "en-US" ? "Suggested Questions:" : "सुझाए गए प्रश्न:"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((faq) => (
                    <motion.button
                      key={faq.id}
                      onClick={() => handleSuggestionClick(faq)}
                      className="px-3 py-1 bg-primary/10 rounded-full text-foreground text-xs sm:text-sm hover:bg-primary/20 transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-primary text-xs">{faq.category}</span>
                      {language === "en-US" ? faq.question : faq.questionHindi}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="border-t border-border p-3 sm:p-4 flex items-center gap-2 sm:gap-3 bg-card">
            <motion.button
              onClick={toggleListening}
              disabled={!speechSupported}
              className={`p-2 sm:p-3 rounded-xl transition-colors ${
                isListening
                  ? "bg-destructive/30 text-destructive"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              animate={isListening ? { scale: [1, 1.1, 1] } : { scale: 1 }}
              transition={{
                duration: 0.3,
                repeat: isListening ? Infinity : 0,
                repeatType: "reverse",
              }}
              aria-label={isListening ? "Stop listening" : "Start listening"}
            >
              <Mic className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              placeholder={language === "en-US" ? "Ask about Payzon India..." : "पेज़ोन इंडिया के बारे में पूछें..."}
              className="flex-1 bg-transparent text-foreground border border-border rounded-lg p-2 outline-none text-sm sm:text-base placeholder-muted-foreground"
              aria-label="Ask a question"
            />
            <motion.button
              onClick={() => handleSubmit()}
              className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Send message"
            >
              <Send className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={handleSearchMore}
              className="p-2 sm:p-3 bg-muted rounded-xl text-muted-foreground hover:bg-muted/80 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Search on Google"
            >
              <Search className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={() => toggleSpeaking(messages[messages.length - 1]?.text || "")}
              disabled={!speechSupported || messages.length <= 1 || messages[messages.length - 1].sender !== "bot"}
              className={`p-2 sm:p-3 rounded-xl transition-colors ${
                isSpeaking
                  ? "bg-green-500/30 text-green-600"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              animate={isSpeaking ? { scale: [1, 1.1, 1] } : { scale: 1 }}
              transition={{
                duration: 0.3,
                repeat: isSpeaking ? Infinity : 0,
                repeatType: "reverse",
              }}
              aria-label={isSpeaking ? "Stop speaking" : "Speak message"}
            >
              <Volume2 className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 w-full max-w-4xl"
        >
          <p className="text-sm text-muted-foreground mb-2">
            {language === "en-US" ? "Quick Links:" : "त्वरित लिंक:"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {faqData.slice(0, 6).map((faq) => (
              <motion.button
                key={faq.id}
                onClick={() => handleSuggestionClick(faq)}
                className="p-2 bg-primary/10 rounded-lg text-foreground text-xs sm:text-sm hover:bg-primary/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "en-US" ? faq.question : faq.questionHindi}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {!speechSupported && (
          <p className="text-destructive mt-4">
            {language === "en-US" ? "Speech features are not supported in this browser." : "इस ब्राउज़र में स्पीच फीचर्स समर्थित नहीं हैं।"}
          </p>
        )}
      </div>

      <style>{`
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.3);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default PayzonIndiaFAQ;
