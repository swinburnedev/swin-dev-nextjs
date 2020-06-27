import Head from 'next/head';
import Layout from '../components/Layout';
import '../scss/main.scss';

const Home = () => (
    <Layout>
        <Head>
            <title>Home | Swinburne Dev</title>
            <meta name="description" content="Andy Swinburne dev playground site" />
        </Head>
        <h1 data-text="Swinburne">Swinburne</h1>
        <h2 data-text="Development">Development</h2>
    </Layout>)

export default Home;