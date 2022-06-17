import React, { FC } from 'react';
import '../../assets/styles/tailwind.css';
import { BaseButtonProps } from './BaseButton.types';

export const BaseButton: FC<BaseButtonProps> = ({ type, children, ...HTMLAttributes }) => {
    const colors = {
        primary: 'text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-400 disabled:hover:bg-indigo-500',
        secondary: 'text-white bg-gray-400 hover:bg-gray-600 focus:ring-gray-300 disabled:hover:bg-gray-400',
        success: 'text-white bg-green-500 hover:bg-green-700 focus:ring-green-400 disabled:hover:bg-green-500',
        danger: 'text-white bg-red-500 hover:bg-red-700 focus:ring-red-400 disabled:hover:bg-red-500',
    };

    const classList = [
        HTMLAttributes.className,
        // eslint-disable-next-line security/detect-object-injection
        colors[type],
        'py-2 px-6 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 ' +
            'cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
    ];

    return (
        <button {...HTMLAttributes} className={classList.join(' ')}>
            {children}
        </button>
    );
};
