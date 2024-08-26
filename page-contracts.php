<?php
/**
 * Template Name: Contracts Template
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 */
get_header()
    ?>

<section class="py-20">
    <div class="container grid grid-cols-3 gap-8">
        <?php $item = get_post(61); ?>
        <div>
            <h3 class="mb-6 text-3xl text-green">Service Center</h3>
            <ul>
                <li>
                    <a target="_blank"
                        class="flex items-center px-4 py-4 space-x-4 transition-colors hover:text-white bg-gray-50 hover:bg-green group "
                        href="<?= get_permalink($item); ?>">
                        <span class="flex-grow"><?= get_the_title($item) ?></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="ml-0 size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>

                </li>
            </ul>
        </div>
        <div>
            <h3 class="mb-6 text-3xl text-green">Food Service Workers</h3>
            <ul>
                <li>
                    <a target="_blank"
                        class="flex items-center px-4 py-4 space-x-4 transition-colors hover:text-white bg-gray-50 hover:bg-green group "
                        href="<?= get_permalink($item); ?>">
                        <span class="flex-grow"><?= get_the_title($item) ?></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="ml-0 size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>

                </li>
            </ul>
        </div>
        <div>
            <h3 class="mb-6 text-3xl text-green">Cook Managers</h3>
            <ul>
                <li>
                    <a target="_blank"
                        class="flex items-center px-4 py-4 space-x-4 transition-colors hover:text-white bg-gray-50 hover:bg-green group "
                        href="<?= get_permalink($item); ?>">
                        <span class="flex-grow"><?= get_the_title($item) ?></span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="ml-0 size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</section>

<?php
get_footer();