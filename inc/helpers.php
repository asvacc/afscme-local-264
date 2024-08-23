<?php

if(!function_exists('get_field'))
{
    function get_field($post_id, $field)
    {
        return carbon_get_post_meta($post_id, $field);
    }
}

if(!function_exists('get_theme_option'))
{
    function get_theme_option($field)
    {
        return carbon_get_theme_option($field);
    }
}

if (!function_exists('get_attachment')) {
    function get_attachment($id, $size = 'full')
    {
        return wp_get_attachment_image_src($id, $size)[0];
    }
}