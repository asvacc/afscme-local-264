<?php
/**
 * Template Name: News Template
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

<section class="py-12 bg-white">
    <div class="container">
        <h1 class="pb-2 text-5xl text-left border-b-4 text-green border-green">News & Announcements</h1>
    </div>
</section>

<section class="py-20">
    <div class="container grid grid-cols-8 gap-20">
        <div class="col-span-2 space-y-12">
            <div class="sticky top-8">
                <h3 class="text-2xl text-green border-green">Categories</h3>
                <ul class="mt-6 divide-y-2 divide-gray-200 border-y-2 border-y-gray-200">
                    <?php for ($i = 0; $i < 7; $i++): ?>
                        <li><a class="flex px-0 py-3 transition-all bg-transparent hover:bg-gray-200 flex-center hover:px-2"
                                href="#">Category</a></li>
                    <?php endfor; ?>
                </ul>
            </div>
        </div>
        <div class="col-span-6">
            <ul class="grid grid-cols-1 gap-8">
                <?php for ($i = 0; $i < 6; $i++): ?>
                    <li class="p-6 bg-white shadow-lg">
                        <div class="prose prose-lg">
                            <h2 class="mt-0 mb-0 text-4xl">Announcement Title</h2>
                            <span class="text-base">June 29th, 2024</span>
                            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, architecto
                                tenetur! Molestiae,
                                vero recusandae quaerat laborum architecto, ipsum autem laudantium quae rem aspernatur
                                adipisci
                                porro possimus voluptatibus minima blanditiis veniam.</p>
                            <a href="/article" class="btn btn-green btn-sm">Read more</a>
                        </div>
              
                    </li>
                <?php endfor; ?>
            </ul>
        </div>
    </div>
</section>

<?php
get_footer();