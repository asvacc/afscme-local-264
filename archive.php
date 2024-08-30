<?php

get_header();
?>
<section class="py-20">
	<div class="container grid grid-cols-8 gap-20">
		<?php include(THEME_DIR . '/template-parts/components/news-sidebar.php') ; ?>
		<div class="col-span-6">
			<ul class="grid grid-cols-1 gap-8">
				<?php 	
					while ( have_posts() ) :
						the_post();
						include(THEME_DIR . '/template-parts/components/news-index.php') ;
				endwhile;?>
			</ul>
			<?php
				the_posts_pagination(array(
					'mid_size' => 2,
					'prev_text' => __('Back', 'textdomain'),
					'next_text' => __('Next', 'textdomain'),
				));
			?>
		</div>
	</div>
</section>
<?php
get_footer();
