import React, { Component } from 'react'
import '../App.css'

export default class Logos extends Component {
  render() {
    return (
      <div class="brands-area d-flex align-items-center justify-content-between">

        <div class="single-brands-logo">
          <img src="img/logos-equipos/logo_barca.png" alt="" />
        </div>

        <div class="single-brands-logo">
          <img src="img/logos-equipos/logo_manchester.png" alt="" />
        </div>

        <div class="single-brands-logo">
          <img src="img/logos-equipos/logo_united.png" alt="" />
        </div>

        <div class="single-brands-logo">
          <img src="img/logos-equipos/logo_real.png" alt="" />
        </div>

        <div class="single-brands-logo">
          <img src="img/logos-equipos/logo_psg.png" alt="" />
        </div>

        <div class="single-brands-logo">
          <img src="img/logos-equipos/logo_liverpool.png" alt="" />
        </div>
      </div>
    )
  }
}