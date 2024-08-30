<div class="col-span-2 space-y-12">
    <div>
        <h3 class="text-2xl text-green border-green">Categories</h3>
        <ul class="mt-6 divide-y-2 divide-gray-200 border-y-2 border-y-gray-200">
            <?php $terms = get_terms(array(
                'taxonomy' => 'category',
                'hide_empty' => false,
            ));
            ?>
            <li>
                <a class="flex px-0 py-3 transition-all bg-transparent hover:bg-gray-200 flex-center hover:px-2"
                    href="<?= get_post_type_archive_link('news'); ?>">All</a>
            </li>
            <?php foreach ($terms as $term): ?>

                <li>
                    <a class="flex px-0 py-3 transition-all <?= (get_query_var('cat') == $term->term_id ? "bg-green text-white px-2" : "bg-transparent hover:bg-gray-200") ?> flex-center hover:px-2"
                        href="<?= get_term_link($term->term_id) ?>"><?= $term->name ?></a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>