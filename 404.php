<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package test
 */

get_header();
?>

<section class="h-full py-20 text-white bg-green">
	<div class="container flex flex-col items-center space-y-12">
		<h2 class="text-3xl">This page does not exist.</h2>
		<a href="<?= get_site_url() ?>" class="btn btn-white">Back to home</a>
	</div>
</section>
<?php
get_footer();
