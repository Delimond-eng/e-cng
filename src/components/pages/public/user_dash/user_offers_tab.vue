<template>
  <div>
    <div class="page-content">
      <div class="inner-box">
        <div class="dashboard-box">
          <h2 class="dashbord-title">Mes offres</h2>
        </div>
        <div class="dashboard-wrapper">
          <div class="dashboardboxtitle">
            <h2>Offres</h2>
          </div>
          <table class="table table-responsive dashboardtable tablemyads">
            <thead>
              <tr>
                <th>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="checkall" />
                    <label class="custom-control-label" for="checkall"></label>
                  </div>
                </th>
                <th>Photo</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr data-category="active">
                <td>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="adone" />
                    <label class="custom-control-label" for="adone"></label>
                  </div>
                </td>
                <td class="photo">
                  <img class="img-fluid" src="assets/img/product/img1.jpg" alt="" />
                </td>
                <td data-title="Title">
                  <h3>HP Laptop 6560b core i3 3nd generation</h3>
                  <span>Ad ID: ng3D5hAMHPajQrM</span>
                </td>
                <td data-title="Category">
                  <span class="adcategories">Laptops &amp; PCs</span>
                </td>
                <td data-title="Price">
                  <h3>139$</h3>
                </td>
                <td data-title="Action">
                  <div class="btns-actions">
                    <a class="btn-action btn-view" href="#"><i class="lni-eye"></i></a>
                    <a class="btn-action btn-edit" href="#"><i class="lni-pencil"></i></a>
                    <a class="btn-action btn-delete" href="#"
                      ><i class="lni-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
              <tr data-category="active">
                <td>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="adtwo" />
                    <label class="custom-control-label" for="adtwo"></label>
                  </div>
                </td>
                <td class="photo">
                  <img class="img-fluid" src="assets/img/product/img2.jpg" alt="" />
                </td>
                <td data-title="Title">
                  <h3>Jvc Haebr80b In-ear Sports Headphones</h3>
                  <span>Ad ID: ng3D5hAMHPajQrM</span>
                </td>
                <td data-title="Category">Electronics</td>
                <td data-title="Price">
                  <h3>$189</h3>
                </td>
                <td data-title="Action">
                  <div class="btns-actions">
                    <a class="btn-action btn-view" href="#"><i class="lni-eye"></i></a>
                    <a class="btn-action btn-edit" href="#"><i class="lni-pencil"></i></a>
                    <a class="btn-action btn-delete" href="#"
                      ><i class="lni-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
              <tr data-category="inactive">
                <td>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="adthree" />
                    <label class="custom-control-label" for="adthree"></label>
                  </div>
                </td>
                <td class="photo">
                  <img class="img-fluid" src="assets/img/product/img3.jpg" alt="" />
                </td>
                <td data-title="Title">
                  <h3>Furniture Straps 4-Pack, TV Anti-Tip Metal Wall</h3>
                  <span>Ad ID: ng3D5hAMHPajQrM</span>
                </td>
                <td data-title="Category">Real Estate</td>
                <td data-title="Price">
                  <h3>$69</h3>
                </td>
                <td data-title="Action">
                  <div class="btns-actions">
                    <a class="btn-action btn-view" href="#"><i class="lni-eye"></i></a>
                    <a class="btn-action btn-edit" href="#"><i class="lni-pencil"></i></a>
                    <a class="btn-action btn-delete" href="#"
                      ><i class="lni-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
