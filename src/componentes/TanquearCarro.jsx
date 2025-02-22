import React, {Fragment} from 'react';
import {Button, Form, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function TanquearCarro(){
  let navigate = useNavigate();
  return (<Fragment>
    <header className="App-header">
      <h1>
        Tanquear carro
      </h1>
    </header>
    <br/>
    <Button variant="primary" type="submit" onClick={() => navigate('../')}>
      Regresar
    </Button>
    <Form.Group as={Col} controlId="formGridDisponible"  sm={10} style={{'textAlign': 'right'}}>
      <Form.Label className="text-right">Saldo Disponible: $xx</Form.Label>
    </Form.Group>
    <br/>
    <br/>
    <br/>
    <Form className="text-center">
        <Form.Group as={Row} className="mb-3" controlId="formtextPlaca">
          <Form.Label column sm={3}>
            Número de placa
          </Form.Label>
          <Col sm={6} >
            <Form.Control type="text" placeholder="Número de placa" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formtextTipo">
          <Form.Label column sm={3}>
            Tipo de vehículo
          </Form.Label>
          <Col sm={6}>
            <Form.Select aria-label="Default select example">
              <option>Selecione un vehiculo</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formtextGasolina">
          <Form.Label column sm={3}>
            Seleccionar el tipo de gasolina
          </Form.Label>
          <Col sm={6}>
            <Form.Select aria-label="Default select example">
              <option>Selecione el tipo de gasolina</option>
              <option value="extra">Extra</option>
              <option value="Corriente">Corriente</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Row className="mb-3" sm={2} style={{'background-color':'dodgerblue'}}> 
          <Form.Group as={Col} controlId="formGridEstado">
            <Form.Label>Estado: Disponible</Form.Label>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPrecio">
            <Form.Label>Precio: $xx/gl</Form.Label>
          </Form.Group>
        </Row>
        <Form.Group as={Row} className="mb-3" controlId="formtextCantidad">
          <Form.Label column sm={3}>
            Cantidad de galones a tanquear
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="text" placeholder="Cantidad a tanquear" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formtextPagar">
          <Form.Label column sm={3}>
            Total a pagar
          </Form.Label>
          <Col sm={6}>
            <Form.Control type="text" placeholder="Ingrese cantidad"/>
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Pagar
        </Button>
    </Form>
  </Fragment>
);
};