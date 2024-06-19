import Alpine from 'alpinejs'
import glightbox from './components/glightbox.js'

import swiper from './components/swiper.js'

Alpine.data('swiper', swiper)

window.Alpine = Alpine

Alpine.start()