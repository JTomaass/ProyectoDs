import React, { Component } from 'react'
import { Form } from 'react-formio'
import '../App.css'

const styles = {

  detalles: {
    padding: '100px',
  }

}

export default class DetallesProducto extends Component {
  render() {
    return (
      <div id="contacto">
        <div class="col-6" style={styles.detalles}>    
          Texto detalles prodcutos
        </div> 
      </div>
    )
  }
}
