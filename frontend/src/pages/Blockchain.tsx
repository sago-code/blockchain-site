import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success';
  disabled?: boolean; // <-- Agrega esta línea
}

export default function AnimatedButton({ 
  children, 
  onClick, 
  href, 
  className = '', 
  variant = 'primary',
  disabled = false // <-- Y esta línea
}: AnimatedButtonProps) {
  const baseClasses = "relative overflow-hidden rounded-xl font-semibold px-8 py-4 shadow-lg transform transition-all duration-300 hover:shadow-xl";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800",
    success: "bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700"
  };

  const buttonContent = (
    <motion.span
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-60 pointer-events-none' : ''}`}
      whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        whileHover={disabled ? {} : { opacity: 0.3, x: ["0%", "100%"] }}
        transition={{ duration: 0.6 }}
      />
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="no-underline">
        {buttonContent}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="bg-transparent border-0 p-0" disabled={disabled}>
      {buttonContent}
    </button>
  );
}