import Button from '@/components/Button/Button';
import styles from './header.module.css';
import Title from '@/assets/images/logo.svg?react';

function Header() {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.title}>
                        <Title />
                    </div>
                    <div className={styles.links}>
                        <a className={styles.link} href=''>
                            Features
                        </a>
                        <a className={styles.link} href=''>
                            Pricing
                        </a>
                        <a className={styles.link} href=''>
                            Resources
                        </a>
                    </div>
                </nav>
                <div className={styles.loginBar}>
                    <a className={styles.link} href=''>
                        Login
                    </a>
                    <a href=''>
                        <Button
                            text='Sign Up'
                            buttonSize='small'
                            borderRadius='rounded'
                        />
                    </a>
                </div>
            </header>
        </>
    );
}

export default Header;
