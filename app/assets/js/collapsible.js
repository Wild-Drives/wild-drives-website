(function( $ ) {
    'use strict';
    $(document).ready(function() {
        $('body').addClass('js');
        // Simple and crude filter mechanism
        $('.collapsible__button').on('click', function (e) {
            let toggleValue = 'true'
            $(this).attr('aria-expanded') === 'true' ? toggleValue = 'false' : toggleValue = 'true';
            $(this).attr('aria-expanded', toggleValue)
            $(this).closest('.collapsible').toggleClass('is-open').find('.collapsible__content').toggleClass('is-visible');
        })
    });

  })( jQuery )