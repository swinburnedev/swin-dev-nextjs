import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => (
    <Layout>
        <Head>
            <title>Home | Swinburne Dev</title>
            <meta name="description" content="Andy Swinburne dev playground site" />
        </Head>
        <section>
            <h1 data-text="SWINBURNE">SWINBURNE</h1>
            <h2 data-text="DEVELOPMENT">DEVELOPMENT</h2>
        </section>
        <section className="banner">
            <div className="inner">
                <h3>Hi, I'm Andy Swinburne</h3>
            </div>
            <div className="inner">
                <h4 style={{ marginBottom: '1rem' }}>Lead front end engineer</h4>
                <p style={{ marginBottom: '1rem' }}>Welcome to my site, this is my portfolio and playground site. Showcasing some example projects and an opportunity to test out some new tech.</p>
                <p>More to follow, check back soon :)</p>
            </div>
        </section>
    </Layout>)

export default Home;