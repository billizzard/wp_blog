<?php
get_header();
$category = get_queried_object();

$menu = \classes\Menu::getInstance();
$categories = $menu->getCategoryTree();
$isParent = $category->category_parent ? false : true;

if ($isParent) {

    foreach($categories[$category->term_id]['children'] as $key => $val) :
        $ids[] = $val['id'];
        $categories[$category->term_id]['children'][$key]['posts'] = get_posts([
            'category' =>  $val['id'],
            'numberposts' => 20,
        ]);
    endforeach;


//    foreach ($posts as $post) {
//        $categoryPosts[$post->ID]
//    }
//    echo "<pre>";
//var_dump($categories);
//die();

} else {
    $posts = get_posts([
        'category' =>  $category->term_id,
        'numberposts' => 20
    ]);
}


//echo "<pre>";
//var_dump($categories);
//die();
?>
    <div class="left-content">
<? if ($isParent) :?>
    <h1><?=$category->name?></h1>

    <? if ($categories[$category->term_id]['children']) : ?>
        <? foreach($categories[$category->term_id]['children'] as $val) :?>
            <div class="category-item">
                <div class="category-name"><?=$val['name']?></div>
                <div class="post-items">

                    <? if ($val['posts']) : ?>

                        <? foreach($val['posts'] as $key => $post) : ?>
                            <div class="post-item">
                                <a href="<?=get_permalink($post->ID);?>"><?= ($key + 1).'.'.$post->post_title?></a>
                            </div>
                        <? endforeach;?>
                    <? endif; ?>

                </div>
            </div>

        <? endforeach; ?>
    <? endif; ?>

<? else : ?>
    <h1><?=$category->name?></h1>

    <div class="category-item">
    <div class="post-items" style="display:block">
        <? if (isset($posts) && $posts) : ?>
            <? foreach ($posts as $key => $post) { ?>
                <div class="post-item">
                    <a href="<?=get_post_permalink($post->ID)?>"><?= ($key + 1).'.'.$post->post_title; ?></a>
                </div>
            <? } ?>
        <? endif; ?>
    </div>
    </div>
<? endif; ?>
    </div>
<div class="right-content"></div>




<?php get_footer();
