<?php

use Symfony\Component\Finder\Finder;

add_action('after_setup_theme', 'boot_carbon_fields');
add_action('after_setup_theme', 'register_post_types');
add_action('after_setup_theme', 'register_blocks');
add_action('carbon_fields_register_fields', 'crb_attach_theme_options');

if (!function_exists('boot_carbon_fields')) {
    function boot_carbon_fields()
    {
        \Carbon_Fields\Carbon_Fields::boot();
    }
}

if (!function_exists('crb_attach_theme_options')) {
    function crb_attach_theme_options()
    {
        $finder = new Finder();
        $finder->files()->name('*.php')->in(THEME_DIR . '/src/Fields');

        foreach ($finder as $file) {
            $class_name = rtrim("Vaccaro\Fields", '\\') . '\\' . $file->getFilenameWithoutExtension();
            if (class_exists($class_name)) {
                new $class_name();
            }
        }
    }
}

if(!function_exists('register_blocks'))
{
    function register_blocks()
    {
        $finder = new Finder();
        $finder->files()->name('*.php')->in(THEME_DIR . '/src/Blocks');

        foreach ($finder as $file) {
            $class_name = rtrim("Vaccaro\Blocks", '\\') . '\\' . $file->getFilenameWithoutExtension();
            if (class_exists($class_name) && $class_name != "Vaccaro\Blocks\Block") {
                $instance = new $class_name();
                $instance->build();
            }
        }
    }
}

if (!function_exists('register_post_types')) {
    function register_post_types()
    {
        $finder = new Finder();
        $finder->files()->name('*.php')->in(THEME_DIR . '/src/PostTypes');

        foreach ($finder as $file) {
            $class_name = rtrim("Vaccaro\PostTypes", '\\') . '\\' . $file->getFilenameWithoutExtension();
            if (class_exists($class_name)) {
                $instance = new $class_name();
            }
        }
    }
}