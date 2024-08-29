<div class="container mx-auto">
    <?php if (count($slides) > 1): ?>
        <div class="flex flex-col gap-y-20">
            <div x-data="swiper(
        {
            loop: true,
            speed:1000,
            autoplay: {
                delay: 7000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        }
    )">
                <!-- Slider main container -->
                <div x-ref="swiper" class="swiper"
                    style="--swiper-theme-color: #fff;--swiper-pagination-bullet-width:1.25rem;--swiper-pagination-bullet-height:1.25rem;--swiper-pagination-bullet-horizontal-gap:.25rem;--swiper-pagination-bullet-opacity: .9;">
                    <!-- Additional required wrapper -->
                <?php endif; ?>
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <?php foreach ($slides as $slide): ?>
                        <div <?= !empty($slide['background_color']) ? "style='background-color:$slide[background_color];'" : ""; ?> class="bg-green-dark relative px-12 py-40 swiper-slide !h-auto">
                            <div
                                class="container relative z-10 flex flex-col items-center justify-center h-full space-y-4 text-3xl text-white">
                                <h2 class="mb-4 text-5xl font-bold uppercase"><?= $slide['title']; ?></h2>
                                <?= $slide['text']; ?>
                            </div>
                            <?php if ($slide['background_image']): ?>
                                <img src="<?= get_attachment($slide['background_image']); ?>"
                                    class="absolute inset-0 z-0 object-cover w-full h-full opacity-20" />
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
                <?php if (count($slides) > 1): ?>
                    <div class="swiper-pagination"></div>
                <?php endif; ?>
                <?php if (count($slides) > 1): ?>
                </div>
            </div>
        </div>
    <?php endif; ?>
</div>