import Head from 'next/head';

const Layout = ({children}) => (
    <React.Fragment>
        <Head>
            <link rel="preload" href="static/apple-touch-icon.png" as="image" />
            <link rel="preload" href="static/favicon-32x32.png" as="image" />
            <link rel="preload" href="static/favicon-16x16.png" as="image" />
            <link rel="preload" href="static/site.webmanifest" as="image" />
            <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
            <link rel="manifest" href="static/site.webmanifest" />
        </Head>
        <main>
            { children }
        </main>
    </React.Fragment>
)

export default Layout;