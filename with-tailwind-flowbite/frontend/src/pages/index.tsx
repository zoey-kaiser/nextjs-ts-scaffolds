import DefaultLayout from '../layouts/DefaultLayout';

const Home: NextPageWithLayout = () => {
    return <div className="text-lg">No content yet.</div>;
};

Home.getLayout = function getLayout(page: JSX.Element) {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
