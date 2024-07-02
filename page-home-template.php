<?php
/**
 * Template Name: Home Page Template
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 */
get_header()
    ?>


<section x-data="swiper(
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
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div href="" class="bg-green-dark relative px-12 py-40 swiper-slide !h-auto">
                <div
                    class="container relative z-10 flex flex-col items-center justify-center h-full prose prose-lg text-center text-white">
                    <h2 class="text-4xl text-white uppercase">News article title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus officiis, natus,
                        magnam dolor quasi ex distinctio consequuntur corrupti, aperiam voluptas sunt. Porro, cum
                        asperiores. Cupiditate tempora esse atque fugit.</p>
                    <a href="/article" class="inline-block px-4 py-2 no-underline bg-white rounded-md text-green">Read more</a>
                </div>
                <img src="https://picsum.photos/800"
                    class="absolute inset-0 z-0 object-cover w-full h-full opacity-20" />
            </div>
            <div href="" class="bg-green-dark relative px-12 py-32 swiper-slide !h-auto">
                <div
                    class="container relative z-10 flex flex-col items-center justify-center h-full prose prose-lg text-center text-white">
                    <h2 class="text-4xl text-white uppercase">News article title 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus</p>
                    <a href="/article" class="inline-block px-4 py-2 no-underline bg-white rounded-md text-green">Read more</a>
                </div>
                <img src="https://picsum.photos/801"
                    class="absolute inset-0 z-0 object-cover w-full h-full opacity-20" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</section>

<section class="py-20">
    <div class="container grid grid-cols-2 gap-12">
        <div class="relative">
            <img class="absolute inset-0 object-cover w-full h-full rounded-tl-[3rem]" src="//picsum.photos/700" />
        </div>
        <div class="">
            <h3 class="text-3xl text-green">Who We Are</h3>
            <div class="mt-12 prose prose-lg">
                Representing:
                <ul>
                    <li>City of Buffalo Blue Collar Employees</li>
                    <li>Buffalo Municipal Housing Authority Employees - Blue Collar, White Collar and Managers</li>
                    <li>Board of Education – Food Service Workers, Cook Managers and Service Center Employees</li>
            </div>
            <img class="block h-auto mx-auto mt-32 w-60" src="<?= THEME_DIR_URL . '/assets/images/bison.png' ?>" />
        </div>
    </div>
</section>

<section class="py-20 bg-green">
    <div class="container">
        <div>
            <div class="flex items-center pb-4 border-b-4 border-gray-200 gap-x-12">
                <h3 class="text-3xl text-white">Latest News/Announcements</h3>
                <a href="#" class="btn btn-sm btn-white">View All</a>
            </div>
            <ul class="grid grid-cols-3 gap-8 pb-2 mt-12">
                <?php for ($i = 0; $i < 6; $i++): ?>
                    <li class="p-6 prose bg-white shadow-lg">
                        <small>June 29th, 2024</small>
                        <h4 class="mt-0 text-2xl">Announcement Title</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, architecto tenetur! Molestiae,
                            vero recusandae quaerat laborum architecto, ipsum autem laudantium quae rem aspernatur adipisci
                            porro possimus voluptatibus minima blanditiis veniam.</p>
                        <a href="/article" class="btn btn-green btn-sm">Read more</a>
                    </li>
                <?php endfor; ?>
            </ul>
            <div class="flex justify-center mt-20">
                <a class="btn btn-white" href="#">View All News & Announcements</a>
            </div>
        </div>
    </div>
</section>


<section class="py-20 bg-green-dark">
    <div class="container">
        <div>
            <div class="flex items-center pb-4 border-b-4 border-gray-200 gap-x-12">
                <h3 class="text-3xl text-white">Latest Galleries</h3>
            </div>
            <div class="grid grid-cols-4 gap-8 pb-2 mt-12">
                <?php for($i=0;$i<4;$i++): ?>
                    <div>
                        <a class="relative block aspect-video glightbox" href="https://picsum.photos/50<?=$i?>">
                            <img class="absolute inset-0 object-cover w-full h-full" src="https://picsum.photos/50<?=$i?>" />
                        </a>
                        <h4 class="mt-2 text-base text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit cumque</h4>
                    </div>
                <?php endfor; ?>
            </div>
            <div class="flex justify-center mt-16">
                <a class="btn btn-white" href="#">View All Photos</a>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();