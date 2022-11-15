import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Carro from './Carro'
import CarroNav from './CarroNav'
import '../App.css'

export default class Header extends Component {
  render() {
    const { carro, removeProduct } = this.props
    return (
      <header class="header_area">
        <div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">

          <nav class="classy-navbar" id="essenceNav">
            <a><img class="ASlogo" src="img/bg-img/logo.png" alt="" /></a>
            <Link to="/" ><a class="nav-brand" href="/">AS Fútbol</a></Link>

            <div class="classy-navbar-toggler">
              <span class="navbarToggler"><span></span><span></span><span></span></span>
            </div>

            <div class="classy-menu">

              <div class="classycloseIcon">
                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
              </div>

              <div class="classynav">
                <ul>
                  <li><a href="#">Tienda</a>
                    <div class="megamenu">
                      <ul class="single-mega cn-col-4">
                        <li class="title">Camisetas</li>
                        <li><a href="#">Equipos nacionales</a></li>
                        <li><Link to="/camisetas-internacionales">Equipos internacionales</Link></li>
                        <li><Link to="/camisetas-paises">Países</Link></li>
                      </ul>
                      <ul class="single-mega cn-col-4">
                        <li class="title">Shorts</li>
                        <li><a href="#">Equipos nacionales</a></li>
                        <li><a href="#">Equipos internacionales</a></li>
                        <li><a href="#">Países</a></li>
                      </ul>
                      <ul class="single-mega cn-col-4">
                        <li class="title">Personalizados</li>
                        <li><a href="#">Camisetas</a></li>
                        <li><a href="#">Shorts</a></li>
                      </ul>
                      <div class="single-mega cn-col-4">
                        <img src="img/bg-img/perso.png" alt="" />
                      </div>
                    </div>
                  </li>
                  <li><a href="#">Paginas</a>
                    <ul class="dropdown">
                      <li><Link to="/">Inicio</Link></li>
                      <li><a href="#">Pago</a></li>
                      <li><Link to="/nosotros">¿Quienes somos?</Link></li>
                    </ul>
                  </li>
                  <li><a href="https://www.instagram.com/asfutbol14/">Instagram</a></li>
                  <li><Link to="/contacto">Contacto</Link></li>
                </ul>
              </div>

            </div>
          </nav>


          <div class="header-meta d-flex clearfix justify-content-end">

            <div class="search-area">
              <form action="#" method="post">
                <input type="search" name="search" id="headerSearch" placeholder="Buscar..." />
                <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
              </form>
            </div>

            <div class="favourite-area">
              <a href="#"><img src="img/core-img/heart.svg" alt="" /></a>
            </div>

            <div class="user-login-info">
              <a href="#"><img src="img/core-img/user.svg" alt="" /></a>
            </div>

            <CarroNav carro={carro} />
          </div>

        </div>

        <div class="cart-bg-overlay"></div>

        <Carro 
          carro={carro}
          removeProduct={removeProduct}
        />

      </header>
    )
  }
}
