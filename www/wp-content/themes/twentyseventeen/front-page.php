<?php get_header(); ?>
<style>
    .error-message {
        color:red;
    }
</style>
<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

        <form class="testForm" style="width:400px; height:400px; border:1px solid black;" data="aa">
            <div class="input-container">
                // поле с проверко на email
                <input type="text" value="" class="email">
                <span class="error-message"></span>
            </div>
            <div class="input-container">
                <input type="text" value="" class="number">
                <span class="error-message"></span>

            </div>
            <div class="input-container">
                <textarea class="required"></textarea>
                <span class="error-message"></span>

            </div>

            <div class="input-container">
                <select class="required">
                    <option value="">All</option>
                    <option value="1">1</option>
                </select>
                <span class="error-message"></span>

            </div>
            <div class="input-container">
                <input class="required" type="file" value="">

                <span class="error-message"></span>

            </div>
            <div class="input-container">
                <input class="required" type="checkbox" value="1">

                <span class="error-message"></span>

            </div>
            <div class="input-container">
                <input class="required" type="radio" name="radio" value="1">
                <input class="required" type="radio" name="radio" value="2">

                <span class="error-message"></span>

            </div>

            <input type="submit" value="submit">
        </form>

        <form class="testForm2" method="post">

            <div class="input-container">
                // поле с классом number (классы определяются в методе setConf)
                //в котором допустимы только цифры
                <input type="text" value="" class="number">
                <span class="error-message"></span>
            </div>

            <div class="input-container">
                // поле с классом require (классы определяются в методе setConf)
                // которое обязательно для заполнения
                <textarea class="required"></textarea>
                <span class="error-message"></span>
            </div>

            <div class="input-container">
                // поле с проверко на email
                <input type="text" value="" class="email">
                <span class="error-message"></span>
            </div>

            <input type="submit" value="submit">
        </form>

	</main><!-- #main -->
</div><!-- #primary -->
<script src="<?php bloginfo("template_url"); ?>/assets/js/checkForm.js"></script>
<?php get_footer();
