require(['gitbook', 'jquery'], function(gitbook, $) {
    var opts;

    gitbook.events.bind('start', function(e, config) {
        opts = config['element-display-none'].elements;
    });

    gitbook.events.bind('page.change', function() {
        $.map(opts, function(ele) {
            $(ele).style = "display:none;";
        });
    });
});
