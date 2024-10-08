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

<body <?php body_class(); ?> :class="menu_toggled ? 'overflow-y-hidden h-screen' : ''" x-data="{menu_toggled: false}"
	@menu-toggled="menu_toggled = $event.detail">
	<?php wp_body_open(); ?>
	<div class="flex flex-col min-h-screen font-sans text-lg site">

		<?php include(THEME_DIR . '/template-parts/components/site-alert.php') ?>


		<header
			class="text-white flex flex-col bg-transparent hero h-screen <?= is_front_page() ? 'md:max-h-[40vh] max-h-[50vh] min-h-[25rem]' : 'max-h-[30vh] min-h-[18rem]' ?> relative overflow-hidden">
			<div class="relative z-10 flex items-center justify-between px-4 py-2 lg:py-0 lg:container">
				<a href="<?= get_home_url() ?>">
					<img class="w-40" src="<?= get_attachment(get_theme_option('logo')) ?>" />
				</a>
				<?php include(THEME_DIR . '/template-parts/components/navigation.php') ?>
			</div>

			<?php include(THEME_DIR . '/template-parts/components/header-content.php') ?>

			<?php include(THEME_DIR . '/template-parts/components/header-slider.php') ?>

		</header>
		<main class="flex-grow">