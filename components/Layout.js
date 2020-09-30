import Head from 'next/head';
import Footer from './Footer'

const Layout = ({children}) => (
    <React.Fragment>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
            <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
            <link rel="manifest" href="static/site.webmanifest" />
        </Head>
        <main>
            { children }
            <Footer />
        </main>
    </React.Fragment>
)

export default Layout;