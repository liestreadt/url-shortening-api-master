import Header from '@/components/Header/Header';
import MainInfo from '@/components/MainInfo/MainInfo';
import LinkForm from '@/components/LinkForm/LinkForm';
import FeaturesInfo from '@/components/FeaturesInfo/FeaturesInfo';
import BoostInfo from '@/components/BoostInfo/BoostInfo';
import Footer from '@/components/Footer/Footer';
import styles from './app.module.css';

function App() {
    return (
        <>
            <div className={styles.pageWrapper}>
                <div className={styles.backgroundWrapper}>
                    <div className={styles.page}>
                        <Header />
                        <main className={styles.mainWrapper}>
                            <MainInfo />
                            <LinkForm />
                            <FeaturesInfo />
                        </main>
                    </div>
                </div>
                <div className={styles.footerWrapper}>
                    <BoostInfo />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
