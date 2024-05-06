import styles from './InputText.module.css'
function InputText({id,type,onChange,value}){

    return(
        <input
                                id={id}
                                type={type}
                                className={styles.input_text}
                                onChange={onChange}
                                autoComplete='off'
                                value={value}
                            />
    )
}

export default InputText