<div class="bg-green">
    <div class="container py-20">
        <div class="flex items-center pb-2 border-b-4 border-gray-200 md:pb-4 gap-x-12">
            <h3 class="text-3xl text-white"><?= $title ?></h3>
        </div>
        <div class="grid gap-8 pb-2 mt-12 md:grid-cols-2 lg:grid-cols-4">
            <?php foreach ($images as $image): ?>
                <div class="">
                    <a class="relative block overflow-hidden aspect-video glightbox" href=<?= get_attachment($image); ?>">
                        <img class="absolute inset-0 object-cover w-full h-full transition-transform hover:scale-125" src=<?= get_attachment($image); ?>" />
                    </a>
                    <?php if($caption = wp_get_attachment_caption($image)): ?>
                        <p class="mt-2 text-base text-white"><?= $caption ?></p>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>