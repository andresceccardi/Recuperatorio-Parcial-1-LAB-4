import './formularioAgenda.css';
import { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Row, Col, Button, Card, FloatingLabel } from 'react-bootstrap';
import * as Yup from 'yup';
import { Contacto } from '../../models/contactoType';


function FormularioAgenda() {
  
  const idContacto = new URL(window.location.href).searchParams.get("id");
  const apellidoContacto = new URL(window.location.href).searchParams.get("apellido");
  const nombreContacto = new URL(window.location.href).searchParams.get("nombre");
  const telefonoContacto = new URL(window.location.href).searchParams.get("telefono");
  const emailContacto = new URL(window.location.href).searchParams.get("email");
  const fotoUrlContacto = new URL(window.location.href).searchParams.get("fotourl");
  

  const formu = () => {
    return (
      <Formik
        initialValues={
          {
            id: idContacto? idContacto : '',
            apellido: apellidoContacto? apellidoContacto : '',
            nombre: nombreContacto? nombreContacto : '',
            telefono: telefonoContacto? telefonoContacto : '',
            email: emailContacto? emailContacto : '',
            fotourl: fotoUrlContacto? fotoUrlContacto : '',
          }
        }
        validationSchema = {Yup.object({
          apellido: Yup.string()
            .required('No puede estar vacio'),
            nombre: Yup.string()
            .required('No puede estar vacio'),
            telefono: Yup.string()
            .required('No puede estar vacio'),
            email: Yup.string()
            .required('No puede estar vacio'),
            fotourl: Yup.string()
            .required('No puede estar vacio'),
        })
        }
        onSubmit={(values, {setSubmitting}) => {
          setSubmitting(false);
        }}
      >
        <Form>
          <Row>
            <Col>
              <label>Apellido</label>
              <Field name="apellido" type="text" className="form-control" />
              <p className="text-danger"><ErrorMessage name="apellido"/></p>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>nombre</label>
              <Field name="nombre" type="text" className="form-control" />
              <p className="text-danger"><ErrorMessage name="nombre"/></p>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>telefono</label>
              <Field name="telefono" type="text" className="form-control" />
              <p className="text-danger"><ErrorMessage name="telefono"/></p>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>email</label>
              <Field name="email" type="text" className="form-control" />
              <p className="text-danger"><ErrorMessage name="email"/></p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button as="input" type="submit" value="Actualizar"/>
            </Col>
            <Col>
              <Button variant="danger">Actualizar</Button>
            </Col>
          </Row>
        </Form>
      </Formik>
    )
  }
  return (
    <>
      <h1> Bienvenido al Formulario Agenda </h1>
    </>
  );
}

export default FormularioAgenda;

