<div <?= !empty($background_color) ? "style='background-color:$background_color;'" : ""; ?> class="bg-green-dark">
    <div class="container mx-auto">
        <div class="relative px-8 py-16">
            <div
                class="container relative flex flex-col items-center justify-center h-full space-y-4 text-xl text-white md:text-3xl">
                <h2 class="mb-4 text-4xl font-bold uppercase md:text-5xl"><?= $title; ?></h2>
                <?= $text; ?>
            </div>
            <?php if ($background_image): ?>
                <img src="<?= get_attachment($background_image); ?>"
                    class="absolute inset-0 z-0 object-cover w-full h-full opacity-20" />
            <?php endif; ?>
        </div>
    </div>
</div>