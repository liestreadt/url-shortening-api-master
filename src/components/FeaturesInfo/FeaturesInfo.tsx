import FeaturesCard from '@/components/FeaturesInfo/FeaturesCard';
import styles from './featuresInfo.module.css';
import { FEATURES_CARD_CONTENT } from '@/constants';

function FeaturesInfo() {


    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>Advanced Statistics</div>
                    <div className={styles.subTitle}>
                        Track how your links are performing across the web with
                        our advanced statistics dashboard.
                    </div>
                </div>
                <div className={styles.featuresCardsWrapper}>
                    {FEATURES_CARD_CONTENT.map((item) => <FeaturesCard title={item.title} text={item.text} image={item.image} />)}
                </div>
            </div>
        </>
    );
}

export default FeaturesInfo;
