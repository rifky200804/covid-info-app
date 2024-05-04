import styles from './Footer.module.css';

function Footer(){
   
    return(
        <>
            <div className={styles.container}>
            <nav className={styles.footer}>  
                <div className={styles.footer__left}>
                    <p className={styles.footer__brand}>Covid ID</p>
                    <br />
                    <p>Developed By rifky200804</p>
                </div>
                <div>
                    <ul className={styles.footer__list }>
                        <li className={styles.footer__item}>Global</li>
                        <li className={styles.footer__item}>Indonesia</li>
                        <li className={styles.footer__item}>Provinsi</li>
                        <li className={styles.footer__item}>About</li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}
export default Footer