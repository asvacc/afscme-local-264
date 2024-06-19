<?php 

namespace Vaccaro\Walkers;

class Main_Menu_Walker extends \Walker_Nav_Menu {
    function start_el(&$output, $item, $depth=0, $args=[], $id=0) {
		$output .= "<li class='" .  implode(" ", $item->classes) . "'>";
 
        $output .= '<a href="' . $item->url . '">' . $item->title. "</a>";
	}
}