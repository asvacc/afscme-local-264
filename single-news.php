<?php

get_header();
?>

<section class="py-20">
    <div class="container grid gap-12 lg:gap-20 md:grid-cols-8">
        <?php include(THEME_DIR . '/template-parts/components/news-sidebar.php'); ?>
        <div class="order-1 md:col-span-6 md:order-2">
            <article class="max-w-full prose prose-xl">
                <h2 class="mb-0 text-6xl text-green"><?= get_the_title(); ?></h2>
                <small class="text-lg"><?= get_the_date('F j, Y'); ?></small>
                <div>
                    <?php
                    while (have_posts()):
                        the_post();
                        the_content();
                    endwhile;
                    ?>
                </div>
            </article>
            <?php if ($categories = get_the_category()): ?>
                <div class="flex items-center justify-start pt-8 mt-8 text-sm border-t-2 border-gray-200 gap-x-4">
                    Categories:
                    <ul class="flex items-center list-none gap-x-2">
                        <?php foreach ($categories as $category): ?>
                            <li><a class="px-2 py-1 text-xs text-white no-underline uppercase rounded-md bg-green"
                                    href="<?= get_term_link($category->term_id) ?>"><?= $category->name ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>

<?php
get_footer();
