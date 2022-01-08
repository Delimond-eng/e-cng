<template>
  <div>
    <!--Header-->
    <header id="header-wrap">
      <div class="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-5 col-xs-12">
              <ul class="list-inline">
                <li><i class="lni-world"></i> CNG Acheter & vendre</li>
              </ul>
            </div>
            <div class="col-lg-5 col-md-7 col-xs-12">
              <div class="header-top-right float-right">
                <router-link tag="a" :to="{ name: 'login' }" class="header-top-button"
                  ><i class="lni-lock"></i> Connexion</router-link
                >
                |
                <router-link tag="a" :to="{ name: 'register' }" class="header-top-button"
                  ><i class="lni-pencil"></i>Créer compte</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg bg-white fixed-top scrolling-navbar">
        <div class="container">
          <div class="navbar-header">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-navbar"
              aria-controls="main-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
              <span class="lni-menu"></span>
              <span class="lni-menu"></span>
              <span class="lni-menu"></span>
            </button>
            <a href="" class="navbar-brand"
              ><H2 class="brand-logo">CNG <span>Acheter & vendre</span></H2></a
            >
          </div>
          <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="navbar-nav mr-auto w-100 justify-content-center">
              <li class="nav-item dropdown active">
                <a class="nav-link" href=""> Acceuil </a>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" tag="a" :to="{ name: 'categories' }">
                  Catégories</router-link
                >
              </li>

              <li class="nav-item">
                <a class="nav-link" href="category.html">
                  Messages <span class="badge badge-danger">2</span></a
                >
              </li>

              <li class="nav-item">
                <a class="nav-link" href="contact.html"> Nous contacter </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="lni-user mr-2"></i>Moi
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Mes produits</a>
                  <a class="dropdown-item" href="#">Mes offres</a>
                </div>
              </li>
            </ul>
            <div class="post-btn">
              <a class="btn btn-common" href="post-ads.html"
                ><i class="lni-pencil-alt"></i> Vendre</a
              >
            </div>
          </div>
        </div>

        <ul class="mobile-menu">
          <li>
            <a class="active" href="#"> Acceuil </a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>

          <li>
            <a href="#">Messages</a>
          </li>

          <li>
            <a href="#">Nous contacter</a>
          </li>

          <li>
            <a href="#" style="color: #df9307; font-weight: 900">
              <i class="lni-user mr-2"></i> Utilisateur
            </a>
            <ul class="dropdown">
              <li>
                <a href="#"><i class="lni-behance mr-2"></i>Mes produits</a>
              </li>
              <li>
                <a href="#"><i class="lni-bookmark mr-2"></i>Offres</a>
              </li>
              <li class="divider"></li>
              <li>
                <router-link tag="a" :to="{ name: 'login' }"
                  ><i class="lni-lock mr-2"></i>Connexion</router-link
                >
              </li>
              <li>
                <router-link tag="a" :to="{ name: 'register' }"
                  ><i class="lni-pencil mr-2"></i>Créer compte</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <!--search banner-->
      <d-search-banner-area />
      <!--end search banner-->
    </header>
    <!--End Header-->
  </div>
</template>
