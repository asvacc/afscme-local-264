<?php

namespace Vaccaro\Blocks;
use Carbon_Fields\Container;
use Carbon_Fields\Field;

class Gallery extends Block
{
    function build()
    {
        $this->block
            ->add_fields([
                Field::make('text', 'title', __('Title')),
                Field::make('media_gallery', 'images', __('Images'))
            ]);
    }
}