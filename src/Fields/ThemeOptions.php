<?php

namespace Vaccaro\Fields;

use Carbon_Fields\Container;
use Carbon_Fields\Field;

class ThemeOptions
{
    function __construct()
    {
        $this->register_fields();
    }

    function register_fields()
    {
        $basic_options_container = Container::make('theme_options', __('Theme Options'))
         ->add_fields(array(
            Field::make('header_scripts', 'header_scripts', __('Header Scripts')),
            Field::make('footer_scripts', 'footer_scripts', __('Footer Scripts'))
         ));

         Container::make('theme_options', __('Design'))
            ->set_page_parent($basic_options_container) // reference to a top level container
            ->add_fields(array(
                Field::make( 'media_gallery', 'header_images', __( 'Header Slideshow Images' ) ),
                Field::make( 'image', 'logo', __( 'Logo' ) ),
        ));


        Container::make('theme_options', __('Contact Information'))
            ->set_page_parent($basic_options_container) // reference to a top level container
            ->add_fields(array(
                Field::make('textarea', 'address', __('Address'))))
            ->add_fields(array(
                Field::make( 'complex', 'contacts', __( 'Contacts' ) )
                ->add_fields( array(
                    Field::make( 'text', 'name', __( 'Name' ) ),
                    Field::make( 'text', 'title', __( 'Title' ) ),
                    Field::make( 'text', 'email', __( 'Email' ) )
                ) )
        ));
    }
}