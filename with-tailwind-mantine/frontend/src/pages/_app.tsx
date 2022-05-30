import '../styles/globals.css';
import MantineWrapper from '../wrappers/MantineWrapper';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page: JSX.Element) => page);

    return getLayout(
        <MantineWrapper>
            <Component {...pageProps} />
        </MantineWrapper>
    );
}

export default MyApp;
