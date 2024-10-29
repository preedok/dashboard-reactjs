import React from 'react';
import { NavLink } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import Text from '@/components/atoms/Text';

interface NavItemProps {
    to: string;
    icon: LucideIcon;
    label: string;
    isActive?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
    to,
    icon: Icon,
    label,
    isActive
}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive: active }) =>
                `flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${active || isActive
                    ? 'bg-[#F3F3E0] text-[#133E87]'
                    : 'text-white'
                } py-3`
            }
        >
            <Icon size={28} />
            <Text variant="span" size="sm" weight="medium">{label}</Text>
        </NavLink>
    );
};
