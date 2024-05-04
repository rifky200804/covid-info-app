import styles from './MenuButton.module.css'
function MenuButton(props) {
    const { onClick,children } = props                                                                                                                                                                                                                                                                                                                                                                                                                                          
    return (
        <button onClick={onClick} className={styles.menuButton}>
           {children}
        </button>
    );
}

export default MenuButton