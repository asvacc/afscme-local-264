<?php

get_header();
?>

<section class="py-20">
	<div class="container flex flex-col space-y-12 text-center">
		<div>
			<?php
			while (have_posts()):
				the_post();
				the_content();
			endwhile;
			?>
		</div>
	</div>
</section>
<?php
get_footer();
