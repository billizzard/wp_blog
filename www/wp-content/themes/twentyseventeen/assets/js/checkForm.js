/**
 * Created by v on 15.7.17.
 */
// Нужно для браузеров не поддерживающих .closest
(function(e){
    e.closest = e.closest || function(css){
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        }
})(Element.prototype);

// Конструктор класса
function CheckForm(formClass) {
    this.forms = document.querySelectorAll('.' + formClass);
    this.hasError = false;
    this.setConf();
    if (this.forms.length > 0) {
        this.addEvents();
    }
}
// Задает сообщения и классы
CheckForm.prototype.setConf = function() {
    this.conf = {
        classes: {
            container: '.input-container', // класс обертки поля
            error: '.error-message', // класс блока куда буду выводить сообщения об ошибке
            required: '.required', // класс для обязательных полей
            email: '.email', // класс для полей с email
            number: '.number' // класс для числовых полей
        },

        // сообщения об ошибках
        messages: {
            required: 'Поле обязательно для заполнения',
            number: 'Поле может содержать только цифры',
            email: 'Некоректный email'
        }
    }
};
// вешаю событие на отправку
CheckForm.prototype.addEvents = function() {
    var that = this;
    this.forms.forEach(function(item) {
        item.addEventListener('submit', function(e) {
            that.form = item; // если на странице несколько форм с одинаковым классом
            that.clearErrors(); // очищаю поля с ошибками
            that.checkFields(); // проверя на корректность поля
            if (that.hasError) e.preventDefault();
        });
    });
};
// Проверка полей
CheckForm.prototype.checkFields = function() {
     this.checkRequired();
     this.checkEmail();
     this.checkNumber();
};
// Проверка полей на обязательность
CheckForm.prototype.checkRequired = function() {
    var that = this;
    this.form.querySelectorAll(this.conf.classes.required).forEach(function(item) {

        if (item.nodeName === 'SELECT') {
            if (!item.options[item.selectedIndex].value.trim()) that.showError(item, that.conf.messages.required);
        }
        else if (item.type === 'checkbox') {
            if (!item.checked) that.showError(item, that.conf.messages.required);
        }
        else if (item.type === 'radio') {
            if (item.name) {
                var checked = false;
                that.form.querySelectorAll('[name="' + item.name + '"]').forEach(function(radio) {
                    if (radio.checked) checked = true;
                });
                if (!checked) that.showError(item, that.conf.messages.required);
            }
        }
        else {
            if (!item.value.trim()) {
                that.showError(item, that.conf.messages.required);
            }
        }
    });
};
// Проверка полей на email
CheckForm.prototype.checkEmail = function() {
    var that = this;
    this.form.querySelectorAll(this.conf.classes.email).forEach(function(item) {
        if (item.value) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(item.value.trim())) that.showError(item, that.conf.messages.email);
        }
    });
};
// Проверка числовых полей
CheckForm.prototype.checkNumber = function() {
    var that = this;
    this.form.querySelectorAll(this.conf.classes.number).forEach(function(item) {
        if (item.value) {
            if (!(!isNaN(parseFloat(item.value)) && isFinite(item.value))) {
                that.showError(item, that.conf.messages.number);
            }
        }
    });
};
// метод для показа ошибки
CheckForm.prototype.showError = function(el, message) {
    el.closest(this.conf.classes.container).querySelector(this.conf.classes.error).innerHTML = message;
    this.hasError = true;
};
// метод для очистки ошибок
CheckForm.prototype.clearErrors = function() {
    this.form.querySelectorAll(this.conf.classes.error).forEach(function(item) {
        item.innerHTML = '';
    });
};

function MyForm(formClass) {
    CheckForm.apply(this, arguments);
}


MyForm.prototype = Object.create(CheckForm.prototype);
MyForm.prototype.constructor = MyForm;

MyForm.prototype.setConf = function () {
    CheckForm.prototype.setConf.apply(this, arguments);
    this.conf.messages.required = 'bbb';
};

//MyForm.prototype.conf.messages.required = 'sss';

var checkForm = new MyForm('testForm');
var checkForm2 = new MyForm('testForm2');

//checkForm.conf.messages.required = 'aaa';
checkForm.setConf = function() {
    CheckForm.prototype.setConf.apply(this, arguments);
    this.conf.messages.required = '4444';
};


