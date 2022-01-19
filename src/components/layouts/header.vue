<template>
  <div>
    <!--Header-->
    <header id="header-wrap">
      <div class="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-5 col-xs-12">
              <ul class="list-inline">
                <li><i class="lni-world"></i> Wenze | Teka somba</li>
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
              ><H2 class="brand-logo">Wenze <span>Teka | somba</span></H2></a
            >
          </div>
          <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="navbar-nav mr-auto w-100 justify-content-center">
              <li class="nav-item dropdown">
                <a class="nav-link" href=""> Acceuil </a>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" tag="a" :to="{ name: 'categories' }">
                  Catégories</router-link
                >
              </li>

              <li class="nav-item">
                <a class="nav-link" href="contact.html"> Nous contacter </a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" tag="a" :to="{ name: 'dashboard' }">
                  <i class="lni-user mr-2"></i>Mon compte</router-link
                >
              </li>
            </ul>
            <div class="post-btn">
              <router-link :to="{ name: 'product_post' }" tag="a" class="btn btn-common"
                ><i class="lni-pencil-alt"></i> Vendre</router-link
              >
            </div>
          </div>
        </div>

        <ul class="mobile-menu">
          <li>
            <a href="#"> Acceuil </a>
          </li>
          <li>
            <a href="#">Categories</a>
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
                <router-link tag="a" :to="{ name: 'dashboard' }"
                  ><i class="lni-behance mr-2"></i>Mon compte</router-link
                >
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

          <div class="post-btn">
            <router-link
              :to="{ name: 'product_post' }"
              tag="a"
              class="btn btn-common text-white"
              ><i class="lni-pencil-alt"></i> Vendre</router-link
            >
          </div>
        </ul>
      </nav>
    </header>
    <!--End Header-->
  </div>
</template>
