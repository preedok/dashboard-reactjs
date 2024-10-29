import React from 'react';
import Text from '@/components/atoms/Text';
interface UserProfileProps {
    username: string;
    role: string;
    avatarUrl?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
    username,
    role,
    avatarUrl
}) => {
    return (
        <div className="mb-6 rounded-lg bg-gray-100 p-3">
            <div className="flex items-center gap-3">
                {avatarUrl ? (
                    <img
                        src={avatarUrl}
                        alt={username}
                        className="h-10 w-10 rounded-full object-cover"
                    />
                ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-lg font-medium text-gray-600">
                        {username.charAt(0).toUpperCase()}
                    </div>
                )}
                <div>
                    <Text variant="p" size="lg" weight="bold">{username}</Text>
                    <Text variant="p" size="xs" weight="semibold">{role}</Text>
                </div>
            </div>
        </div>
    );
};