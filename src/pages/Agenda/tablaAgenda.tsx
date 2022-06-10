import './tablaAgenda.css';
import { useEffect, useState } from 'react';
import { deleteContacto, getContactos } from './tablaAgendaApi';
import { Contacto } from '../../models/contactoType';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function TablaAgenda() {

  const [contactos, setContactos] = useState<Contacto[]>([]);

  useEffect(() => {
    traerContactos();
  }, []);

  const traerContactos = async () => {
    let datos : Contacto[] = await getContactos();
    setContactos(datos);
  }

  const darBaja = async (id: string) => {
    await deleteContacto(id);
    traerContactos();
    return;
  }


  let navigate = useNavigate();
  const modficiarContacto = (contacto: Contacto) => {
    let path = `/formulario?id=${contacto.id}&fotourl=${contacto.fotourl}&apellido=${contacto.apellido}&nombre=${contacto.nombre}&telefono=${contacto.telefono}&email=${contacto.email}`;
    navigate(path);
    return;
  }

  const mostrarContactos = () => {
    if(contactos.length > 0) {
        return (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Apellido</th>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
                {
                  contactos.map(contacto => {
                    return (
                      <>
                        <tr>
                          <td><img src={contacto.fotourl}/></td>
                          <td>{contacto.apellido}</td>
                          <td>{contacto.nombre}</td>
                          <td>{contacto.telefono}</td>
                          <td>{contacto.email}</td>
                          <td><Button variant="danger" onClick={() => darBaja(contacto.id)}>Baja</Button></td>
                          <td><Button variant="primary" onClick={() => modficiarContacto(contacto)}>Modificar</Button></td>
                        </tr>
                      </>
                    )
                  })
                }
            </tbody>
          </Table>
        )

    } else {
        return (
            <h4>Cargando Contactos</h4>
        )
    }
}


  return (
    <>
      <h1>Tabla de contactos</h1>
      {mostrarContactos()}
    </>
  );
}

export default TablaAgenda;

