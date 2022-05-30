import dynamic from 'next/dynamic';

// This is an extra wrapper for the mantine rich text editor, as it does not support SSR by default
// Configuration of the Text Editor can be done once imported on pages or in components
export default dynamic(() => import('@mantine/rte'), {
    // Disable during server side rendering
    ssr: false,

    // Render anything as fallback on server, e.g. loader or html content without editor
    loading: () => null,
});
