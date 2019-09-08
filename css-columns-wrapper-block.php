<?php
/**
 * Plugin Name: CSS Columns Gutenberg Block
 * Description: A WordPress plugin that adds a Gutenberg block which allows to wrap other blocks into multiple autoflowing columns (also known as CSS columns). Forked from an example plugin provided by <a href="https://liip.ch">Liip AG</a>
 * Author: certainlyakey, Liip AG
 * Author URI: https://aleksandrbeliaev.work
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: css-columns-wrapper-block
 * Domain Path: /languages/
 *
 * @package css-columns-wrapper-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

add_action( 'enqueue_block_editor_assets', 'css_columns_wrapper_block_enqueue_block_editor_assets' );

function css_columns_wrapper_block_enqueue_block_editor_assets() {

  wp_enqueue_script(
    'css-columns-wrapper-block-js',
    esc_url( plugins_url( '/dist/css-columns-wrapper-block.js', __FILE__ ) ),
    array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
    '1.0.0',
    true // Enqueue the script in the footer.
  );

}
