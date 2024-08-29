<?php if (get_theme_option("site_alerts_enabled") && !empty(get_theme_option("site_alerts_text"))): ?>
    <div class="bg-[#ff3334] py-4 text-white px-4">
        <div class="container">
            <?= get_theme_option("site_alerts_text"); ?>
        </div>
    </div>
<?php endif; ?>