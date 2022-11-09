import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './components/Contacto';
import Home from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import Internacional from './components/Internacional';

class App extends React.Component {
  state = {
    productos: [
      { id: 1, name: 'Camiseta PSG Mbappe', team: 'PSG', price: 24990, img2: 'img/camisetas/psg.jpeg', img1: 'img/camisetas/mbappe.png' },
      { id: 2, name: 'Camiseta Real Madrid Benzema', team: 'Real Madrid', price: 24990, img2: 'img/camisetas/real madrid.jpeg', img1: 'img/camisetas/benzema.png'  },
      { id: 3, name: 'Camiseta Manchester City Foden', team: 'Manchester City', price: 24990, img2: 'img/camisetas/manchester city.jpeg', img1: 'img/camisetas/foden.png'  },
      { id: 4, name: 'Camiseta FC Barcelona Lewandowski', team: 'FC Barcelona', price: 24990, img2: 'img/camisetas/barcelona 22_23.jpeg', img1: 'img/camisetas/lewandowski.png'  },
      { id: 5, name: 'Camiseta Chelsea Aubameyang', team: 'Chelsea', price: 24990, img2: 'img/camisetas/chelsea 22_23.jpeg', img1: 'img/camisetas/aubameyang.png'  },
    ],
    carro: [],
  }

  componentDidMount() {
    this.obtenerCarro()
  }

  obtenerCarro = () => {
    const carro = localStorage.getItem('carro')
    const parseCarro = carro ? JSON.parse(carro) : []
    this.setState({
      carro: parseCarro
    })
  }

  guardarCarro = (carro) => {
    localStorage.setItem('carro', JSON.stringify(carro));
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.id === producto.id)) {
      const newCarro = carro.map(x => x.id === producto.id
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      this.setState({ carro: newCarro })
      this.guardarCarro(newCarro)
      return;
    }
    const arr = [...carro, {...producto, cantidad: 1}]
    this.setState({
      carro: arr 
    })
    this.guardarCarro(arr)
    console.log("58", this.state.carro)
    return;
  }

  removeProduct = (id) => {
    const { carro } = this.state
    const index = carro.findIndex((c) => c.id == id)
    if (index !== -1) {
      const aux = carro.splice(index, 1)
      this.setState({carro})
      localStorage.setItem('carro', JSON.stringify(carro));
    }
  }
  
  render() {
    return (
      <div id="app">
        <Router>
          <Header 
            carro={this.state.carro}
            removeProduct={this.removeProduct}
          />

          <Routes>
            <Route path="/" element={<Home 
                agregarAlCarro={this.agregarAlCarro}
                productos={this.state.productos}
              />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/camisetas-internacionales" element={<Internacional 
                agregarAlCarro={this.agregarAlCarro}
                productos={this.state.productos}
              />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;