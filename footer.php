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
    <div class="container grid items-start space-y-12 md:grid-cols-3 md:space-y-0">
        <div>
            <h6 class="mb-6 text-2xl font-bold">AFSCME Local 264</h6>
            <p>
                <?= get_theme_option("address") ?>
            </p>
        </div>
        <div class="col-span-2">
            <h6 class="mb-6 text-2xl font-bold">Contacts</h6>
            <ul class="grid items-start sm:grid-cols-2">
            <?php foreach(get_theme_option("contacts") as $contact): ?>
                <li class="py-4">
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