import SelectOptionStyled from './SelectOption.styled'
function SelectOption({id,data,onChange,type,value = ""}){

    return(
        <SelectOptionStyled>
        <select
            id={id}
            className={`form_select`}
            onChange={onChange}
            value={value}
        >
            <option className={`list_item`} value="">-- Select {type} --</option>
            {
                data.map((item,index)=>{
                    return(
                        <option key={index} className={`list_item`} value={item.value}>
                            {item.label}
                        </option>
                    )
                })
            }
        </select>
        </SelectOptionStyled>
    )
}

export default SelectOption