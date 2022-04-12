<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="logo">
          <router-link to="/">
            <img loading="lazy" decoding="async" src='./assets/img/logo/logo.png' alt="Main Logo">
          </router-link>
        </div>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation" style="outline: none; border: none;">
          <span><i class="fas fa-bars" style=" font-size: 25px; color: #FCE33E;"></i></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav main-menu">
            <li class="nav-item" @click='PageSelect'>
              <router-link to="/" class="menu-link active">Home</router-link>
            </li>
            <li class="nav-item" @click='PageSelect'>
              <router-link to="/about" class="menu-link">About Us</router-link>
            </li>
            <li class="nav-item" @click='PageSelect'>
              <router-link to="/contact" class="menu-link">Contact</router-link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  </header>
  <router-view />
</template>

<script>
  export default {
    methods: {
      PageSelect(){
        let NavMenu = document.querySelector('#navbarNav');
        NavMenu.classList.remove('show');
      },
    }
  }
</script>

<style>
  @font-face {
    font-family: future;
    src: '../assets/font/FuturaPTBook.otf';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'futura-pt', Helvetica, Arial, Lucida, sans-serif;
    font-family: future;
  }

  a:hover {
    text-decoration: none !important;
  }

  #backToTopBtn {
    display: none;
    height: 40px;
    width: 40px;
    position: fixed;
    right: 0;
    top: 80%;
    background-color: #FFC435;
    border-radius: 5px;
    cursor: pointer;
  }

  #backToTopBtn svg {
    height: 100%;
    width: 100%;
  }

  #button::after {
    content: "\f077";
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    font-size: 1.2em;
    line-height: 30px;
    color: #fff;
  }

  #button:hover {
    cursor: pointer;
    background-color: #333;
  }

  #button:active {
    background-color: #555;
  }

  #button.show {
    opacity: 1;
    visibility: visible;
  }

  /* Base Html */


  /* header start */

  header {
    background-color: #000000;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 99999;
  }

  .navbar {
    padding: 9px 0 !important;
  }

  .logo {
    width: 87px;
    height: 64px;
  }

  .logo img {
    width: 100%;
    height: 100%;
  }

  nav.navbar.navbar-expand-lg.navbar-light.bg-light {
    background: transparent !important;
  }

  .navbar-expand-lg .navbar-collapse {
    justify-content: flex-end;
  }

  .menu-link {
    display: flex;
    margin-right: 25px;
    color: #ffffff;
    font-size: 14px;
    transition: .4s;
    text-transform: uppercase;
  }

  .menu-link:hover {
    text-decoration: none;
    color: #ffffff93;
  }

  .router-link-exact-active {
    color: #FCE33E;
  }

  @media screen and (max-width: 991px) {

    header {
      padding: 10px 0;
      height: 85px;
    }

    .logo {
      width: 70px;
      height: 50px;
    }

    .navbar-nav.main-menu {
      margin-top: 16px;
      background-color: #000000;
      padding: 40px;
      z-index: 9999999 !important;
    }

    .banner-driving {
      z-index: 1 !important;
    }

    .nav-item {
      padding: 10px 25px;
    }

    .main-menu {
      border-top: 3px solid #2ea3f2;
    }

    .menu-link:hover {
      color: rgba(252, 227, 62, 0.479);
    }
  }
</style>