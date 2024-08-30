<div class="container grid grid-cols-1 gap-8 py-20 lg:grid-cols-3">
    <?php foreach($sections as $section): ?>
    <div>
        <h3 class="mb-6 text-3xl text-green red"><?= $section['title']; ?></h3>
        <ul>
            <?php foreach($section['files'] as $key => $file): $item =  get_post($file['file']); ?>
            <li>
                <a target="_blank"
                    class="flex items-center px-4 py-4 space-x-4 transition-colors  hover:text-white <?= ($key % 2 == 0 ? 'bg-gray-50' : 'bg-gray-100') ?> hover:bg-green group "
                    href="<?= get_permalink($item); ?>"> 
                    <span class="flex-grow text-sm md:text-base"><?= get_the_title($item) ?></span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="flex-shrink-0 ml-0 size-5 md:size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </a>
            </li>
            <?php endforeach; ?>
        </ul>
    </div>
    <?php endforeach; ?>
</div>