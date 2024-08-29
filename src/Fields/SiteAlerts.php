<?php

namespace Vaccaro\Fields;

use Carbon_Fields\Container;
use Carbon_Fields\Field;

class SiteAlerts
{
    function __construct()
    {
        $this->register_fields();
    }

    function register_fields()
    {
        Container::make('theme_options', __('Site Alerts'))
            ->set_icon('dashicons-warning')
            ->add_fields(array(
                Field::make( 'checkbox', 'site_alerts_enabled', __( 'Show Alert' ) ),
                Field::make('rich_text', 'site_alerts_text', __('Text')),
            ));
    }
}