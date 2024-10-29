import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Camera,
    Archive,
    History,
    Users,
} from 'lucide-react';
import { NavItem } from '@/components/molecules/NavItem';
import { UserProfile } from '../molecules/UserProfile';
import { useSidebar } from '@/context/SidebarContext';
interface NavigationItem {
    to: string;
    icon: any;
    label: string;
}

const navigationItems: NavigationItem[] = [
    {
        to: '/',
        icon: LayoutDashboard,
        label: 'Dashboard'
    },
    {
        to: '/monitoring',
        icon: Camera,
        label: 'CCTV'
    },
    {
        to: '/archive',
        icon: Archive,
        label: 'Arsip'
    },
    {
        to: '/activity',
        icon: History,
        label: 'Activity History'
    },
    {
        to: '/users',
        icon: Users,
        label: 'Users'
    }
];

export const Sidebar: React.FC = () => {
    const location = useLocation();
    const { isOpen } = useSidebar();
    return (
        <aside
            className={`
                flex h-screen flex-col border-r border-gray-200 bg-[#133E87]
                transition-all duration-300 ease-in-out
                ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}
            `}
        >
            <div className="p-4">
                <UserProfile
                    username="david.ams"
                    role="CUSEMOD P2"
                />
                <nav className="flex flex-col gap-1">
                    {navigationItems.map((item) => (
                        <NavItem
                            key={item.to}
                            to={item.to}
                            icon={item.icon}
                            label={item.label}
                            isActive={location.pathname === item.to}
                        />
                    ))}
                </nav>
            </div>
        </aside>
    );
};