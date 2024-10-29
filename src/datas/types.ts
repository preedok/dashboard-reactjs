export interface CCTVCamera {
    id: string;
    name: string;
    location: string;
    feedUrl?: string;
    status: 'loading' | 'active' | 'error';
}