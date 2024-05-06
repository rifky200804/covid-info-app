import styles from './SelectOption.module.css'
function SelectOption({id,data,onChange,type,value}){

    return(
        <select
            id={id}
            className={styles.form_select}
            onChange={onChange}
        >
            <option className={styles.list_item} value="">-- Select {type} --</option>
            {
                data.map((item,index)=>{
                    return(
                        <option key={index} className={styles.list_item} value={item.value}
                            selected={value === item.value ? true : false}
                        >
                            {item.label}
                        </option>
                    )
                })
            }
        </select>
    )
}

export default SelectOption