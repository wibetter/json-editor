/**
    scrollToBottom({
        container: window,
        target: '#j_demo',
        triggerDistance: 0,
        callBack: function(){
            // 滚动到底部了
        },
        time: 300
    });

 */
define( ['core', 'jQuery'], function(youYi ) {
    'use strict';
    var scrollToBottom = function( config ) {
        var container = config.container || window;
        var target = config.target;
        var triggerDistance = config.triggerDistance || 0;
        var callBack = config.callBack || $.noop;
        var time = config.time || 300;
        container = $( container );
        target = $( target );
        triggerDistance = triggerDistance || 0;

        // var containerNode = container[0];
        var timer;
        var uuid = '_f35d0b75_5a21_0781_405a_b189f1f946c3';

        function onScrollToBottom() {

            /*var scrollHeight;
            if (containerNode == window) {
                scrollHeight = $(document).height();
            } else {
                scrollHeight = containerNode.scrollHeight;
            }*/
            var scrollTop = container.scrollTop();
            if (scrollTop <= 0) return; // 判断当前是否有滚动

            var scrollPosition = container.height() + scrollTop;
            var bottomPosition = target.height() + target.offset().top;
            if ( ( scrollPosition - bottomPosition ) + triggerDistance > 0 ) {

                // 到达底部
                if ( $.isFunction( callBack ) ) {
                    callBack();
                }
            }
        }

        var stop = function() {
            container.off( 'scroll.' + uuid );
        };

        var start = function() {
            stop();
            container.on( 'scroll.' + uuid, function() {
                clearTimeout( timer );
                timer = setTimeout( function() {
                    onScrollToBottom();
                }, time );
            } );
        };

        return {
            stop: stop,
            start: start
        };
    };
    youYi.scrollToBottom = scrollToBottom;
    return scrollToBottom;
} );
