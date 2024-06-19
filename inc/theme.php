<?php

add_action('init', 'remove_head_junk');
add_action('wp_enqueue_scripts', 'enqueue_scripts');
add_action('wp_enqueue_scripts', 'enqueue_styles');
add_action( 'init', 'register_menu' );
// add_action('admin_enqueue_scripts', 'enqueue_styles');
add_filter( 'body_class', 'custom_body_class' );
add_theme_support( 'post-thumbnails' );


if (!function_exists('enqueue_scripts')) {
    function enqueue_scripts()
    {
        wp_register_script('main',  THEME_DIR_URL . '/dist/index.js', [], '1.0', [
            'strategy' => 'defer'
        ]);
        wp_enqueue_script('main');
    }
}

if (!function_exists('enqueue_styles')) {
    function enqueue_styles()
    {
        wp_enqueue_style('main', THEME_DIR_URL . '/dist/index.css');
        wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
    }
}

if (!function_exists('remove_head_junk')) {
    function remove_head_junk()
    {
        remove_action('wp_head', 'rsd_link');
        remove_action('wp_head', 'wp_generator');
        remove_action('wp_head', 'feed_links', 2);
        remove_action('wp_head', 'index_rel_link');
        remove_action('wp_head', 'wlwmanifest_link');
        remove_action('wp_head', 'feed_links_extra', 3);
        remove_action('wp_head', 'start_post_rel_link', 10, 0);
        remove_action('wp_head', 'parent_post_rel_link', 10, 0);
        remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
        remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
        remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
        remove_action('wp_head', 'print_emoji_detection_script', 7);
        remove_action('admin_print_scripts', 'print_emoji_detection_script');
        remove_action('wp_print_styles', 'print_emoji_styles');
        remove_action('admin_print_styles', 'print_emoji_styles');
    }
}

if(!function_exists('register_menu')){
    function register_menu() {
        register_nav_menu('main-menu',__( 'Main Menu' ));
    }
}