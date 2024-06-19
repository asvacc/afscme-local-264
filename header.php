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
<div class="font-sans site">
	<header class="container mx-auto mt-12"> 
		<?php wp_nav_menu( [
			'container' => 'nav',
			'menu_class' => 'flex items-center justify-center space-x-2 sm:space-x-8',
			'theme_location' => 'main-menu',
			//'walker' => new Vaccaro\Walkers\Main_Menu_Walker()
		]); ?> 
	</header>
	<main>