// src/router/routes.tsx
import { RouteComponentsType } from './component';

interface RouteConfig {
    path: string;
    component: RouteComponentsType;
    // Tambahkan properti lain jika diperlukan seperti:
    // isProtected?: boolean;
    // layout?: string;
}

export const routes: RouteConfig[] = [
    {
        path: '/',
        component: 'MonitoringPage',
    },
    // Tambahkan rute lainnya di sini
];