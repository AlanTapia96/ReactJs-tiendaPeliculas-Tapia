import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import './PaymentForm.css'

const PaymentForm = ( props ) => {
    
    const { handleAddOrder, items, importe, handlePaymentDone } = props;
    const [datosUsuario,setDatos] = useState({
            firstname : '',
            lastname : '',
            email : '',
            phone : '',
            cardname: '',
            cardnumber : '',
            expmonth: '',
            cvv : ''
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        let año = date.getFullYear();
        const orderData = {buyer:datosUsuario, items, date:año, total:importe};
        handleAddOrder(orderData);
        handlePaymentDone();
    }

    const handleOnChange = (e) => {
        setDatos({
            ...datosUsuario,
            [e.target.name] : e.target.value 
        })
    } 

    return(
        <>
        <Row>
        <div className="col-75">
            <div className="container">
            <form onSubmit={handleOnSubmit}>
                <Row>
                <div className="col-12 containerData">
                    <h3>Datos personales</h3>
                    <div>
                        <input type="text" name="firstname" placeholder="Nombre" onChange={handleOnChange} required />
                        <input type="text" name="lastname" placeholder="Apellido" onChange={handleOnChange} required />
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="Mail" onChange={handleOnChange} required />
                        <input type="text" name="phone" placeholder="Teléfono" onChange={handleOnChange} required />
                    </div>
                </div>
                <div className="col-12 containerData">
                    <h3>Datos tarjeta</h3>
                    <Row>
                    <input type="text" name="cardname" placeholder="Nombre titular" onChange={handleOnChange} required />
                    <input type="text" name="cardnumber" placeholder="Número de la tarjeta"onChange={handleOnChange} required />
                    </Row>
                    <Row>
                        <input type="text" name="expmonth" placeholder="Fecha de expiración" onChange={handleOnChange} required />
                        <input type="text" name="cvv" placeholder="Código de seguridad" onChange={handleOnChange} required />
                    </Row>
                </div>
                </Row>
                    <input type="submit" value="Realizar pago" className="btnForm" />
            </form>
            </div>
        </div>
        </Row>
        </>
    )
}

export default PaymentForm
