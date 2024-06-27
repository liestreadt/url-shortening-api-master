import Button from '@/components/Button/Button';
import styles from './header.module.css';
import Title from '@/assets/images/logo.svg?react'

function Header() {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.title}><Title /></div>
                    <div className={styles.links}>
                        <a className={styles.link} href=''>Features</a>
                        <a className={styles.link} href=''>Pricing</a>
                        <a className={styles.link} href=''>Resources</a>
                    </div>
                </nav>
                <div className={styles.loginBar}>
                    <a className={styles.link} href=''>Login</a>
                    <Button padding='0.55rem 1.55rem' text='Sign Up'/>
                </div>
            </header>
        </>
    );
}

export default Header;
