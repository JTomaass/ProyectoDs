import React, { Component } from 'react'
import Button from './Button'
import '../App.css'

export default class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props

    return (
      <div class="single-product-wrapper">

                  <div class="product-img">
                    <img src={producto.img1} alt="" />

                    <img class="hover-img" src={producto.img2} alt="" />
                    
                    <div class="product-favourite">
                      <a href="#" class="favme fa fa-heart"></a>
                    </div>
                  </div>

                  <div class="product-description">
                    <span>{producto.team}</span>
                    <a href="#">
                      <h6>{producto.name}</h6>
                    </a>
                    <p class="product-price">${producto.price}</p>


                    <div class="hover-content">
                      <Button onClick={() => agregarAlCarro(producto)}/>
                    </div>
                  </div>
                </div>
    )
  }
}