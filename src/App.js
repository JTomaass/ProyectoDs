import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

class App extends React.Component {
  

 
  render(){
  return (
    <div id="app">
     
  <header class="header_area">
    <div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
      
        <nav class="classy-navbar" id="essenceNav">
            <a><img class="ASlogo" src="assets/img/bg-img/logo.png" alt=""/></a>
            <a class="nav-brand" href="#">AS Fútbol</a>
          
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
                                    <li><a href="#">Equipos internacionales</a></li>
                                    <li><a href="#">Paises</a></li>
                                    <li><a href="#">Champions League</a></li>
                                </ul>
                                <ul class="single-mega cn-col-4">
                                    <li class="title">Shorts</li>
                                    <li><a href="#">Equipos nacionales</a></li>
                                    <li><a href="#">Equipos internacionales</a></li>
                                    <li><a href="#">Paises</a></li>
                                    <li><a href="#">Champions League</a></li>
                                </ul>
                                <ul class="single-mega cn-col-4">
                                    <li class="title">Accesorios</li>
                                </ul>
                                <div class="single-mega cn-col-4">
                                    <img src="assets/img/bg-img/bg-6.jpg" alt="" />
                                </div>
                            </div>
                        </li>
                        <li><a href="#">Paginas</a>
                            <ul class="dropdown">
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Tienda</a></li>
                                <li><a href="#">Product Details</a></li>
                                <li><a href="#">Checkout</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Single Blog</a></li>
                                <li><a href="#">Regular Page</a></li>
                                <li><a href="#">Contacto</a></li>
                            </ul>
                        </li>
                        <li><a href="https://www.instagram.com/asfutbol14/">Instagram</a></li>
                        <li><a href="#">Contacto</a></li>
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
                <a href="#"><img src="assets/img/core-img/heart.svg" alt="" /></a>
            </div>
           
            <div class="user-login-info">
                <a href="#"><img src="assets/img/core-img/user.svg" alt="" /></a>
            </div>
           
            <div class="cart-area">
                <a href="#" id="essenceCartBtn"><img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span></a>
            </div>
        </div>

    </div>
</header>

<div class="cart-bg-overlay"></div>

<div class="right-side-cart-area">

    
    <div class="cart-button">
        <a href="#" id="rightSideCart"><img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span></a>
    </div>

    <div class="cart-content d-flex">

      
        <div class="cart-list">
         
            <div class="single-cart-item">
                <a href="#" class="product-image">
                    <img src="assets/img/camisetas/mbappe.png" class="cart-thumb" alt="" />
                  
                    <div class="cart-item-desc">
                      <span class="product-remove"><i class="fa fa-close" aria-hidden="true"></i></span>
                        <span class="badge">Mango</span>
                        <h6>Button Through Strap Mini Dress</h6>
                        <p class="size">Size: S</p>
                        <p class="color">Color: Red</p>
                        <p class="price">$45.00</p>
                    </div>
                </a>
            </div>

           
            <div class="single-cart-item">
                <a href="#" class="product-image">
                    <img src="assets/img/product-img/product-2.jpg" class="cart-thumb" alt="" />
                
                    <div class="cart-item-desc">
                      <span class="product-remove"><i class="fa fa-close" aria-hidden="true"></i></span>
                        <span class="badge">Mango</span>
                        <h6>Button Through Strap Mini Dress</h6>
                        <p class="size">Size: S</p>
                        <p class="color">Color: Red</p>
                        <p class="price">$45.00</p>
                    </div>
                </a>
            </div>

          
            <div class="single-cart-item">
                <a href="#" class="product-image">
                    <img src="assets/img/product-img/product-3.jpg" class="cart-thumb" alt="" />
                  
                    <div class="cart-item-desc">
                      <span class="product-remove"><i class="fa fa-close" aria-hidden="true"></i></span>
                        <span class="badge">Mango</span>
                        <h6>Button Through Strap Mini Dress</h6>
                        <p class="size">Size: S</p>
                        <p class="color">Color: Red</p>
                        <p class="price">$45.00</p>
                    </div>
                </a>
            </div>
        </div>

      
        <div class="cart-amount-summary">

            <h2>Summary</h2>
            <ul class="summary-table">
                <li><span>subtotal:</span> <span>$274.00</span></li>
                <li><span>delivery:</span> <span>Free</span></li>
                <li><span>discount:</span> <span>-15%</span></li>
                <li><span>total:</span> <span>$232.00</span></li>
            </ul>
            <div class="checkout-btn mt-100">
                <a href="#" class="btn essence-btn">check out</a>
            </div>
        </div>
    </div>
</div>

<section class="welcome_area bg-img background-overlay" style={{backgroundImage: "url(assets/img/bg-img/banner3.jpg)"}}>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12">
                <div class="hero-content">
                    <h6>AS Fútbol</h6>
                    <h2>Nueva colección</h2>
                    <a href="#" class="btn essence-btn">ver colección</a>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="top_catagory_area section-padding-80 clearfix">
    <div class="container">
        <div class="row justify-content-center">
          
            <div class="col-12 col-sm-6 col-md-4">
                <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/camisetas.jpeg)"}}>
                    <div class="catagory-content">
                        <a href="#">Camisetas</a>
                    </div>
                </div>
            </div>
         
            <div class="col-12 col-sm-6 col-md-4">
                <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/shorts.jpeg)"}}>
                    <div class="catagory-content">
                        <a href="#">Shorts</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <div class="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage: "url(assets/img/bg-img/bg-4.jpg)"}}>
                    <div class="catagory-content">
                        <a href="#">Accesorios</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="cta-area">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="cta-content bg-img background-overlay" style={{backgroundImage: "url(assets/img/bg-img/bg-5.jpg)"}}>
                    <div class="h-100 d-flex align-items-center justify-content-end">
                        <div class="cta--text">
                            <h6>-60%</h6>
                            <h2>Descuentos</h2>
                            <a href="#" class="btn essence-btn">Comprar ahora</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="new_arrivals_area section-padding-80 clearfix">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-heading text-center">
                    <h2>Productos Populares</h2>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="popular-products-slides owl-carousel">

                 
                    <div class="single-product-wrapper">
                    
