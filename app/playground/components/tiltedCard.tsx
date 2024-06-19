'use-client'
import React from 'react';
import { Tilt } from 'react-tilt';

interface TiltCardProps {
    imageSrc: string;
    title: string;
    description: string;
    onNavigate: any
}

export const TiltCard: React.FC<TiltCardProps> = ({ imageSrc, title, description, onNavigate }) => {
    return (
        <Tilt className="tilt" options={{ max: 40, scale: 1.00 }}>
            <div onClick={onNavigate} className="bg-light max-w-sm rounded-lg cursor-pointer overflow-hidden shadow-lg shadow-purple-500 transform transition-transform duration-50 hover:scale-105 w-[400px]">
                <img className="w-full" src={imageSrc} alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
            </div>
        </Tilt>
    );
};
