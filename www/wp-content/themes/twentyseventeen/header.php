<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */
use classes\Menu;

function my_autoloader($class) {
    $classPath = str_replace('\\', '/', $class);
    $dir = $_SERVER['DOCUMENT_ROOT'] . '/wp-content/themes/twentyseventeen/' . $classPath . '.php';;
    if (file_exists($dir)) {
        include_once $dir;
    }
}

spl_autoload_register('my_autoloader');
//error_reporting(E_ALL);
//ini_set("display_errors","On");

$menu = Menu::getInstance();
$categories = $menu->getCategoryTree();


?>
<!DOCTYPE html>
<html>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="<?=get_template_directory_uri()?>/assets/js/jquery.js?v=11"></script>
<?php wp_head(); ?>

    <link rel="stylesheet" type="text/css" href="<?php bloginfo("template_url"); ?>/assets/css/custom.css">
</head>

<body>
	<header>
        <div class="top-menu">
            <ul>
                <? foreach ($categories as $category) { ?>
                    <li data-id="<?=$category['id']?>"><a href="<?=$category['url']?>"><?=$category['name']?></a></li>
                <? } ?>
            </ul>
        </div>
        <div class="top-sub-menu">
            <? foreach ($categories as $category) :?>
                <? //if ($category['id'] == 3) continue; ?>
                <? if ($category['children']) : ?>
                    <div class="sub-menu-item" data-parent="<?=$category['id']?>" style="display:none;">
                        <? foreach ($category['children'] as $key => $children) : ?>
                            <div class="item">
                                <a href="<?=$children['url']?>"><?=$key + 1 . '.' . $children['name']?></a>
                            </div>
                        <? endforeach; ?>
                    </div>
                <? endif; ?>
            <? endforeach; ?>
        </div>

	</header><!-- #masthead -->

	<div class="main-container">
		<div class="site-content">