                        <div class="product-img">
                            <img src="assets/img/camisetas/mbappe.png" alt="" />
                        
                            <img class="hover-img" src="assets/img/camisetas/psg.jpeg" alt="" />
                        
                            <div class="product-favourite">
                                <a href="#" class="favme fa fa-heart"></a>
                            </div>
                        </div>
                    
                        <div class="product-description">
                            <span>PSG</span>
                            <a href="#">
                                <h6>Camiseta PSG Mbappe</h6>
                            </a>
                            <p class="product-price">$24.990</p>

                           
                            <div class="hover-content">
                              
                                <div class="add-to-cart-btn">
                                    <a href="#" class="btn essence-btn">Añadir al carro</a>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    <div class="single-product-wrapper">
                       
                        <div class="product-img">
                            <img src="assets/img/camisetas/benzema.png" alt="" />
                          
                            <img class="hover-img" src="assets/img/camisetas/real madrid.jpeg" alt="" />
                         
                            <div class="product-favourite">
                                <a href="#" class="favme fa fa-heart"></a>
                            </div>
                        </div>
                      
                        <div class="product-description">
                            <span>Real Madrid</span>
                            <a href="#">
                                <h6>Camiseta Real Madrid Benzema</h6>
                            </a>
                            <p class="product-price">$24.990</p>

                           
                            <div class="hover-content">
                               
                                <div class="add-to-cart-btn">
                                    <a href="#" class="btn essence-btn">Añadir al carro</a>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div class="single-product-wrapper">
                        
                        <div class="product-img">
                            <img src="assets/img/camisetas/foden.png" alt="" />
                           
                            <img class="hover-img" src="assets/img/camisetas/manchester city.jpeg" alt="" />

                           
                            <div class="product-badge offer-badge">
                                <span>-30%</span>
                            </div>

                           
                            <div class="product-favourite">
                                <a href="#" class="favme fa fa-heart"></a>
                            </div>
                        </div>
                       
                        <div class="product-description">
                            <span>Manchester City</span>
                            <a href="#">
                                <h6>Camiseta Manchester City Foden</h6>
                            </a>
                            <p class="product-price"><span class="old-price">$35.690</span> $24.990</p>

                           
                            <div class="hover-content">
                               
