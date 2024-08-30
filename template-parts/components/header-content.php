<div class="container relative z-[1] flex flex-col items-center justify-center flex-grow text-center text-white">
    <?php if (is_front_page()): ?>
        <h1 class="-mt-12 text-4xl font-bold sm:text-5xl lg:text-6xl ">AFSCME Local 264</h1>
        <p class="max-w-screen-sm text-lg sm:text-xl lg:text-2xl mt-7">Representing: City of Buffalo Blue Collar
            Employees · Buffalo
            Municipal Housing Authority Employees –
            Blue Collar, White Collar and Managers · Board of Education – Food Service Workers, Cook Managers
            and Service Center Employees
        </p>
    <?php elseif (is_category()): ?>
        <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl -mt-14"><?= single_term_title(); ?></h1>
    <?php elseif (is_archive()): ?>
        <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl -mt-14">News & Announcements</h1>
    <?php elseif (is_singular('news')): ?>
        <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl -mt-14"><?= get_the_title(); ?></h1>
        <a href="<?= get_post_type_archive_link('news'); ?>"
            class="flex items-center mt-2 space-x-1 text-lg hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <span>Back to all news & announcements</span>
        </a>
    <?php elseif(is_404()): ?>
        <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl -mt-14">Page Not Found</h1>
    <?php else: ?>
        <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl -mt-14"><?= get_the_title(); ?></h1>
    <?php endif; ?>
</div>