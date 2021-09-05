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
                <div className="col-12">
                    <h3>Datos personales</h3>
                    <input type="text" name="firstname" placeholder="Nombre completo"/>
                    <input type="text" name="email" placeholder="Mail"/>
                    <input type="text" name="phone" placeholder="Teléfono"/>
                </div>

                <div className="col-6">
                    <h3>Datos tarjeta</h3>
                    <input type="text" id="cname" name="cardname" placeholder="Nombre titular"/>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="Número de la tarjeta"/>
                    <input type="text" id="expmonth" name="expmonth" placeholder="Fecha de expiración"/>

                    <Row>
                    <div className="col-12">
                        <input type="text" id="cvv" name="cvv" placeholder="Código de seguridad"/>
                    </div>
                    </Row>
                </div>

                </Row>
                <input type="submit" value="Realizar pago" className="btn" onClick={handleSubmit}/>
            </form>
            </div>
        </div>
        </Row>
        </>
    )
    }

export default PaymentForm
