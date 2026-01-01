import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  
  const baseStyles = "relative inline-flex items-center justify-center font-sans uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base font-bold",
  };

  const variantStyles = {
    primary: "bg-transparent text-white border-2 border-brand-primary shadow-[0_0_15px_rgba(255,106,213,0.5)] hover:bg-brand-primary hover:text-black hover:shadow-[0_0_30px_rgba(255,106,213,0.8)]",
    secondary: "bg-brand-accent/10 text-brand-accent border border-brand-accent/50 hover:bg-brand-accent hover:text-bg-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]",
    outline: "bg-transparent text-text-muted border border-border-subtle hover:border-text-primary hover:text-text-primary",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <motion.span className="relative z-10">{children}</motion.span>
      {variant === 'primary' && (
        <div className="absolute inset-0 -z-0 bg-brand-primary opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
      )}
    </motion.button>
  );
};