import React, { Component } from 'react'
import Producto from './Producto'
import '../App.css'

export default class CamPaises extends Component {
  state = {
    productos: [
      { name: 'Camiseta Argentina Messi', team: 'Argentina', price: 24990, img2: 'img/camisetas/cam_argentina.jpeg', img1: 'img/camisetas/cam_messi_arg.jpeg' },
      { name: 'Camiseta Portugal Cristiano Ronaldo', team: 'Portugal', price: 24990, img2: 'img/camisetas/cam_portugal.jpeg', img1: 'img/camisetas/cam_cr_portugal.jpeg'  },
    ],
  }

  render() {
    const { agregarAlCarro } = this.props

    return (
      <div class="container">
        <div class="row">
          <div class="wrapper">
            {this.state.productos.map(producto =>
              <Producto
                agregarAlCarro={agregarAlCarro}
                key={producto.name}
                producto={producto}
              />)}
          </div>
        </div>
      </div>
    )
  }
}
