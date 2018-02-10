<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>
<?php if (have_posts()) :
    while (have_posts()) : the_post();
endwhile;
endif;
    ?>
    <div class="left-content">
<h1><?the_title()?></h1>

<div class="post-content">
    <?the_content()?>
</div>
    </div>
<div class="right-content">

</div>
<?php get_footer();
