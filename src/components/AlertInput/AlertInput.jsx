import styles from './AlertInput.module.css'

function AlertInput(props) {
    return(
        <div className={styles.error}>
            <span>{props.children}</span>
        </div>
    )
}
export default AlertInput