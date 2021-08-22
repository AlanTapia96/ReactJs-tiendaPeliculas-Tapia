const ButtonItemCart = ({ text,handleEvent,disabled=false }) => {

    return(
        <button type="button" disabled={disabled} className="btn btn-primary" onClick={handleEvent}>
            {text}
        </button>
    )
}

export default ButtonItemCart