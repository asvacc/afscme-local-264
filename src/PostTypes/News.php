<?php

namespace Vaccaro\PostTypes;

use PostTypes\PostType;
use PostTypes\Taxonomy;

class News
{
    function __construct()
    {
        $names = [
            'name' => 'news',
            'singular' => 'News',
            'plural' => 'News',
            'slug' => 'news',
        ];

        $show = new PostType($names, [
            'supports' => ['title', 'editor'],
            'has_archive' => true,
            'rewrite' => [
                'with_front' => true
            ]
        ]);
        $show->taxonomy('category');
        $show->icon('dashicons-megaphone');
        $show->register();

    }
}