import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EyeballThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full cursor-pointer focus:outline-none group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Eyeball outer - sclera */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 overflow-hidden"
        style={{
          background: isDark 
            ? "radial-gradient(circle, #1a1a2e 0%, #0f0f1a 100%)" 
            : "radial-gradient(circle, #ffffff 0%, #f0f0f0 100%)",
          borderColor: isDark ? "hsl(var(--primary))" : "hsl(var(--primary))",
          boxShadow: isDark 
            ? "0 0 20px hsl(var(--primary) / 0.5), inset 0 0 15px rgba(0,0,0,0.5)" 
            : "0 0 20px hsl(var(--primary) / 0.3), inset 0 0 10px rgba(0,0,0,0.1)",
        }}
        animate={{
          boxShadow: isDark 
            ? ["0 0 20px hsl(var(--primary) / 0.5)", "0 0 30px hsl(var(--primary) / 0.7)", "0 0 20px hsl(var(--primary) / 0.5)"]
            : ["0 0 15px hsl(var(--primary) / 0.3)", "0 0 25px hsl(var(--primary) / 0.5)", "0 0 15px hsl(var(--primary) / 0.3)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Iris */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-7 h-7 rounded-full"
          style={{
            background: isDark
              ? "radial-gradient(circle, #6366f1 0%, #4f46e5 40%, #312e81 100%)"
              : "radial-gradient(circle, #60a5fa 0%, #3b82f6 40%, #1d4ed8 100%)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: isDark ? [1, 0.9, 1] : [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Pupil */}
          <motion.div
            className="absolute top-1/2 left-1/2 rounded-full bg-black"
            style={{
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              width: isDark ? ["14px", "18px", "14px"] : ["10px", "6px", "10px"],
              height: isDark ? ["14px", "18px", "14px"] : ["10px", "6px", "10px"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* Light reflection */}
            <div 
              className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/80"
            />
            <div 
              className="absolute bottom-1.5 right-0.5 w-1 h-1 rounded-full bg-white/40"
            />
          </motion.div>
          
          {/* Iris texture */}
          <div 
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: isDark
                ? "repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(255,255,255,0.1) 10deg 20deg)"
                : "repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(0,0,0,0.1) 10deg 20deg)",
            }}
          />
        </motion.div>

        {/* Eyelid effect on hover */}
        <motion.div
          className="absolute inset-x-0 top-0 origin-top"
          style={{
            background: isDark ? "#0f0f1a" : "#e5e5e5",
            height: "50%",
            borderRadius: "0 0 50% 50%",
          }}
          initial={{ scaleY: 0 }}
          whileHover={{ scaleY: 0.3 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Moon/Sun indicator */}
      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[8px]"
        style={{
          background: isDark 
            ? "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)" 
            : "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
          boxShadow: isDark 
            ? "0 0 8px rgba(99, 102, 241, 0.5)" 
            : "0 0 8px rgba(251, 191, 36, 0.5)",
        }}
        animate={{
          rotate: isDark ? 0 : 360,
        }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? "🌙" : "☀️"}
      </motion.div>
    </motion.button>
  );
};

export default EyeballThemeToggle;
