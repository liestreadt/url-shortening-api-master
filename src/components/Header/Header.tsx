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
                        <div>Features</div>
                        <div>Pricing</div>
                        <div>Resources</div>
                    </div>
                </nav>
                <div className={styles.loginBar}>
                    <div>Login</div>
                    <Button padding='0.55rem 1.55rem' text='Sign Up'/>
                </div>
            </header>
        </>
    );
}

export default Header;
