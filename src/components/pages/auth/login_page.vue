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
              <h2 class="product-title">Connexion</h2>
              <ol class="breadcrumb">
                <li><a href="">Acceuil /</a></li>
                <li class="current">Connexion</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="login section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-12 col-xs-12">
            <div class="login-form login-area">
              <h3 class="brand-logo">CNG <span>Acheter & Vendre</span></h3>
              <form role="form" class="login-form">
                <div class="form-group">
                  <div class="input-icon">
                    <i class="lni-user"></i>
                    <input
                      type="text"
                      id="sender-email"
                      class="form-control"
                      name="email"
                      placeholder="Email ou n° de téléphone"
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
                <div class="form-group mb-3">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="checkedall" />
                    <label class="custom-control-label" for="checkedall"
                      >Garder ma session</label
                    >
                  </div>
                  <a class="forgetpassword" href="forgot-password.html"
                    >Mot de passe oublié ?</a
                  >
                </div>
                <div class="text-center">
                  <button class="btn btn-common log-btn btn-block">Submit</button>
                </div>
                <div class="text-center mt-2">
                  <span
                    >Vous n'avez pas un compte ?
                    <router-link
                      style="color: #df9307; font-weight: bold"
                      tag="a"
                      :to="{ name: 'register' }"
                      >créez un compte
                    </router-link></span
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
