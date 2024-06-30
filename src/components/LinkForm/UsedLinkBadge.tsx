import Button from '@/components/Button/Button';
import styles from './linkForm.module.css';

function UsedLinksBadge() {
    return (
        <>
            <article className={styles.badge}>
                <div className={styles.originalLink}>
                    https://www.frontendmentor.io
                </div>
                <div className={styles.newLinkWrapper}>
                    <div className={styles.newLink}>https://reLink/k4IKyk</div>
                    <Button
                        text='Copy'
                        buttonSize='small'
                        borderRadius='squared'
                    />
                </div>
            </article>
        </>
    );
}

export default UsedLinksBadge;
