// src/router/components.tsx
import MonitoringPage from '@/pages/MonitoringPage';

export const routeComponents = {
    MonitoringPage: <MonitoringPage />,
    // Tambahkan komponen page lainnya di sini
};

export type RouteComponentsType = keyof typeof routeComponents;