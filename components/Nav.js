import Link from 'next/link';

const style = {
    color: 'red',
    fontWeight: 'bold'
}

const Nav = () => (
    <nav>
        <Link href="/">
            <a style={style}>Home</a>
        </Link>
        <Link href="about">
            <a style={style}>About</a>
        </Link>
        <style jsx>
            {`
                p {
                    color: blue
                }
            `}
        </style>
    </nav>
)

export default Nav;