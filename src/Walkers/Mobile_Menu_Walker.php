<?php

namespace Vaccaro\Walkers;

class Mobile_Menu_Walker extends \Walker_Nav_Menu
{

	public function start_lvl(&$output, $depth = 0, $args = null)
	{
		if (isset($args->item_spacing) && 'discard' === $args->item_spacing) {
			$t = '';
			$n = '';
		} else {
			$t = "\t";
			$n = "\n";
		}
		$indent = str_repeat($t, $depth);

		// Default class.
		$classes = array('sub-menu', 'w-full');

		$class_names = implode(' ', apply_filters('nav_menu_submenu_css_class', $classes, $args, $depth));

		$atts = array();
		$atts['class'] = !empty($class_names) ? $class_names : '';
		$atts['x-show'] = 'open';

		$atts = apply_filters('nav_menu_submenu_attributes', $atts, $args, $depth);
		$attributes = $this->build_atts($atts);

		$output .= "{$n}{$indent}<ul{$attributes}>{$n}";
	}

	/**
	 * Ends the list of after the elements are added.
	 *
	 * @since 3.0.0
	 *
	 * @see Walker::end_lvl()
	 *
	 * @param string   $output Used to append additional content (passed by reference).
	 * @param int      $depth  Depth of menu item. Used for padding.
	 * @param stdClass $args   An object of wp_nav_menu() arguments.
	 */


	public function start_el(&$output, $data_object, $depth = 0, $args = null, $current_object_id = 0)
	{
		// Restores the more descriptive, specific name for use within this method.
		$menu_item = $data_object;

		if (isset($args->item_spacing) && 'discard' === $args->item_spacing) {
			$t = '';
			$n = '';
		} else {
			$t = "\t";
			$n = "\n";
		}
		$indent = ($depth) ? str_repeat($t, $depth) : '';

		$classes = empty($menu_item->classes) ? array() : (array) $menu_item->classes;
		$classes[] = 'menu-item-' . $menu_item->ID;
		$classes[] = 'relative transition-colors hover:bg-green-light bg-green-dark';

		$args = apply_filters('nav_menu_item_args', $args, $menu_item, $depth);

		$class_names = implode(' ', apply_filters('nav_menu_css_class', array_filter($classes), $menu_item, $args, $depth));

		$id = apply_filters('nav_menu_item_id', 'menu-item-' . $menu_item->ID, $menu_item, $args, $depth);

		$li_atts = array();
		$li_atts['id'] = !empty($id) ? $id : '';
		$li_atts['class'] = !empty($class_names) ? $class_names : '';
		if (isset($args->walker->has_children) && $args->walker->has_children) {
			$li_atts['x-data'] = "{open: false}";
		}

		$li_atts = apply_filters('nav_menu_item_attributes', $li_atts, $menu_item, $args, $depth);
		$li_attributes = $this->build_atts($li_atts);


		$output .= $indent . '<li' . $li_attributes . '>';

		$atts = array();
		$atts['title'] = !empty($menu_item->attr_title) ? $menu_item->attr_title : '';
		$atts['target'] = !empty($menu_item->target) ? $menu_item->target : '';
		if ('_blank' === $menu_item->target && empty($menu_item->xfn)) {
			$atts['rel'] = 'noopener';
		} else {
			$atts['rel'] = $menu_item->xfn;
		}

		if (!empty($menu_item->url)) {
			if (get_privacy_policy_url() === $menu_item->url) {
				$atts['rel'] = empty($atts['rel']) ? 'privacy-policy' : $atts['rel'] . ' privacy-policy';
			}

			$atts['href'] = $menu_item->url;
		} else {
			$atts['href'] = '';
		}

		$atts['aria-current'] = $menu_item->current ? 'page' : '';
		$atts['class'] = 'flex items-center justify-between px-4 py-4';

		$atts = apply_filters('nav_menu_link_attributes', $atts, $menu_item, $args, $depth);
		$attributes = $this->build_atts($atts);

		$title = apply_filters('the_title', $menu_item->title, $menu_item->ID);
		$title = apply_filters('nav_menu_item_title', $title, $menu_item, $args, $depth);

		$item_output = $args->before;
		$item_output .= '<a' . $attributes . '>';
		$item_output .= $args->link_before . $title . $args->link_after;

		if (isset($args->walker->has_children) && $args->walker->has_children) {
			$item_output .= '<button :class="open ? \'rotate-90\' : \'\'" class="block transition-transform transform lg:hidden" @click.prevent="open = !open">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
					</svg>
			</button>';
		}

		$item_output .= '</a>';
		$item_output .= $args->after;

		$output .= apply_filters('walker_nav_menu_start_el', $item_output, $menu_item, $depth, $args);
	}

	/**
	 * Ends the element output, if needed.
	 *
	 * @since 3.0.0
	 * @since 5.9.0 Renamed `$item` to `$data_object` to match parent class for PHP 8 named parameter support.
	 *
	 * @see Walker::end_el()
	 *
	 * @param string   $output      Used to append additional content (passed by reference).
	 * @param WP_Post  $data_object Menu item data object. Not used.
	 * @param int      $depth       Depth of page. Not Used.
	 * @param stdClass $args        An object of wp_nav_menu() arguments.
	 */
	public function end_el(&$output, $data_object, $depth = 0, $args = null)
	{
		if (isset($args->item_spacing) && 'discard' === $args->item_spacing) {
			$t = '';
			$n = '';
		} else {
			$t = "\t";
			$n = "\n";
		}
		$output .= "</li>{$n}";
	}

}
