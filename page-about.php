<?php
/**
 * Template Name: About Template
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

<section class="relative py-32 bg-green-dark">
    <div class="container relative z-10 prose text-center">
        <h1 class="text-4xl font-bold text-white">About</h1>
    </div>
    <img src="https://picsum.photos/802" class="absolute inset-0 z-0 object-cover w-full h-full opacity-30" />
</section>

<section class="py-20">
    <div class="container">
        <div class="max-w-lg mx-auto">
            <h3 class="text-3xl text-center text-green">Who We Are</h3>
            <div class="mt-12 prose prose-lg">
                Representing:
                <ul>
                    <li>City of Buffalo Blue Collar Employees</li>
                    <li>Buffalo Municipal Housing Authority Employees - Blue Collar, White Collar and Managers</li>
                    <li>Board of Education – Food Service Workers, Cook Managers and Service Center Employees</li>
            </div>
        </div>
</section>

<section class="py-20 bg-green-light">
    <div class="container grid grid-cols-4 gap-8">
        <?php for($i=0;$i<8;$i++): ?>
            <a class="relative aspect-square glightbox" href="https://picsum.photos/50<?=$i?>">
                <img class="absolute inset-0 object-cover w-full h-full" src="https://picsum.photos/50<?=$i?>" />
            </a>
        <?php endfor; ?>
    </div>
</section>

<?php
get_footer();