import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    className = '',
    ...props
}) => {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <input
                className={`rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 ${className}`}
                {...props}
            />
            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
};