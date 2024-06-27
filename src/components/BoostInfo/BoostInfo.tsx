import Button from '@/components/Button/Button';
import styles from './boostInfo.module.css';

function BoostInfo() {
    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.title}>Boost your links today</div>
                <Button
                    text='Get Started'
                    fontSize='1.3rem'
                    padding='0.9rem 2.8rem'
                />
            </section>
        </>
    );
}

export default BoostInfo;
