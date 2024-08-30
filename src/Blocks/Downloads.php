<?php 

namespace Vaccaro\Blocks;
use Carbon_Fields\Container;
use Carbon_Fields\Field;

class Downloads extends Block
{
    function build()
    {
        $this->block
            ->add_fields([
                Field::make('complex', 'sections', __('Sections'))
                    ->add_fields(array(
                        Field::make('text', 'title', __('Section Title')),
                        Field::make( 'complex', 'files' )
                            ->add_fields( array(
                                Field::make('file', 'file', __('File'))
                            ))
                    ))
            ]);
    }
}