// src/AppRouter.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '@/components/organisms/Sidebar';
import { Header } from '@/components/organisms/Headerbar';
import { SidebarProvider, useSidebar } from '@/context/SidebarContext';
import { routes } from '@/router/routes';
import { routeComponents } from '@/router/component';

const AppContent: React.FC = () => {
    const { isOpen } = useSidebar();
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <div
                    className={`
                        fixed top-16 left-0 h-full
                        transition-transform duration-300 ease-in-out
                        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}
                >
                    <Sidebar />
                </div>
                <main
                    className={`
                        flex-1 overflow-auto p-6 bg-gray-50
                        transition-all duration-300 ease-in-out
                        ${isOpen ? 'ml-64' : 'ml-0'}
                    `}
                    style={{
                        transform: `translateX(${isOpen ? '0' : '-0px'})`,
                        transition: 'all 0.3s ease-in-out'
                    }}
                >
                    <div className="transition-opacity duration-300 ease-in-out">
                        <Routes>
                            {routes.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={routeComponents[route.component]}
                                />
                            ))}
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    );
};

const AppRouter: React.FC = () => {
    return (
        <SidebarProvider>
            <AppContent />
        </SidebarProvider>
    );
};

export default AppRouter;