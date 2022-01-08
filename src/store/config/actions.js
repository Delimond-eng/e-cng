//import axios from "axios";
import { scroller } from "vue-scrollto/src/scrollTo";

const actions = {
    scrollToTop() {
        const scrollTo = scroller();
        scrollTo("#top");
    },
};

export default actions;