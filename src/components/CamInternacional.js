import React, { Component } from 'react'
import Producto from './Producto'
import '../App.css'

export default class CamInternacional extends Component {
  state = {
    productos: [
      { name: 'Camiseta PSG Mbappe', team: 'PSG', price: 24990, img2: 'img/camisetas/psg.jpeg', img1: 'img/camisetas/mbappe.png' },
      { name: 'Camiseta Real Madrid Benzema', team: 'Real Madrid', price: 24990, img2: 'img/camisetas/real madrid.jpeg', img1: 'img/camisetas/benzema.png'  },
      { name: 'Camiseta Manchester City Foden', team: 'Manchester City', price: 24990, img2: 'img/camisetas/manchester city.jpeg', img1: 'img/camisetas/foden.png'  },
      { name: 'Camiseta FC Barcelona Lewandowski', team: 'FC Barcelona', price: 24990, img2: 'img/camisetas/barcelona 22_23.jpeg', img1: 'img/camisetas/lewandowski.png'  },
      { name: 'Camiseta Chelsea Aubameyang', team: 'Chelsea', price: 24990, img2: 'img/camisetas/chelsea 22_23.jpeg', img1: 'img/camisetas/aubameyang.png'  },
      { name: 'Camiseta Bayern Munich Goretska', team: 'Bayern Munich', price: 24990, img2: 'img/camisetas/cam_bayern.jpeg', img1: 'img/camisetas/goretska.png'  },
      { name: 'Camiseta Liverpool Nuñez', team: 'Liverpool', price: 24990, img2: 'img/camisetas/cam_liverpool.jpeg', img1: 'img/camisetas/darwin.png'  },
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
