<div class="order-1 md:col-span-6 md:order-2">
    <?php if (have_posts()): ?>
        <ul class="grid grid-cols-1 gap-8">
            <?php
            while (have_posts()):
                the_post();
                ?>
                <li class="p-6 bg-white shadow-lg">
                    <div class="max-w-full prose prose-lg">
                        <h2 class="mt-0 mb-0 text-4xl text-green"><?= get_the_title(); ?></h2>
                        <span class="text-base"><?= get_the_date('F j, Y'); ?></span>
                        <p class=""><?= get_the_excerpt(); ?></p>
                        <a href="<?= get_the_permalink(); ?>" class="btn btn-green btn-sm">Read more</a>
                    </div>
                </li>
            <?php endwhile; ?>
        </ul>
        <?php
        the_posts_pagination(array(
            'mid_size' => 2,
            'prev_text' => __('Back', 'textdomain'),
            'next_text' => __('Next', 'textdomain'),
        ));
        ?>
    <?php else: ?>
        <h3 class="text-3xl text-left">No news found.</h3>
    <?php endif; ?>
</div>