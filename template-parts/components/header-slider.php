<?php
$slides = get_theme_option('header_images');
shuffle($slides);
?>
<div class="absolute inset-0 z-0 h-full" x-data="swiper(
                    {
                        loop: true,
                        allowTouchMove: false,
                        speed:18000,
                        slidesPerView: 2,
                        freeMode: true,
                        autoplay: {
                            delay: 0,
                        }
                    }
                )">
    <!-- Slider main container -->
    <div x-ref="swiper" class="h-full pointer-events-none swiper bg-green-dark">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper" style="transition-timing-function: linear;">
            <!-- Slides -->
            <?php foreach ($slides as $slide): ?>
                <img src="<?= get_attachment($slide); ?>"
                    class="absolute inset-0 z-0 object-cover w-full h-full pointer-events-none none swiper-slide opacity-20" />
            <?php endforeach; ?>
        </div>
    </div>
</div>