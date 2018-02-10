<?
function shapeSpace_include_custom_jquery() {

    //wp_deregister_script('jquery');
    //wp_enqueue_script('jquery', get_template_directory_uri() .'/js/my-custom-script.js', array(), null, true);


}
add_action('wp_enqueue_scripts', 'shapeSpace_include_custom_jquery');