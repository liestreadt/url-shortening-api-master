import Button from '@/components/Button/Button';
import styles from './mainInfo.module.css';

function MainInfo() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.textContainer}>
                    <div className={styles.titleText}>
                        {/* //! make this text smaller on small desktop window sizes */}
                        <span>More than just</span>
                        <span>shorter links</span>
                    </div>
                    <div className={styles.motivatorText}>
                            Build your brand's recognition and get detailed insights on how your links are performing.
                    </div>
                    <div className={styles.btnContainer}>
                        <Button fontSize='1.3rem' padding='0.9rem 2.8rem' text='Get Started' />
                    </div>
                </div>
                <div className={styles.picture}>
                    {/* //! make this image as a background, not as a react node */}
                    {/* <Picture  /> */}
                </div>
            </div>
        </>
    );
}

export default MainInfo;
