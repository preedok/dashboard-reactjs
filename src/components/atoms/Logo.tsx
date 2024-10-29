import React from 'react';

export const Logo: React.FC = () => {
    return (
        <div className="flex items-center gap-2 px-2">
            <img
                src="/src/assets/tpk-logo.png"
                alt="Pelindo Logo"
                className="h-12"
            />
        </div>
    );
};
