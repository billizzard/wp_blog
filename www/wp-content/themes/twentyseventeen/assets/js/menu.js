/**
 * Created by v on 15.7.17.
 */
function Menu() {
    var timeoutId = 0;

    var init = function() {
        addEvents();
    };

    var addEvents = function() {
        $('.top-menu li').on('mouseenter', function() {
            showSubmenu($(this).data('id'));
        });

        $('.sub-menu-item').on('mouseenter', function() {
            if (timeoutId) clearTimeout(timeoutId);
        });

        $('.top-menu li, .sub-menu-item').on('mouseleave', function() {
            var id = $(this).data('id') ? $(this).data('id') : $(this).data('parent');
            hideSubmenu(id);
        });
    };

    var showSubmenu = function(id) {
        $('.sub-menu-item[data-parent=' + id + ']').stop(true, true).fadeIn(300);
    };

    var hideSubmenu = function(id) {
        var d = "$('.sub-menu-item[data-parent=" + id + "]').stop(true, true).fadeOut(300)";
        timeoutId = setTimeout(d, 200);
    };

    init();
}

function CategoriesMenu() {
    var init = function() {
        addEvents();
    };

    var addEvents = function() {
        $('.category-item .category-name').on('click', function() {
            showPosts($(this));
        });
    };

    var showPosts = function(obj) {
        var postsContainer = obj.closest('.category-item').find('.post-items');
        if (postsContainer.hasClass('open')) {
            postsContainer.removeClass('open');
            postsContainer.slideUp();
        } else {
            postsContainer.addClass('open');
            postsContainer.slideDown();
        }
    };

    init();
}

// function Animal() {
//     this.name = 'name1';
//     this.speed = 1;
//
// }
//
// Animal.prototype.run = function() {
//     console.log('');
// };
//
// function Rabbit(name) {
//     this.name = name;
//     this.speed = 2;
// }
//
// var animal = new Animal();
// animal.run();
// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;
//
// var rabbit = new Rabbit();

//console.log(rabbit.run());

var menu = Menu();
var categoryMenu = CategoriesMenu();