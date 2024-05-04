import styles from "./Hero.module.css"
import heroImage from '../../assets/hero_medical_care.svg'
function Hero(){
    return(
        <div className={styles.main_content}>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.hero_left}>
                        <h1 className={styles.hero_title}>Covid ID</h1>
                        <h4 className={styles.hero_genre}>Monitoring Perkembangan Covid</h4>
                        <p className={styles.hero_description}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                        <button className={styles.hero_button}>Vaccine</button>
                    </div>
                    <div className={styles.hero_right}>
                        <img 
                            className={styles.hero_image}
                            src={heroImage}
                            alt="hero"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Hero