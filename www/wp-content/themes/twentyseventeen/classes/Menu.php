<?php
namespace classes;
/**
 * Created by PhpStorm.
 * User: v
 * Date: 15.7.17
 * Time: 12.28
 */
class Menu
{
    public $menu = [];
    private static $_instance = null;

    static public function getInstance() {
        if(is_null(self::$_instance))
        {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    private function __construct() {}
    /**
     * Возвращаю дерево всех категорий
     */
    public function getCategoryTree () {
        if ($this->menu) {
            return $this->menu;
        } else {
            $categories = get_categories(array(
                'orderby' => 'name',
                'order' => 'ASC',
                'hierarchical' => true
            ));

            if ($categories) {
                foreach ($categories as $category) {
                    if (!$category->category_parent) {
                        $this->menu[$category->term_id] = $this->getCategoryArray($category);
                    } else {
                        $this->menu[$category->category_parent]['children'][] = $this->getCategoryArray($category);
                    }
                }
            }

            return $this->menu;
        }
    }

    /**
     * Формирует нужный массив категории
     * @param $category
     * @return array
     */
    private function getCategoryArray($category) {
        return [
            'id' => $category->term_id,
            'url' => get_category_link($category->term_id),
            'name' => $category->name,
            'children' => []
        ];
    }
}