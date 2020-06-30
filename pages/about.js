import Layout from '../components/Layout';
import Link from 'next/link';

const About = () => (
    <Layout>
        <h1>About</h1>
        <Link href="/">
            <a>Home</a>
        </Link>    
    </Layout>)

export default About;