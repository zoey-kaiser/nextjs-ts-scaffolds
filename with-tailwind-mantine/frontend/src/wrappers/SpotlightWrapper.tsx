import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
import React from 'react';

// You can also pass a custom component for the spotlight actions
// https://mantine.dev/others/spotlight/#custom-action-component
const actions: SpotlightAction[] = [
    {
        id: 'home',
        title: 'Home',
        description: 'Get to home page',
        onTrigger: () => console.info('Home'),
    },
    {
        id: 'dashboard',
        title: 'Dashboard',
        description: 'Get full information about current system status',
        onTrigger: () => console.info('Dashboard'),
    },
    {
        id: 'documentation',
        title: 'Documentation',
        description: 'Visit documentation to lean more about all features',
        onTrigger: () => console.info('Documentation'),
    },
];

const SpotlightWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <SpotlightProvider
            actions={actions}
            searchPlaceholder="Search..."
            shortcut="shift + s"
            nothingFoundMessage="Nothing found..."
        >
            {children}
        </SpotlightProvider>
    );
};

export default SpotlightWrapper;
