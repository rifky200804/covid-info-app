
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import MenuButton from '../MenuButton/MenuButton';


function Header(){
    const [isShow, setIsShow] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    // Mengatur lebar jendela browser saat perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Membersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    // Memperbarui tampilan list berdasarkan ukuran jendela browser
    useEffect(() => {
        if (windowWidth < 768) {
            setIsShow(false);
        } else {
            setIsShow(true);
        }
    }, [windowWidth]);
    
    function handleClick(){
        if (isShow == true){
            setIsShow(false);
        }else{
            setIsShow(true);
        }
    }
    return(
        <>
            <div className={styles.container}>
            <nav className={styles.header}>  
                <div className={styles.header_left}>
                    <p className={styles.header_brand}>Covid ID</p>
                    <MenuButton onClick={handleClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            color="white"
                            >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </MenuButton>
                </div>
                <div className={isShow ? styles.header_right : styles.header_right_hide}>
                    <ul className={styles.header_list}>
                        <li className={styles.header_item}>Global</li>
                        <li className={styles.header_item}>Indonesia</li>
                        <li className={styles.header_item}>Provinsi</li>
                        <li className={styles.header_item}>About</li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}
export default Header