<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_parent_css' ) ):
    function chld_thm_cfg_parent_css() {
        wp_enqueue_style( 'chld_thm_cfg_parent', trailingslashit( get_template_directory_uri() ) . 'style.css', array(  ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_parent_css', 10 );

// END ENQUEUE PARENT ACTION

// ADD CUSTOM SCRIPTS
function add_custom_scripts () {

  wp_enqueue_script('demoo-mods-all', get_stylesheet_directory_uri().'/js/demoo-mods-all.js', array('jquery'),filemtime(get_stylesheet_directory() . '/js/demoo-mods-all.js' ));
  wp_enqueue_script('chromefix-scrolljump', get_stylesheet_directory_uri().'/js/chromefix-scrolljump.js', array('jquery'),filemtime(get_stylesheet_directory() . '/js/chromefix-scrolljump.js' ));
  // Load only on stockist pages
  if( is_page( array( 'STOCKIST', 205782 ) ) ) {
    wp_enqueue_script('demoo-mod-stockist', get_stylesheet_directory_uri().'/js/demoo-mod-stockist.js', array('jquery'),filemtime(get_stylesheet_directory() . '/js/demoo-mod-stockist.js' ));
  }
  if( !is_page( 'Splash Page' ) ) {
    wp_enqueue_script('demoo-modal', get_stylesheet_directory_uri().'/js/demoo-modal.js', array('jquery'),filemtime(get_stylesheet_directory() . '/js/demoo-modal.js' ));
  }
}
add_action( 'wp_enqueue_scripts', 'add_custom_scripts');

// OLDER BOOTSTRAP VERSION SUPPORT FOR TABS
add_filter( 'pt-tabs/use_older_bootstrap_layout', '__return_true' );
