<template>
  <div>
    <!--search banner-->
    <d-search-banner-area />
    <!--end search banner-->
    <!--Categories section-->
    <d-categorie-section />
    <!--end Categories section-->

    <!--Recommendation section-->
    <d-recommendations-products-section />
    <!--End Recommendation section-->

    <!--Product section-->
    <d-all-products-section />
    <!--End Product section-->

    <!--How it work section-->
    <d-how-section />
    <!-- End How it work section-->

    <!--Pricing table section-->
    <d-pricing-table-section />
    <!--End Pricing Table-->
  </div>
</template>

<script>
import dCategorieSection from "@/components/sections/categories_section.vue";
import dRecommendationsProductsSection from "@/components/sections/recommendations_products_section.vue";
import dAllProductsSection from "@/components/sections/all_products_section.vue";
import dHowSection from "@/components/sections/how_it_work_section.vue";
import dPricingTableSection from "@/components/sections/pricing_table_section.vue";

export default {
  name: "HomePage",
  components: {
    dCategorieSection,
    dRecommendationsProductsSection,
    dAllProductsSection,
    dHowSection,
    dPricingTableSection,
  },
};
</script>
