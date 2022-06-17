import React from 'react';

export interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    type: 'primary' | 'secondary' | 'success' | 'danger';
}
