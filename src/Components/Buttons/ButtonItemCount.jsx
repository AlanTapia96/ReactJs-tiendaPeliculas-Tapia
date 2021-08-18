const ButtonItemCount = ( {stock,text,handleEvent,cantidad,disabled } ) => {
    return(
        <button type="button" disabled={disabled} className="btn btn-secondary" 
            onClick={() => {(text==="+" || text ==="-") ? handleEvent(text) : handleEvent(cantidad)}}>
                    {text}
        </button>
    )
}

export default ButtonItemCount