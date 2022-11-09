import React, { Component } from 'react'
import { Form } from 'react-formio'
import Footer from './Footer'
import '../App.css'

const styles = {

  contacto: {
    padding: '100px',
  }

}

export default class Contacto extends Component {
  render() {
    return (
      <div id="contacto">
        <div class="col-6" style={styles.contacto}>    
          <Form src="https://khhywetfauljdgv.form.io/contacto" />
        </div> 
      </div>
    )
  }
}
