<template>
  <div>
    <div class="page-header" style="background: url(assets/img/banner1.jpg)">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="breadcrumb-wrapper">
              <h2 class="product-title">Vendre votre produit ou service</h2>
              <ol class="breadcrumb">
                <li><a href="#">Accueil /</a></li>
                <li class="current">Vendre</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="content" class="section-padding">
      <div class="container">
        <div class="row page-content">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7">
            <div class="inner-box">
              <div class="dashboard-box">
                <h2 class="dashbord-title">Produit informations</h2>
              </div>
              <div class="dashboard-wrapper">
                <div class="form-group mb-3 tg-inputwithicon">
                  <label class="control-label">Catégorie</label>
                  <div class="tg-select form-control">
                    <select>
                      <option value="none">Sélectionnez une catégorie</option>
                      <option value="none">Mobiles</option>
                      <option value="none">Electronics</option>
                      <option value="none">Training</option>
                      <option value="none">Real Estate</option>
                      <option value="none">Services</option>
                      <option value="none">Training</option>
                      <option value="none">Vehicles</option>
                    </select>
                  </div>
                </div>

                <div class="form-group mb-3 tg-inputwithicon">
                  <label class="control-label">Sous catégorie</label>
                  <div class="tg-select form-control">
                    <select>
                      <option value="none">Sélectionnez sous catégorie</option>
                      <option value="none">Mobiles</option>
                      <option value="none">Electronics</option>
                      <option value="none">Training</option>
                      <option value="none">Real Estate</option>
                      <option value="none">Services</option>
                      <option value="none">Training</option>
                      <option value="none">Vehicles</option>
                    </select>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <label class="control-label">Produit désignation</label>
                  <input
                    class="form-control input-md"
                    name="Title"
                    placeholder="Entrez la désignation..."
                    type="text"
                  />
                </div>

                <div class="form-group mb-3">
                  <label class="control-label">Price Title</label>
                  <input
                    class="form-control input-md"
                    name="price"
                    placeholder="Ad your Price"
                    type="text"
                  />
                </div>
                <div class="form-group md-3">
                  <section id="editor">
                    <div id="summernote"></div>
                  </section>
                </div>
                <label class="tg-fileuploadlabel" for="tg-photogallery">
                  <span><i class="lni-upload"></i></span>
                  <span>inserez une image</span>
                  <input
                    id="tg-photogallery"
                    class="tg-fileinput"
                    type="file"
                    ref="img"
                    multiple="multiple"
                    name="file"
                    @change="uploadImage($event)"
                  />
                </label>
              </div>
              <div class="row m-2" v-if="images">
                <div
                  class="col-md-3 col-lg-4 col-xs-12"
                  v-for="(img, index) in images"
                  :key="index"
                >
                  <div
                    class="services-item wow fadeInRight animated"
                    data-wow-delay="0.4s"
                    :style="`background: url(${img.url}) no-repeat;
                      background-size: cover;`"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5">
            <div class="inner-box">
              <div class="tg-contactdetail">
                <div class="dashboard-box">
                  <h2 class="dashbord-title">Ajoutez les détails</h2>
                </div>
                <div class="dashboard-wrapper">
                  <div class="form-group mb-3" v-for="i in 6" :key="i">
                    <label class="control-label">Détail {i}</label>
                    <input
                      class="form-control input-md"
                      placeholder="entrez une valeur"
                      name="name"
                      type="text"
                    />
                  </div>

                  <button
                    class="btn btn-success btn-block"
                    @click.stop="showImage"
                    type="button"
                  >
                    AJOUTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },
  methods: {
    uploadImage(event) {
      //this.form.file = this.$refs.img.files[0];
      let file = event.target.files[0];

      if (file.size > 1048576) {
        alert("Desolé! cette image est invalide");
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          if (this.images.length === 0) {
            this.images.push({
              url: event.target.result,
            });
          } else {
            this.images.forEach((el) => {
              if (el.url === event.target.result) {
                alert("Desolé! cette image existe déjà !");
                return;
              } else {
                this.images.push({
                  url: event.target.result,
                });
              }
            });
          }
        };
        reader.readAsDataURL(file);
      }
    },

    showImage() {
      for (let i = 0; i < this.images.length; i++) {
        //send base64 data to server
        console.log(this.images[i].url.reader);
      }
    },
  },
};
</script>
