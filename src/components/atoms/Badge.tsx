// components/atoms/Badge/Badge.tsx
import React from 'react';

interface BadgeProps {
    variant?: 'success' | 'warning' | 'error' | 'info';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    variant = 'info',
    size = 'medium',
    children,
    className,
}) => {
    const variantStyles = {
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800',
    };

    const sizeStyles = {
        small: 'px-2 py-0.5 text-xs',
        medium: 'px-3 py-1 text-sm',
        large: 'px-4 py-1.5 text-base',
    };

    return (
        <span
            className={`inline-flex items-center rounded-full font-medium
        ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        >
            {children}
        </span>
    );
};

export default Badge;