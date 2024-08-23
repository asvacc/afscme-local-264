<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package test
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<style>
		[x-cloak] {
			display: none !important;
		}
	</style>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div class="font-sans text-lg site">
		<header class="text-white flex flex-col bg-transparent h-screen max-h-[40vh] relative overflow-hidden">
			<div class="relative z-10 flex items-center justify-between px-4 py-2 lg:py-0 lg:container">
				<a href="<?= get_home_url() ?>">
					<img class="w-40" src="<?= get_attachment(get_theme_option('logo')) ?>" />
				</a>
				<?php include (THEME_DIR . '/template-parts/components/navigation.php') ?>
			</div>

			<div
				class="container relative z-[1] flex flex-col items-center justify-center flex-grow text-center text-white">
				<?php if (is_front_page()): ?>
					<h1 class="-mt-12 text-6xl font-bold ">AFSCME Local 264</h1>
					<p class="max-w-screen-sm text-2xl mt-7">Representing: City of Buffalo Blue Collar Employees · Buffalo
						Municipal Housing Authority Employees –
						Blue Collar, White Collar and Managers · Board of Education – Food Service Workers, Cook Managers
						and Service Center Employees
					</p>
				<?php else: ?>
					<h1 class="text-6xl font-bold -mt-14"><?= get_the_title(); ?></h1>
				<?php endif; ?>
			</div>

			<?php include (THEME_DIR . '/template-parts/components/header-slider.php') ?>

		</header>
		<main>