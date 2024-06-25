import styles from './featuresInfo.module.css';

function FeaturesCard(props: FeaturesCardPropsType) {
    return (
        <>
            <article className={styles.cardWrapper}>
                <div className={styles.imageWrapper}>
                    <div className={styles.imageContainer}>
                        {<props.image />}
                    </div>
                </div>
                <div className={styles.cardContentWrapper}>
                    <div className={styles.cardTitle}>{props.title}</div>
                    <div className={styles.cardText}>{props.text}</div>
                </div>
            </article>
        </>
    );
}

export default FeaturesCard;
