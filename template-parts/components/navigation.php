<nav x-data="{menu_open: false}" @resize.window.debounce="if (window.innerWidth > 1023) { menu_open = false }" x-init="$watch('menu_open', value => $dispatch('menu-toggled', value))" class="relative">
    <button class="relative z-30 block lg:hidden"  @click="menu_open = !menu_open">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-10" x-show="!menu_open">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-10" x-show="menu_open">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </button>

    <?php wp_nav_menu([
        'walker' => new Vaccaro\Walkers\Main_Menu_Walker(),
        'theme_location' => 'main-menu',
        'container' => 'ul',
        'menu_class' => 'hidden lg:flex h-full justify-center bg-transparent',
    ]); ?>

    <?php wp_nav_menu([
        'walker' => new Vaccaro\Walkers\Mobile_Menu_Walker(),
        'theme_location' => 'main-menu',
        'container' => 'ul',
        'items_wrap' => '<ul id="%1$s" x-cloak 
							x-transition:enter="transition ease-out duration-300"
							x-transition:enter-start="translate-x-full"
							x-transition:enter-end="translate-x-0"
							x-transition:leave="transition ease-in duration-300"
							x-transition:leave-start="translate-x-0"
							x-transition:leave-end="translate-x-full" 
							x-show="menu_open"
                            class="%2$s">%3$s</ul>',
        'menu_class' => 'fixed overflow-y-auto lg:hidden z-20 top-0 pt-20 flex h-full w-[20rem] flex-col items-stretch right-0 justify-start transition-transform bg-green-dark ',
    ]); ?>

</nav>