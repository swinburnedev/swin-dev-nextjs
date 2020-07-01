import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => (
    <Layout>
        <Head>
            <title>Home | Swinburne Dev</title>
            <meta name="description" content="Andy Swinburne dev playground site" />
        </Head>
        <h1 data-text="SWINBURNE">SWINBURNE</h1>
        <h2 data-text="DEVELOPMENT">DEVELOPMENT</h2>
    </Layout>)

export default Home;