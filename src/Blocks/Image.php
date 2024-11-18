<?php

namespace Vaccaro\Blocks;
use Carbon_Fields\Container;
use Carbon_Fields\Field;

class Image extends Block
{
    function build()
    {
        $this->block
            ->add_fields([
                Field::make('image', 'image', __('Image'))
            ]);
    }
}