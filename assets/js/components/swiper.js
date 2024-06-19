import Swiper from "swiper/swiper-bundle.min.mjs";
import 'swiper/swiper-bundle.css';

export default (options) => ({
    swiper: null,
    init() {
        this.swiper = new Swiper(this.$refs.swiper, options);
    }
})