/**
 * @copyright Copyright (c) 2013 2amigOS! Consulting Group LLC
 * @link http://2amigos.us
 * @license http://www.opensource.org/licenses/bsd-license.php New BSD License
 */
if (typeof dosamigos == "undefined" || !dosamigos) {
    var dosamigos = {};
}

dosamigos.gallery = (function($){
    var pub = {
        registerLightBoxHandlers: function(selector, opts) {
            var options = opts || {};
            $(document).off('click.gallery', selector).on('click.gallery', selector, function() {
                var links = $(this).parent().find('a.gallery-item');
                options.index = $(this)[0];
                blueimp.Gallery(links, options);
                return false;
            });
        }
    };
    return pub;
})(jQuery);
/* HTML EXTENDING*/
blueimp.Gallery.prototype.textFactory = function (obj, callback) {
    var $element = $('<div>')
        .addClass('text-content')
        .attr('title', obj.title);
    $.get(obj.href)
        .done(function (result) {
            $element.html(result);
            callback({
                type: 'load',
                target: $element[0]
            });
        })
        .fail(function () {
            callback({
                type: 'error',
                target: $element[0]
            });
        });
    return $element[0];
};