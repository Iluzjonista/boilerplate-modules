import './styles/main.scss'
import './js/header.js'
import '../node_modules/jquery/dist/jquery.min';


$('.count').each(function (_, self) {
    jQuery({
        Counter: 0
    }).animate({
        Counter: $(self).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            $(self).text(Math.ceil(this.Counter));
        }
    });
});