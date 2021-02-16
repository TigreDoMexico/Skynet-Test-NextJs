const Input = (props) => {
    return (
        <div className="input-group mb-3">
            <input type="text" onChange={(event) => props.onChangeText(event.target.value)} value={props.chamadoText} className="form-control" placeholder="Nome do chamado" aria-label="Nome do chamado" aria-describedby="basic-addon2" />
            {props.containsButton && (
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={props.onClickButton}>{props.buttonText}</button>
                </div>
            )}
        </div>
    )
}

export default Input;