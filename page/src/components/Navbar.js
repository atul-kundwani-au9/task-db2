import React from 'react'

const Navbar = () => {
    return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container-fluid .ml-auto" style={{ background: 'green' }}>            
    
    <div class="collapse navbar-collapse .ml-auto" id="navbarSupportedContent" style={{ textAlign: 'center' }}>
    <ul style={{ marginLeft: 'auto', display: 'flex', listStyleType: 'none' }} >
    <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/"   style={{ color: 'white' }}>Home</a>
    </li>
    <li class="nav-item">
   <a class="nav-link" href="/about-us" style={{ color: 'white' }}>About Us</a>
   </li>
   <li class="nav-item dropdown">
   <a class="nav-link dropdown-toggle" href="/products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
    Products
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
   <li><a class="dropdown-item" href="/product1" >Product1</a></li>
    <li><a class="dropdown-item" href="/product2" >Product2</a></li>
    <li><a class="dropdown-item" href="/product3">Product3</a></li>
    </ul>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="/offers" style={{ color: 'white' }}>Offers</a>
    </li>
    </ul>
   </div>
   </div>
    </nav>
    </div >
  )
}
export default Navbar;