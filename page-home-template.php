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
            <div href="" class="bg-green-dark relative px-12 py-32 swiper-slide !h-auto">
                <div
                    class="container relative z-10 flex flex-col items-center justify-center h-full prose prose-lg text-center text-white">
                    <h2 class="text-4xl text-white uppercase">News article title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus officiis, natus,
                        magnam dolor quasi ex distinctio consequuntur corrupti, aperiam voluptas sunt. Porro, cum
                        asperiores. Cupiditate tempora esse atque fugit.</p>
                    <a href="" class="inline-block px-4 py-2 no-underline bg-white rounded-md text-green">Read more</a>
                </div>
                <img src="https://picsum.photos/800"
                    class="absolute inset-0 z-0 object-cover w-full h-full opacity-20" />
            </div>
            <div href="" class="bg-green-dark relative px-12 py-32 swiper-slide !h-auto">
                <div
                    class="container relative z-10 flex flex-col items-center justify-center h-full prose prose-lg text-center text-white">
                    <h2 class="text-4xl text-white uppercase">News article title 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus</p>
                    <a href="" class="inline-block px-4 py-2 no-underline bg-white rounded-md text-green">Read more</a>
                </div>
                <img src="https://picsum.photos/801"
                    class="absolute inset-0 z-0 object-cover w-full h-full opacity-20" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</section>

<section class="py-20">
    <div class="container grid grid-cols-2 gap-16">
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
        <div>
            <h3 class="text-3xl text-green">Latest News/Announcements</h3>
            <ul class="flex flex-col pb-2 mt-12 divide-y-2 divide-gray-100 border-y-2 border-y-gray-100">
                <li class="py-4 prose">
                    <small>June 29th, 2024</small>
                    <h4 class="mt-0 text-xl">Announcement Title</h4>
                    <a href="/" class="btn btn-green btn-xs">Read more</a>
                </li>
                <li class="py-4 prose">
                    <small>June 29th, 2024</small>
                    <h4 class="mt-0 text-xl">Announcement Title</h4>
                    <a href="/" class="btn btn-green btn-xs">Read more</a>
                </li>
                <li class="py-4 prose">
                    <small>June 29th, 2024</small>
                    <h4 class="mt-0 text-xl">Announcement Title</h4>
                    <a href="/" class="btn btn-green btn-xs">Read more</a>
                </li>
                <li class="py-4 prose">
                    <small>June 29th, 2024</small>
                    <h4 class="mt-0 text-xl">Announcement Title</h4>
                    <a href="/" class="btn btn-green btn-xs">Read more</a>
                </li>
                <li class="py-4 prose">
                    <small>June 29th, 2024</small>
                    <h4 class="mt-0 text-xl">Announcement Title</h4>
                    <a href="/" class="btn btn-green btn-xs">Read more</a>
                </li>
            </ul>
            <a class="flex items-center mt-4 space-x-2 text-green hover:underline" href="/"><span>View all news and
                    announcements</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </a>
        </div>
    </div>
</section>

<?php 
get_footer();