import React, { Component } from 'react'
import '../App.css'

const styles = {

  nosotros: {
    padding: '100px',
  }
  
}

export default class Nosotros extends Component {
  render() {
    return (
      <div id="contacto">
        <div class="col-6" style={styles.nosotros}>
          <h1>¿Quienes somos?</h1>
          <p class="parrafo_nosotros">
            Somos un grupo de emprendedores que se dedican a vender réplicas de camisetas de fútbol de excelente calidad, exactas y con un material finamente detallado.
            Vendemos todo tipo de camisetas de fútbol; versión tailandesa y jugador (contáctanos para saber más información).
            Tela hecha para mantenerte cómodo en cualquier condición y 100% transpirable, de alta calidad.
            También contamos con la venta de shorts de la mejor calidad para complementar tu uniforme.
            Cualquier pregunta no dudes en consultarnos.
            Hacemos envíos a todo Chile, los pedidos demoran 3 a 4 semanas en llegar.
          </p>
        </div>
      </div>
    )
  }
}


