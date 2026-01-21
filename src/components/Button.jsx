import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    icon: Icon,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";

    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const variantStyles = {
        primary: "bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white shadow-lg shadow-blue-500/20 dark:shadow-cyan-500/20 hover:shadow-blue-500/40 dark:hover:shadow-cyan-500/40 hover:brightness-110",
        secondary: "bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-cyan-400 hover:shadow-lg",
        glass: "bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/10 hover:border-blue-500/50 hover:shadow-md transition-all",
        ghost: "bg-transparent text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-blue-900/10",
        outline: "bg-transparent border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-950/30"
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

    const animationProps = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
    };

    const content = (
        <>
            {Icon && <Icon className={`w-5 h-5 ${children ? 'mr-2' : ''}`} />}
            {children}
        </>
    );

    if (href) {
        if (href.startsWith('/') && !props.target) {
            const MotionLink = motion.create(Link);
            return (
                <MotionLink to={href} className={combinedClassName} {...animationProps} {...props}>
                    {content}
                </MotionLink>
            );
        }
        return (
            <motion.a href={href} className={combinedClassName} {...animationProps} {...props}>
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button onClick={onClick} className={combinedClassName} {...animationProps} {...props}>
            {content}
        </motion.button>
    );
};

export default Button;
