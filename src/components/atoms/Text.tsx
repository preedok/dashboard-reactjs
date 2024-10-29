// components/atoms/Text/Text.tsx
import React from 'react';

interface TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    color?: string;
    className?: string;
    children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
    variant = 'p',
    size = 'base',
    weight = 'normal',
    color,
    className,
    children,
}) => {
    const Component = variant;

    const styles: React.CSSProperties = {
        margin: 0,
        fontSize: getFontSize(size),
        fontWeight: getFontWeight(weight),
        color: color || 'inherit',
    };

    return (
        <Component style={styles} className={className}>
            {children}
        </Component>
    );
};

function getFontSize(size: TextProps['size']): string {
    switch (size) {
        case 'xs': return '12px';
        case 'sm': return '14px';
        case 'base': return '16px';
        case 'lg': return '18px';
        case 'xl': return '20px';
        case '2xl': return '24px';
        default: return '16px';
    }
}

function getFontWeight(weight: TextProps['weight']): number {
    switch (weight) {
        case 'normal': return 400;
        case 'medium': return 500;
        case 'semibold': return 600;
        case 'bold': return 700;
        default: return 400;
    }
}

export default Text;