import styles from './Footer.module.css';

function Footer(){
   
    return(
        <>
            <div className={styles.container}>
            <nav className={styles.footer}>  
                <div className={styles.footer_left}>
                    <h1 className={styles.footer_brand}>Covid ID</h1>
                    <br />
                    <p>Developed By rifky200804</p>
                </div>
                <div>
                    <ul className={styles.footer_list }>
                        <li className={styles.footer_item}>Global</li>
                        <li className={styles.footer_item}>Indonesia</li>
                        <li className={styles.footer_item}>Provinsi</li>
                        <li className={styles.footer_item}>About</li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}
export default Footer