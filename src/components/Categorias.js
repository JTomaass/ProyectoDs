import React, { Component } from 'react'
import '../App.css'

export default class Categorias extends Component {
  render() {
    return (
      <div class="top_catagory_area section-padding-80 clearfix">
        <div class="container">
          <div class="row justify-content-center">

            <div class="col-12 col-sm-6 col-md-4">
              <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: "url(img/bg-img/camisetas.jpeg)" }}>
                <div class="catagory-content">
                  <a href="#">Camisetas</a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: "url(img/bg-img/shorts.jpeg)" }}>
                <div class="catagory-content">
                  <a href="#">Shorts</a>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: "url(img/bg-img/perso.png)" }}>
                <div class="catagory-content">
                  <a href="#">Personalizadas</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}