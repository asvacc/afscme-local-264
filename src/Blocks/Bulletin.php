<?php 

namespace Vaccaro\Blocks;
use Carbon_Fields\Container;
use Carbon_Fields\Field;

class Bulletin extends Block
{
    function build()
    {
        $this->block
            ->add_fields([
                Field::make('text', 'title', __('Title')),
                Field::make('rich_text', 'text', __('text')),
                Field::make('image', 'background_image', __('Background Image')),
                Field::make('color', 'background_color', __('Background Color')),
            ]);
    }
}