import { useState } from 'react';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { Logo } from '@/components/atoms/Logo';
import { useSidebar } from '@/context/SidebarContext';
import { Menu, X } from 'lucide-react';
export const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { isOpen, toggleSidebar } = useSidebar();
    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
    };
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-100 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <div className="p-1 flex gap-5">
                            <Logo />
                            <button
                                onClick={toggleSidebar}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
                            >
                                {isOpen ? (
                                    <Menu className="h-5 w-5 text-gray-600" />
                                ) : (
                                    <X className="h-5 w-5 text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Search Section */}
                    <div className="flex items-center gap-3">
                        <div className="w-64">
                            <Input
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <Button
                            variant="primary"
                            size="md"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;