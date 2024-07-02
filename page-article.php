<?php
/**
 * Template Name: Article Template
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
    <div class="container grid grid-cols-8 gap-20">
        <div class="col-span-2 space-y-12">
            <div>
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
            <article class="max-w-full prose prose-xl">
                <h1 class="mb-0 text-6xl text-green">Announcement Title</h1>
                <small class="text-lg">June 29th, 2024</small>
                <div>
                    <h2>Introduction to Sample Blog Post</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl quis hendrerit
                        posuere, dui diam sollicitudin nulla, vitae laoreet odio lorem ac ipsum. Duis quis purus vel
                        ligula laoreet aliquet. Suspendisse auctor dui a dolor placerat, nec condimentum dolor molestie.
                    </p>

                    <h2>Main Content Section</h2>
                    <p>Integer feugiat ullamcorper mi, sit amet aliquam lorem fermentum sit amet. Ut ut varius nunc, at
                        tincidunt elit. Suspendisse potenti. </p>

                    <h3>Subsection Example</h3>
                    <p>Nam elementum, ex sit amet eleifend eleifend, justo risus suscipit purus, eget tempus sem nisi
                        sed metus. Vestibulum ut sapien ex. Sed et fermentum ligula. </p>

                    <h2>Lists Example</h2>
                    <h3>Ordered List</h3>
                    <ol>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ol>

                    <h3>Unordered List</h3>
                    <ul>
                        <li>Item A</li>
                        <li>Item B</li>
                        <li>Item C</li>
                    </ul>

                    <h2>Adding Images</h2>
                    <figure>
                        <img src="https://via.placeholder.com/800x400" alt="Sample Image">
                        <figcaption>Image caption goes here.</figcaption>
                    </figure>

                    <h2>Conclusion</h2>
                    <p>Donec at dapibus ex, et fringilla nunc. Vestibulum tincidunt mi vel mi malesuada consequat. Nulla
                        lobortis erat vel orci posuere congue. </p>

                </div>
            </article>
            <div class="flex items-center justify-start pt-8 mt-8 text-sm border-t-2 border-gray-200 gap-x-4">
                Categories:
                <ul class="flex items-center list-none gap-x-2">
                    <li><a class="px-2 py-1 text-xs text-white no-underline uppercase rounded-md bg-green" href="#">Announcement</a></li>
                    <li><a class="px-2 py-1 text-xs text-white no-underline uppercase rounded-md bg-green" href="#">Something else</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();