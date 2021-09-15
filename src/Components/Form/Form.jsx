import { Button, Form } from "react-bootstrap";



const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hizo click")
    }

    return(
        <Form className="container mt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mail</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Enviar
        </Button>
        </Form>
    )}

export default Contact;


