//import axios from "axios";
import { scroller } from "vue-scrollto/src/scrollTo";

const actions = {
    scrollToTop() {
        const scrollTo = scroller();
        scrollTo("#header-wrap");
    },
};

export default actions;