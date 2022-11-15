import React, { Component } from 'react'
import { Form } from 'react-formio'
import '../App.css'

const styles = {

  contacto: {
    padding: '100px',
  }

}

export default class Contacto extends Component {
  render() {

    const api_url = "https://khhywetfauljdgv.form.io/contacto/submission?limit=10&select=data"

    async function getData() {
      const response = await fetch(api_url);
      const data = await response.json();

      const nombre0 = data[0].data.nombre;
      const apellido0 = data[0].data.apellido;

      document.getElementById("nombre").textContent = nombre0;
      document.getElementById("apellido").textContent = apellido0;
    }

    getData()

    return (
      <div class="row" id="contacto">
        <div class="col-6" style={styles.contacto}>
          <h1>Formulario de contacto</h1>
          <Form src="https://khhywetfauljdgv.form.io/contacto" />
        </div>
        <div class="col-6" style={styles.contacto}>
          <h1>Última persona en contactarnos:</h1>
            <h3><span id="nombre"></span> <span id="apellido"></span></h3>
        </div>
      </div>
    )
  }
}
