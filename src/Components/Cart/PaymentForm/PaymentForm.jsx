import { Button, Form, Row } from "react-bootstrap";
import './PaymentForm.css'

const PaymentForm = ( props ) => {
    
    const { handleAddOrder } = props

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddOrder();
        console.log("Hizo click")
    }
    return(
        <>
        <Row>
        <div className="col-75">
            <div className="container">
            <form >
                <Row>
                <div className="col-12 containerData">
                    <h3>Datos personales</h3>
                    <div>
                        <input type="text" name="firstname" placeholder="Nombre"/>
                        <input type="text" name="lasttname" placeholder="Apellido"/>
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="Mail"/>
                        <input type="text" name="phone" placeholder="Teléfono"/>
                    </div>
                </div>
                <div className="col-12 containerData">
                    <h3>Datos tarjeta</h3>
                    <Row>
                    <input type="text" id="cname" name="cardname" placeholder="Nombre titular"/>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="Número de la tarjeta"/>
                    </Row>
                    <Row>
                        <input type="text" id="expmonth" name="expmonth" placeholder="Fecha de expiración"/>
                        <input type="text" id="cvv" name="cvv" placeholder="Código de seguridad"/>
                <input type="submit" value="Realizar pago" className="btnForm" onClick={handleSubmit}/>
                    </Row>
                </div>

                </Row>
            </form>
            </div>
        </div>
        </Row>
        </>
    )
    }

export default PaymentForm
