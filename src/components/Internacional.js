import React, { Component } from 'react'
import Producto from './Producto'
import '../App.css'

export default class Internacional extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props

    return (
        <div class="container">
          <div class="row">
            <div class="wrapper">
              {productos.map(producto =>
                <Producto
                  agregarAlCarro={agregarAlCarro}
                  key={producto.id}
                  producto={producto}
                />)}
            </div>
          </div>
        </div>
    )
  }
}
