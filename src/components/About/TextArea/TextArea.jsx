import TextAreaStyled from './TextArea.styled'
function TextArea({id,type,onChange,value}){

    return(
        <TextAreaStyled>
            <div>
                <textarea
                    id={id}
                    type={type}
                    className={`textarea`}
                    onChange={onChange}
                    autoComplete='off'
                    value={value}
                ></textarea>
            </div>
        </TextAreaStyled>
        
        
    )
}

export default TextArea