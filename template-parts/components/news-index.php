<li class="p-6 bg-white shadow-lg">
    <div class="max-w-full prose prose-lg">
        <h2 class="mt-0 mb-0 text-4xl text-green"><?= get_the_title(); ?></h2>
        <span class="text-base"><?= get_the_date('F j, Y'); ?></span>
        <p class=""><?= get_the_excerpt(); ?></p>
        <a href="<?= get_the_permalink(); ?>" class="btn btn-green btn-sm">Read more</a>
    </div>
</li>