import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { useColorScheme } from '@mantine/hooks';
import SpotlightWrapper from './SpotlightWrapper';

// Here you can customize all the Mantine Wrappers
// See https://mantine.dev/theming/mantine-provider for more information

const MantineWrapper = ({ children }: { children: React.ReactNode }) => {
    const colorScheme = useColorScheme();
    return (
        <MantineProvider withGlobalStyles withCSSVariables withNormalizeCSS theme={{ colorScheme, focusRing: 'auto' }}>
            <ModalsProvider>
                <SpotlightWrapper>
                    <NotificationsProvider position="bottom-right" zIndex={2077}>
                        {children}
                    </NotificationsProvider>
                </SpotlightWrapper>
            </ModalsProvider>
        </MantineProvider>
    );
};

export default MantineWrapper;
