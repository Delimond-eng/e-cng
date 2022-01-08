<template>
  <div>
    <div
      class="page-header"
      style="
        background-image: url(assets/img/background/bg-image.jpg);
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="breadcrumb-wrapper">
              <h2 class="product-title">Création compte</h2>
              <ol class="breadcrumb">
                <li><a href="">Acceuil /</a></li>
                <li class="current">création compte</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="register section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-12 col-xs-12">
            <div class="register-form login-area">
              <h3 class="brand-logo">CNG <span>Acheter & Vendre</span></h3>
              <form class="login-form">
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-user"></i>
                    <input
                      type="text"
                      id="Name"
                      class="form-control"
                      name="email"
                      placeholder="Nom complet"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-phone"></i>
                    <input
                      type="text"
                      id="phone"
                      class="form-control"
                      name="phone"
                      placeholder="n° de téléphone"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-envelope"></i>
                    <input
                      type="text"
                      id="sender-email"
                      class="form-control"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-lock"></i>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Mot de passe"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-lock"></i>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirmation"
                    />
                  </div>
                </div>
                <div class="form-group mb-3">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="checkedall" />
                    <label class="custom-control-label" for="checkedall"
                      >J'acceptes les conditions d'utilisations & de confidentialités
                      !</label
                    >
                  </div>
                </div>
                <div class="text-center">
                  <button class="btn btn-common btn-block log-btn">Créer compte</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
