const ButtonItemCount = ( {stock,text,handleEvent,cantidad } ) => {
    return(
        <button type="button" disabled={stock===0} className="btn btn-secondary" 
            onClick={() => {(cantidad === -1) ? handleEvent(text) : handleEvent(cantidad)}}>
                    {text}
        </button>
    )
}

export default ButtonItemCount