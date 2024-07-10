import InputTextStyled from './InputText.styled'
function InputText({id,type,onChange,value}){

    return(
        <InputTextStyled>
            <div>
                <input
                    id={id}
                    type={type}
                    className={`input_text`}
                    onChange={onChange}
                    autoComplete='off'
                    value={value}
                />
            </div>
        </InputTextStyled>
        
        
    )
}

export default InputText