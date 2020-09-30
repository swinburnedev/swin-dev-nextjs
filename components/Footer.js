import LinkedIn from '../svg/linkedin.svg';
import styles from '../scss/components/Footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/andy-swinburne/">
            <LinkedIn className="icon icon--white" />
            <span className="u-hidden-visually">LinkedIn</span>
        </a>
    </footer>
)

export default Footer;
