
var addEvent = function (el, type, fn, capture) {
    if (window.addEventListener) {
        if (type === "mousewheel" && document.mozFullScreen !== undefined) {
            type = "DOMMouseScroll";
        }
        el.addEventListener(type, function (event) {
            fn(_eventCompat(event));
        }, capture || false);
    } else if (window.attachEvent) {
        el.attachEvent("on" + type, function (event) {
            event = event || window.event;
            fn(_eventCompat(event));
        });
    }
}

function _eventCompat (event) {
    var type = event.type;
    if (type == 'DOMMouseScroll' || type == 'mousewheel') {
        event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
    }
    if (event.srcElement && !event.target) {
        event.target = event.srcElement;
    }
    if (!event.preventDefault && event.returnValue !== undefined) {
        event.preventDefault = function () {
            event.returnValue = false;
        };
    }

    return event;
};
export default addEvent;