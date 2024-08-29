<?php 

namespace Vaccaro\Blocks;
use Carbon_Fields\Container;
use Carbon_Fields\Field;

class Slides extends Block
{
    function build()
    {
        $this->block
            ->add_fields([
                Field::make( 'complex', 'slides', __( 'Slides' ) )
                    ->add_fields( array(
                        Field::make( 'text', 'title', __( 'Slide Title' ) ),
                        Field::make( 'rich_text', 'text', __( 'Slide text' ) ),
                        Field::make( 'image', 'background_image', __( 'Background Image' ) ),
                        Field::make('color', 'background_color', __('Background Color')),
                    ) )
            ]);
    }
}