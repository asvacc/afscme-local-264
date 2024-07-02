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
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="font-sans text-lg site">
	<header class="text-white bg-green">
		<div class="container flex items-center justify-between">
			<a href="<?= get_home_url() ?>">
				<img class="w-40" src="<?= THEME_DIR_URL . '/assets/images/logo.png' ?>" />
			</a>
			<nav>
				<ul class="flex items-center justify-center">
					<li><a class="inline-block px-4 py-8 transition-colors hover:bg-green-light" href="/">Home</a></li>
					<li><a class="inline-block px-4 py-8 transition-colors hover:bg-green-light" href="/news">News & Announcements</a></li>
					<li class="relative" x-data="{open: false}" @mouseover.outside="open = false">
						<a @mouseenter="open = true" class="inline-block px-4 py-8 transition-colors hover:bg-green-light"
							href="/">Reports</a>
						<ul x-show="open" class="absolute left-0 z-50 w-64 bg-green">
							<li>
								<a class="block px-4 py-4 transition-colors hover:bg-green-light" href="">Report 1</a>
							</li>
							<li>
								<a class="block px-4 py-4 transition-colors hover:bg-green-light" href="">Report 2</a>
							</li>
						</ul>
					</li>
					<li><a class="inline-block px-4 py-8" href="/">Meeting Agenda</a></li>
					<li><a class="inline-block px-4 py-8" href="/about">About</a></li>
				</ul>
			</nav>
		</div>
	</header>
	<main>