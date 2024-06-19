<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package test
 */

?>
</main>
<footer class="py-32 text-white bg-gray-800">
    <div class="container grid grid-cols-4 gap-8">
        <div>
            <h6 class="mb-8 text-xl font-bold">AFSCME Local 264</h6>
            <p>
                2019 Seneca St<br />
                Buffalo, NY 14210
            </p>
        </div>
        <div class="col-span-2">
            <h6 class="w-full mb-8 text-xl font-bold">Links</h6>
            <ul class="columns-2">
                <li><a href="/">Link</a></li>
                <li><a href="/">Link</a></li>
                <li><a href="/">Link</a></li>
                <li><a href="/">Link</a></li>
                <li><a href="/">Link</a></li>
            </ul>
        </div>
        <div>
            <h6 class="mb-8 text-xl font-bold">Contact</h6>
            <ul>
                <li>Phone: <a href="/">716-123-1234</a></li>
                <li>Email: <a href="/">test@test.com</a></li>
            </ul>
        </div>
    </div>
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>