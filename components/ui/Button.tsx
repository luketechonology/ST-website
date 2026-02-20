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
    const baseStyles = "inline-flex items-center justify-center rounded transition-all font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/50 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:shadow-[0_0_20px_rgba(41,121,255,0.6)] border border-brand-blue/50 relative overflow-hidden group",
        secondary: "bg-white text-brand-purple hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(213,0,249,0.3)] font-bold",
        outline: "border border-brand-purple text-brand-purple hover:bg-brand-purple/10 hover:shadow-[0_0_15px_rgba(213,0,249,0.3)]",
        ghost: "text-gray-300 hover:text-white hover:bg-white/5",
        tech: "bg-black/50 text-brand-blue border border-brand-blue/50 hover:bg-brand-blue/10 hover:shadow-[0_0_15px_rgba(41,121,255,0.5)] hover:border-brand-blue transition-all duration-300 backdrop-blur-sm",
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
