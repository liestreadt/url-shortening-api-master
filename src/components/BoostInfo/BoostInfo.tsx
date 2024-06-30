import Button from '@/components/Button/Button';
import styles from './boostInfo.module.css';

function BoostInfo() {
    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.title}>Boost your links today</div>
                <a href=''>
                    <Button
                        text='Get Started'
                        buttonSize='big'
                        borderRadius='rounded'
                    />
                </a>
            </section>
        </>
    );
}

export default BoostInfo;
