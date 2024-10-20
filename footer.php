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
<footer class="pt-32 pb-20 text-white bg-green-dark">
    <div class="container flex flex-col items-center space-y-16 text-center">
        <div>
            <h6 class="mb-6 text-2xl font-bold">AFSCME Local 264</h6>
            <p>
                2019 Seneca St<br />
                Buffalo, NY 14210
            </p>
        </div>
        <div>
            <h6 class="mb-6 text-2xl font-bold">Contacts</h6>
            <ul class="space-y-7">
            <?php foreach(get_theme_option("contacts") as $contact): ?>
                <li>
                    <p class="font-bold"><?= $contact['title']; ?></p>
                    <p><?= $contact['name']; ?></p>
                    <a class="hover:underline" href="mailto:<?= $contact['email']; ?>"><?= $contact['email']; ?></a>
                </li>
            <?php endforeach; ?>
            </ul>
        </div>
    </div>
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>