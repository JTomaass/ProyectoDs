import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './components/Contacto';
import Home from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import CamInternacional from './components/CamInternacional';
import CamPaises from './components/CamPaises';
import Nosotros from './components/Nosotros';

class App extends React.Component {
  state = {
    productos: [
      { name: 'Camiseta PSG Mbappe', team: 'PSG', price: 24990, img2: 'img/camisetas/psg.jpeg', img1: 'img/camisetas/mbappe.png' },
      { name: 'Camiseta Real Madrid Benzema', team: 'Real Madrid', price: 24990, img2: 'img/camisetas/real madrid.jpeg', img1: 'img/camisetas/benzema.png'  },
      { name: 'Camiseta Manchester City Foden', team: 'Manchester City', price: 24990, img2: 'img/camisetas/manchester city.jpeg', img1: 'img/camisetas/foden.png'  },
      { name: 'Camiseta FC Barcelona Lewandowski', team: 'FC Barcelona', price: 24990, img2: 'img/camisetas/barcelona 22_23.jpeg', img1: 'img/camisetas/lewandowski.png'  },
      { name: 'Camiseta Chelsea Aubameyang', team: 'Chelsea', price: 24990, img2: 'img/camisetas/chelsea 22_23.jpeg', img1: 'img/camisetas/aubameyang.png'  },
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
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
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
    return;
  }

  removeProduct = (name) => {
    const { carro } = this.state
    const index = carro.findIndex((c) => c.name == name)
    if (index !== -1) {
      carro.splice(index, 1)
      this.setState({carro})
      localStorage.setItem('carro', JSON.stringify(carro));
    }
  }
  
  render() {
    return (
      <div name="app">
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
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/camisetas-internacionales" element={<CamInternacional 
                agregarAlCarro={this.agregarAlCarro}
              />} />
            <Route path="/camisetas-paises" element={<CamPaises 
                agregarAlCarro={this.agregarAlCarro}
              />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;