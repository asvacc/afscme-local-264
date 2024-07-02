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

<section class="py-20">
    <div class="container">
        <h1 class="text-5xl text-center">News & Announcements</h1>
        <ul class="grid grid-cols-2 gap-8 mt-12">
            <?php for ($i = 0; $i < 6; $i++): ?>
                <li class="p-6 bg-white shadow-lg">
                    <div class="prose prose-lg">
                    <span>June 29th, 2024</span>
                    <h2 class="mt-0 mb-2 text-4xl">Announcement Title</h2>
                    <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, architecto tenetur! Molestiae,
                        vero recusandae quaerat laborum architecto, ipsum autem laudantium quae rem aspernatur adipisci
                        porro possimus voluptatibus minima blanditiis veniam.</p>
                    <a href="/article" class="btn btn-green btn-sm">Read more</a>
                    </div>
                    <div class="flex items-center justify-start pt-6 mt-6 text-sm border-t-2 border-gray-200 gap-x-2">
                    Categories:
                        <ul class="flex items-center list-none gap-x-3">
                            <li><a class="px-2 py-1 text-xs text-white no-underline uppercase bg-gray-600 rounded-md" href="#">Announcement</a></li>
                            <li><a class="px-2 py-1 text-xs text-white no-underline uppercase bg-gray-600 rounded-md" href="#">Something else</a></li>
                        </ul>
                    </div>
                </li>
            <?php endfor; ?>
        </ul>
    </div>
</section>

<?php
get_footer();