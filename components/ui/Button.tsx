import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'tech';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded transition-all font-medium focus:outline-none focus:ring-2 focus:ring-brand-gold/50 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gradient-to-r from-brand-red to-brand-red-light text-white hover:shadow-[0_0_20px_rgba(186,28,28,0.6)] border border-brand-red/50 relative overflow-hidden group",
        secondary: "bg-brand-gold text-brand-dark hover:bg-brand-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] font-bold",
        outline: "border border-brand-gold text-brand-gold hover:bg-brand-gold/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]",
        ghost: "text-gray-300 hover:text-white hover:bg-white/5",
        tech: "bg-black/50 text-brand-gold border border-brand-gold/50 hover:bg-brand-gold/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:border-brand-gold transition-all duration-300 backdrop-blur-sm",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-6 py-2.5 text-sm",
        lg: "px-8 py-3.5 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
