!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="wordpress_nn_smart_tooltip/plugin-assets/",n(n.s=1)}([function(t,e){t.exports=$},function(t,e,n){"use strict";n(2),n(14),n(3),n(18),n(5);var i=s(n(6)),o=s(n(8));function s(t){return t&&t.__esModule?t:{default:t}}var r=new(s(n(9)).default),a=new o.default(r),u=new i.default(a);a.setMainEditor(u)},function(t,e){t.exports="images/comment.svg"},function(t,e,n){"use strict";var i,o,s;
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */o=[n(0),n(4)],void 0===(s="function"==typeof(i=function(t){var e,n=0,i=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(n){var i,o,s;for(s=0;null!=(o=n[s]);s++)try{(i=t._data(o,"events"))&&i.remove&&t(o).triggerHandler("remove")}catch(t){}e(n)}),t.widget=function(e,n,i){var o,s,r,a={},u=e.split(".")[0],l=u+"-"+(e=e.split(".")[1]);return i||(i=n,n=t.Widget),t.isArray(i)&&(i=t.extend.apply(null,[{}].concat(i))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[u]=t[u]||{},o=t[u][e],s=t[u][e]=function(t,e){if(!this._createWidget)return new s(t,e);arguments.length&&this._createWidget(t,e)},t.extend(s,o,{version:i.version,_proto:t.extend({},i),_childConstructors:[]}),(r=new n).options=t.widget.extend({},r.options),t.each(i,function(e,i){t.isFunction(i)?a[e]=function(){function t(){return n.prototype[e].apply(this,arguments)}function o(t){return n.prototype[e].apply(this,t)}return function(){var e,n=this._super,s=this._superApply;return this._super=t,this._superApply=o,e=i.apply(this,arguments),this._super=n,this._superApply=s,e}}():a[e]=i}),s.prototype=t.widget.extend(r,{widgetEventPrefix:o&&r.widgetEventPrefix||e},a,{constructor:s,namespace:u,widgetName:e,widgetFullName:l}),o?(t.each(o._childConstructors,function(e,n){var i=n.prototype;t.widget(i.namespace+"."+i.widgetName,s,n._proto)}),delete o._childConstructors):n._childConstructors.push(s),t.widget.bridge(e,s),s},t.widget.extend=function(e){for(var n,o,s=i.call(arguments,1),r=0,a=s.length;r<a;r++)for(n in s[r])o=s[r][n],s[r].hasOwnProperty(n)&&void 0!==o&&(t.isPlainObject(o)?e[n]=t.isPlainObject(e[n])?t.widget.extend({},e[n],o):t.widget.extend({},o):e[n]=o);return e},t.widget.bridge=function(e,n){var o=n.prototype.widgetFullName||e;t.fn[e]=function(s){var r="string"==typeof s,a=i.call(arguments,1),u=this;return r?this.length||"instance"!==s?this.each(function(){var n,i=t.data(this,o);return"instance"===s?(u=i,!1):i?t.isFunction(i[s])&&"_"!==s.charAt(0)?(n=i[s].apply(i,a))!==i&&void 0!==n?(u=n&&n.jquery?u.pushStack(n.get()):n,!1):void 0:t.error("no such method '"+s+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+s+"'")}):u=void 0:(a.length&&(s=t.widget.extend.apply(null,[s].concat(a))),this.each(function(){var e=t.data(this,o);e?(e.option(s||{}),e._init&&e._init()):t.data(this,o,new n(s,this))})),u}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,n){e._removeClass(n,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,n){var i,o,s,r=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(r={},i=e.split("."),e=i.shift(),i.length){for(o=r[e]=t.widget.extend({},this.options[e]),s=0;s<i.length-1;s++)o[i[s]]=o[i[s]]||{},o=o[i[s]];if(e=i.pop(),1===arguments.length)return void 0===o[e]?null:o[e];o[e]=n}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];r[e]=n}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var n,i,o;for(n in e)o=this.classesElementLookup[n],e[n]!==this.options.classes[n]&&o&&o.length&&(i=t(o.get()),this._removeClass(o,n),i.addClass(this._classes({element:i,keys:n,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var n=[],i=this;function o(o,s){var r,a;for(a=0;a<o.length;a++)r=i.classesElementLookup[o[a]]||t(),r=e.add?t(t.unique(r.get().concat(e.element.get()))):t(r.not(e.element).get()),i.classesElementLookup[o[a]]=r,n.push(o[a]),s&&e.classes[o[a]]&&n.push(e.classes[o[a]])}return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&o(e.keys.match(/\S+/g)||[],!0),e.extra&&o(e.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(e){var n=this;t.each(n.classesElementLookup,function(i,o){-1!==t.inArray(e.target,o)&&(n.classesElementLookup[i]=t(o.not(e.target).get()))})},_removeClass:function(t,e,n){return this._toggleClass(t,e,n,!1)},_addClass:function(t,e,n){return this._toggleClass(t,e,n,!0)},_toggleClass:function(t,e,n,i){i="boolean"==typeof i?i:n;var o="string"==typeof t||null===t,s={extra:o?e:n,keys:o?t:e,element:o?this.element:t,add:i};return s.element.toggleClass(this._classes(s),i),this},_on:function(e,n,i){var o,s=this;"boolean"!=typeof e&&(i=n,n=e,e=!1),i?(n=o=t(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,o=this.widget()),t.each(i,function(i,r){function a(){if(e||!0!==s.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof r?s[r]:r).apply(s,arguments)}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||t.guid++);var u=i.match(/^([\w:-]*)\s*(.*)$/),l=u[1]+s.eventNamespace,p=u[2];p?o.on(l,p,a):n.on(l,a)})},_off:function(e,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(n).off(n),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var n=this;return setTimeout(function(){return("string"==typeof t?n[t]:t).apply(n,arguments)},e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,n,i){var o,s,r=this.options[e];if(i=i||{},(n=t.Event(n)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),n.target=this.element[0],s=n.originalEvent)for(o in s)o in n||(n[o]=s[o]);return this.element.trigger(n,i),!(t.isFunction(r)&&!1===r.apply(this.element[0],[n].concat(i))||n.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,n){t.Widget.prototype["_"+e]=function(i,o,s){var r;"string"==typeof o&&(o={effect:o});var a=o?!0===o||"number"==typeof o?n:o.effect||n:e;"number"==typeof(o=o||{})&&(o={duration:o}),r=!t.isEmptyObject(o),o.complete=s,o.delay&&i.delay(o.delay),r&&t.effects&&t.effects.effect[a]?i[e](o):a!==e&&i[a]?i[a](o.duration,o.easing,s):i.queue(function(n){t(this)[e](),s&&s.call(i[0]),n()})}}),t.widget})?i.apply(e,o):i)||(t.exports=s)},function(t,e,n){"use strict";var i,o,s;o=[n(0)],void 0===(s="function"==typeof(i=function(t){return t.ui=t.ui||{},t.ui.version="1.12.1"})?i.apply(e,o):i)||(t.exports=s)},function(t,e,n){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(7),r=(i=s)&&i.__esModule?i:{default:i};var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.editor=null,this.tooltipPopup=e,this._addButtonToTinymce(),this._addEvents()}return o(t,[{key:"isHasSelectedText",value:function(){return!this.editor.selection.isCollapsed()}},{key:"addTooltipToSelectedText",value:function(t){this._wrapSelectedText(),this._addIdToSelectedText(t)}},{key:"_addEvents",value:function(){jQuery(".wp-editor-container").on("click",".mce-nn_smart_tooltip",jQuery.proxy(this._tooltipButtonClickEvent,this))}},{key:"_addButtonToTinymce",value:function(){"undefined"!=typeof tinymce&&tinymce.PluginManager.add("nn_smart_tooltip",function(t,e){t.on("init",function(){t.formatter.register("nnst",{inline:"span",classes:"nnst"})}),t.addButton("nn_smart_tooltip",{title:"Add tooltip to text / Exit",classes:"nn_smart_tooltip",image:e+"/images/comment.svg",onPostRender:function(){var e=this;t.on("NodeChange",function(t){e.active("nnst"===t.element.className)})}})})}},{key:"_getTooltipByCursorNode",value:function(t){var e=t.closest(".nnst");return e||null}},{key:"_tooltipButtonClickEvent",value:function(t){if(this.editor=r.default.getActiveEditor(),this.editor)if(this.isHasSelectedText())this.tooltipPopup.showPopup(t.clientX,t.clientY);else{var e=this._getTooltipByCursorNode(this.editor.selection.getNode());e?this.tooltipPopup.showPopup(t.clientX,t.clientY,e.dataset.id):alert("Please, select the text.")}}},{key:"_addIdToSelectedText",value:function(t){this.editor.dom.select(".nnst").forEach(function(e){e.hasAttribute("data-id")||e.setAttribute("data-id",t)})}},{key:"_wrapSelectedText",value:function(){this.editor.formatter.toggle("nnst")}}]),t}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,null,[{key:"getActiveEditor",value:function(){return tinymce.activeEditor}},{key:"getEditorByName",value:function(t){var e=null;return tinymce.editors.forEach(function(n){n.id===t&&(e=n)}),e}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tooltipPopup={container:jQuery("#acf-group_5be945fe0b28d"),isOpened:!1},this.popupEditor=e,this.existingTooltipId=null,this.tooltipPopup.container.length&&(this.tooltipPopup.collapseButton=this.tooltipPopup.container.find(".handlediv"),this.tooltipPopup.header=this.tooltipPopup.container.find("h2"),this.mainEditor=null,this._init(),this._addEvents())}return i(t,[{key:"setMainEditor",value:function(t){this.mainEditor=t}},{key:"showPopup",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.tooltipPopup.isOpened?this._hidePopup():(this._setPopupPosition(t+20,e+20),i?(this._toggleLoader(!0),this.existingTooltipId=i,this.popupEditor.loadTooltipToContent(i).then(function(t){return n._toggleLoader(!1)},function(t){return n._toggleLoader(!1)})):(this.popupEditor.setContent(""),this.existingTooltipId=null),this._showPopup())}},{key:"_showPopup",value:function(){this.tooltipPopup.container.show(),this.tooltipPopup.isOpened=!0}},{key:"_hidePopup",value:function(){this.tooltipPopup.container.hide(),this.tooltipPopup.isOpened=!1}},{key:"_init",value:function(){this.tooltipPopup.collapseButton.remove(),this.tooltipPopup.header.removeClass().addClass("nn_popup_header"),this.tooltipPopup.header.wrap('<div class="nn_popup_header-wrapper"></div>'),this.tooltipPopup.headerWrapper=this.tooltipPopup.container.find(".nn_popup_header-wrapper"),this.tooltipPopup.headerWrapper.append('<div class="nn_popup_button loader js_nn_popup_loader" title="Loading..."></div>').append('<div class="nn_popup_button save js_nn_popup_save dashicons dashicons-yes" title="Save"></div>').append('<div class="nn_popup_button close js_nn_popup_close dashicons dashicons-no" title="Close"></div>'),this.tooltipPopup.closeButton=this.tooltipPopup.container.find(".js_nn_popup_close"),this.tooltipPopup.saveButton=this.tooltipPopup.container.find(".js_nn_popup_save"),this.tooltipPopup.loader=this.tooltipPopup.container.find(".js_nn_popup_loader"),this.tooltipPopup.container.removeClass(),this.tooltipPopup.container.draggable(),this.tooltipPopup.container.hide()}},{key:"_addEvents",value:function(){jQuery(".js_nn_popup_close").on("click",jQuery.proxy(this._popupCloseButtonEvent,this)),jQuery(".js_nn_popup_save").on("click",jQuery.proxy(this._popupSaveButtonEvent,this))}},{key:"_toggleLoader",value:function(t){t?this.tooltipPopup.loader.show():this.tooltipPopup.loader.hide()}},{key:"_popupCloseButtonEvent",value:function(t){this._hidePopup()}},{key:"_popupSaveButtonEvent",value:function(t){var e=this;this.mainEditor&&this.mainEditor.isHasSelectedText()||this.existingTooltipId?(this._toggleLoader(!0),this.existingTooltipId?this.popupEditor.updateContent(this.existingTooltipId).then(function(t){return e._successUpdateTooltip(t)},function(t){return e._failUpdateTooltip(t)}):this.popupEditor.saveContent().then(function(t){return e._successSaveTooltip(t)},function(t){return e._failSaveTooltip(t)})):alert("Please, select the text.")}},{key:"_successSaveTooltip",value:function(t){this.mainEditor.addTooltipToSelectedText(t),this._toggleLoader(!1),this._hidePopup()}},{key:"_failSaveTooltip",value:function(){this._toggleLoader(!1),alert("Failed to save")}},{key:"_successUpdateTooltip",value:function(){this._toggleLoader(!1),this._hidePopup()}},{key:"_failUpdateTooltip",value:function(){this._toggleLoader(!1),alert("Failed to save")}},{key:"_setPopupPosition",value:function(t,e){this.tooltipPopup.container.css({top:e,left:t,right:"auto",bottom:"auto"})}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(10),r=(i=s)&&i.__esModule?i:{default:i};var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tooltipPopup={container:jQuery("#acf-group_5be945fe0b28d")}}return o(t,[{key:"getContent",value:function(){var t=this.tooltipPopup.container.find("iframe");if(t){var e=t.contents().find("body").html();if(e)return e}return null}},{key:"setContent",value:function(t){var e=this.tooltipPopup.container.find("iframe");e&&e.contents().find("body").html(t)}},{key:"saveContent",value:function(){var t=this;return new Promise(function(e,n){var i={tooltip:t.getContent(),action:"save_tooltip",postId:jQuery("#post_ID").val()};r.default.saveTooltip(i).then(function(t){return e(t.insertedId)},function(t){return n(t)})})}},{key:"updateContent",value:function(t){var e=this;return new Promise(function(n,i){var o={tooltip:e.getContent(),action:"update_tooltip",id:t};o.id?r.default.saveTooltip(o).then(function(t){return n(t.insertedId)},function(t){return i(t)}):i()})}},{key:"loadTooltipToContent",value:function(t){var e=this;return new Promise(function(n,i){var o={id:t,action:"get_tooltip"};o.id&&r.default.getTooltip(o).then(function(t){return e._successGetTooltip(n,t)},function(t){return e._failGetTooltip(i,t)})})}},{key:"_successGetTooltip",value:function(t,e){this.setContent(e.data.tooltip),t(e)}},{key:"_failGetTooltip",value:function(t,e){t(e)}}]),t}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n(11),r=(i=s)&&i.__esModule?i:{default:i};var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return o(t,null,[{key:"saveTooltip",value:function(t){return new Promise(function(e,n){return r.default.sendRequest(t).then(function(t){t&&t.success?e(t):n(t)})})}},{key:"getTooltip",value:function(t){return new Promise(function(e,n){return r.default.sendRequest(t).then(function(t){t&&t.success?e(t):n(t)})})}}]),t}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return i(t,null,[{key:"sendRequest",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"post";return new Promise(function(n){return jQuery[e](ajaxurl,t,function(t){return n(t)})})}},{key:"sendFormData",value:function(t){return new Promise(function(e,n){var i=jQuery.ajax({url:gsmaWiki.ajaxurl,type:"POST",data:t,cache:!1,contentType:!1,processData:!1});i.done(function(t){e(t)}),i.fail(function(){n()})})}}]),t}();e.default=o},,,function(t,e){},,,,function(t,e){}]);