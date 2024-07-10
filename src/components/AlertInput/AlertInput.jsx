import AlertInputStyled from './AlertInput.styled'

function AlertInput(props) {
    return(
        <AlertInputStyled>
            <div className={`error`}>
                <span>{props.children}</span>
            </div>
        </AlertInputStyled>
    )
}
export default AlertInput