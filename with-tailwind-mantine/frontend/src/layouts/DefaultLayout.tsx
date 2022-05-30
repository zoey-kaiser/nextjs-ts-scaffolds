import { useColorScheme } from '@mantine/hooks';

const DefaultLayout = ({ children }: { children: JSX.Element }) => {
    // get the current color scheme (in case you need to interact with extra mantine styles)
    const colorScheme = useColorScheme();

    return (
        <div className="min-h-screen">
            <header className="w-full bg-black text-white text-center py-2">
                Current Color Scheme: <span className="text-red-500">{colorScheme}</span>
            </header>
            <div className="my-2">{children}</div>
        </div>
    );
};

export default DefaultLayout;
