import { useEffect, useLayoutEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import './reservas.css'
import { Button, Table } from 'react-bootstrap';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import db from '../../servicios/firebase.js';
import swal from 'sweetalert';

function Reservas() {
    const [reservas, setReservas] = useState([]);
    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        fecha: "",
        hora: "",
        comensales: "",
        email: ""
    })
    function onSave(event) {
        /*Guardar la reservacion*/
        event.preventDefault();
        addDoc(collection(db, 'reserva'), form).
            then(resp => swal("Oops!", "Something went wrong!", "error")).
            catch(err => swal("Oops!", "Something went wrong!", "error"))
    }

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const muestraReservas = async () => {
        onSnapshot(collection(db, 'reserva'), (snapshot) => {
            const list = [];
            snapshot.forEach(doc => list.push({ ...doc.data(), id: doc.id }))
            setReservas(list);
        })
        console.log(reservas);
    }

    useLayoutEffect(() => {
        muestraReservas();
    }, [])


    return (
        <>
            <div className="wrap">
                <div className="formContent">
                    <Form className='form-reserva' onSubmit={onSave}>
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control type="text" name='nombre' value={form.nombre} onChange={onChange} placeholder="Escribe tu nombre completo" />
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" name='telefono' value={form.telefono} onChange={onChange} placeholder="Escribe tu telefono" />
                        <Form.Label>Fecha de Reservacion:</Form.Label>
                        <Form.Control type="date" name='fecha' value={form.fecha} onChange={onChange} />
                        <Form.Label>Hora de Reservacion</Form.Label>
                        <Form.Control type="time" name='hora' value={form.hora} onChange={onChange} />
                        <Form.Label>Comensales</Form.Label>
                        <Form.Control type="text" name='comensales' value={form.comensales} onChange={onChange} />
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" name='email' value={form.email} onChange={onChange} placeholder="Escribe tu correo electronico" />

                        <Form.Text className="text-muted">
                            Tu informacion es privada y no sera compartida o reutilizada.
                        </Form.Text>
                        <Button type="submit" className='formButton'>
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className='Column'>
                    <table className='tabla-reserva'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Comensales</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(reservas)}
                            {
                                reservas.map((reserva, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{reserva.nombre}</td>
                                            <td>{reserva.telefono}</td>
                                            <td>{reserva.fecha}</td>
                                            <td>{reserva.hora}</td>
                                            <td>{reserva.comensales}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Reservas;