                                <div class="add-to-cart-btn">
                                    <a href="#" class="btn essence-btn">Añadir al carro</a>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div class="single-product-wrapper">
                       
                        <div class="product-img">
                            <img src="assets/img/camisetas/lewandowski.png" alt="" />
                          
                            <img class="hover-img" src="assets/img/camisetas/barcelona 22_23.jpeg" alt="" />

                           
                            <div class="product-badge new-badge">
                                <span>Nuevo</span>
                            </div>

                            
                            <div class="product-favourite">
                                <a href="#" class="favme fa fa-heart"></a>
                            </div>
                        </div>
                      
                        <div class="product-description">
                            <span>FC Barcelona</span>
                            <a href="#">
                                <h6>Camiseta FC Barcelona Lewandowski</h6>
                            </a>
                            <p class="product-price">$24.990</p>

                           
                            <div class="hover-content">
                               
                                <div class="add-to-cart-btn">
                                    <a href="#" class="btn essence-btn">Añadir al carro</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="single-product-wrapper">
                       
                        <div class="product-img">
                            <img src="assets/img/camisetas/aubameyang.png" alt="" />
                          
                            <img class="hover-img" src="assets/img/camisetas/chelsea 22_23.jpeg" alt="" />

                            <div class="product-favourite">
                                <a href="#" class="favme fa fa-heart"></a>
                            </div>
                        </div>
                      
                        <div class="product-description">
                            <span>Chelsea</span>
                            <a href="#">
                                <h6>Camiseta Chelsea Aubameyang</h6>
                            </a>
                            <p class="product-price">$24.990</p>

                           
                            <div class="hover-content">
                               
                                <div class="add-to-cart-btn">
                                    <a href="#" class="btn essence-btn">Añadir al carro</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="brands-area d-flex align-items-center justify-content-between">
   
    <div class="single-brands-logo">
        <img src="assets/img/logos-equipos/logo_barca.png" alt="" />
    </div>
    
    <div class="single-brands-logo">
        <img src="assets/img/logos-equipos/logo_manchester.png" alt="" />
    </div>
   
    <div class="single-brands-logo">
        <img src="assets/img/logos-equipos/logo_united.png" alt="" />
    </div>
  
    <div class="single-brands-logo">
        <img src="assets/img/logos-equipos/logo_real.png" alt="" />
    </div>
   
    <div class="single-brands-logo">
        <img src="assets/img/logos-equipos/logo_psg.png" alt="" />
    </div>
   
    <div class="single-brands-logo">
        <img src="assets/img/logos-equipos/logo_liverpool.png" alt="" />
    </div>
</div>

<footer class="footer_area clearfix">
    <div class="container">
        <div class="row">
         
            <div class="col-12 col-md-6">
                <div class="single_widget_area d-flex mb-30">
                 
                    <div class="footer-logo mr-50">
                        <a href="#">AS Fútbol</a>
                    </div>
                
                    <div class="footer_menu">
                        <ul>
                            <li><a href="#">Tienda</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          
            <div class="col-12 col-md-6">
                <div class="single_widget_area mb-30">
                    <ul class="footer_widget_menu">
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Payment Options</a></li>
                        <li><a href="#">Shipping and Delivery</a></li>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row align-items-end">
           
            <div class="col-12 col-md-6">
                <div class="single_widget_area">
                    <div class="footer_heading mb-30">
                        <h6>Suscribete</h6>
                    </div>
                    <div class="subscribtion_form">
                        <form>
                            <input type="email" name="mail" class="mail" placeholder="Correo..." />
                            <button type="button" class="submit"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
           
            <div class="col-12 col-md-6">
                <div class="single_widget_area">
                    <div class="footer_social_area">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/asfutbol14/" data-toggle="tooltip" data-placement="top" title="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>

<div class="row mt-5">
            <div class="col-md-12 text-center">
                <p>
                    
Copyright &copy;2022 Todos los derechos reservados

                </p>
            </div>
        </div>

    </div>
</footer>
</div>
    
  );
}
}
export default App;
