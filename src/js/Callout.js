(function (factory, globalScope) {

    "use strict";

    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(["jquery"], factory);
    } else {
        // Browser globals
        globalScope.Callout = factory(globalScope.jQuery);
    }
})(function ($) {

    "use strict";

    return function Callout(options, targetNode) {

        var _config = {},
            _preferredLocations = [],
            _allowedLocations = ["left", "top", "right", "bottom",
                                 "left-top", "left-bottom", "top-left", "top-right",
                                "right-top", "right-bottom", "bottom-left", "bottom-right"],
            _domNode, _arrowNode, _contentNode, _attachedNode, _containerNode = "body";

        var init = function () {
            _domNode = $("<div>").addClass("callout " + _config.theme).hide();
            _arrowNode = $("<div>").addClass("arrow " + _config.arrow).appendTo(_domNode);
            _contentNode = $("<div>").appendTo(_domNode);

            _domNode.appendTo(targetNode ? targetNode : $("body"));

            this.setTheme((options && options.theme) ? options.theme : "");
            this.setArrow((options && options.arrow) ? options.arrow : "");
        };

        var getViewPort = function (node) {
            return {
                left: node.position().left - parseInt(node.css("marginLeft")),
                top: node.position().top - parseInt(node.css("marginTop")),
                width: node.width() + parseInt(node.css("marginRight")) + parseInt(node.css("marginLeft")),
                height: node.height() + parseInt(node.css("marginBottom")) + parseInt(node.css("marginTop"))
            };
        };

        var contains = function (array, value) {
            var contains = false;
            $.each(array, function (index, item) {
                contains = contains || item === value;
            });

            return contains;
        };

        var isViewPortWithIn = function (innerViewPort, outerViewPort) {
            return outerViewPort.left <= innerViewPort.left &&
                outerViewPort.top <= innerViewPort.top &&
                (outerViewPort.left + outerViewPort.width) >= (innerViewPort.left + innerViewPort.width) &&
                (outerViewPort.top + outerViewPort.height) >= (innerViewPort.top + innerViewPort.height);
        };

        var getTargetLocations = function (preferredLocations) {
            preferredLocations = (preferredLocations instanceof Array) ? preferredLocations : _preferredLocations;

            var targetLocations = [];
            $.each(preferredLocations, function (index, location) {
                if (contains(_allowedLocations, location)) {
                    targetLocations.push(location);
                }
            });

            $.each(_allowedLocations, function (index, location) {
                if (!contains(preferredLocations, location)) {
                    targetLocations.push(location);
                }
            });

            return targetLocations;
        };

        this.setTheme = function (theme) {
            _domNode.removeClass(_config.theme).addClass(theme);
            _config.theme = theme;
            return this;
        };

        this.setArrow = function (arrow) {

            // remove direction classes from arrow
            _arrowNode.removeClass("left top right bottom align-left align-right align-top align-bottom");

            if (arrow === "top-left") {
                _arrowNode.addClass("top align-left");
            } else if (arrow === "top") {
                _arrowNode.addClass("top");
            } else if (arrow === "top-right") {
                _arrowNode.addClass("top align-right");
            } else if (arrow === "bottom-left") {
                _arrowNode.addClass("bottom align-left");
            } else if (arrow === "bottom") {
                _arrowNode.addClass("bottom");
            } else if (arrow === "bottom-right") {
                _arrowNode.addClass("bottom align-right");
            } else if (arrow === "left-top") {
                _arrowNode.addClass("left align-top");
            } else if (arrow === "left") {
                _arrowNode.addClass("left");
            } else if (arrow === "left-bottom") {
                _arrowNode.addClass("left align-bottom");
            } else if (arrow === "right-top") {
                _arrowNode.addClass("right align-top");
            } else if (arrow === "right") {
                _arrowNode.addClass("right");
            } else if (arrow === "right-bottom") {
                _arrowNode.addClass("right align-bottom");
            }

            _config.arrow = arrow;
            return this;
        };

        this.positionAround = function (viewPort, preferredLocations) {

            var self = this;
            var found = false;
            var arrowHeight = 11;
            var domViewPort = getViewPort(_domNode);
            var targetLocations = getTargetLocations(preferredLocations);

            $.each(targetLocations, function (index, location) {

                if (found) {
                    return true; // do nothing if found
                }

                if (location === "right-top") {
                    _domNode.css({
                        left: viewPort.left + viewPort.width + arrowHeight,
                        top: viewPort.top
                    });
                    self.setArrow("left-top");
                } else if (location === "right") {
                    _domNode.css({
                        left: viewPort.left + viewPort.width + arrowHeight,
                        top: viewPort.top + (viewPort.height / 2) - (domViewPort.height / 2)
                    });
                    self.setArrow("left");
                } else if (location === "right-bottom") {
                    _domNode.css({
                        left: viewPort.left + viewPort.width + arrowHeight,
                        top: viewPort.top + viewPort.height - domViewPort.height
                    });
                    self.setArrow("left-bottom");
                } else if (location === "left-top") {
                    _domNode.css({
                        left: viewPort.left - domViewPort.width - arrowHeight,
                        top: viewPort.top
                    });
                    self.setArrow("right-top");
                } else if (location === "left") {
                    _domNode.css({
                        left: viewPort.left - domViewPort.width - arrowHeight,
                        top: viewPort.top + (viewPort.height / 2) - (domViewPort.height / 2)
                    });
                    self.setArrow("right");
                } else if (location === "left-bottom") {
                    _domNode.css({
                        left: viewPort.left - domViewPort.width - arrowHeight,
                        top: viewPort.top + viewPort.height - domViewPort.height
                    });
                    self.setArrow("right-bottom");
                } else if (location === "top-left") {
                    _domNode.css({
                        left: viewPort.left,
                        top: viewPort.top - domViewPort.height - arrowHeight
                    });
                    self.setArrow("bottom-left");
                } else if (location === "top") {
                    _domNode.css({
                        left: viewPort.left + (viewPort.width / 2) - (domViewPort.width / 2),
                        top: viewPort.top - domViewPort.height - arrowHeight
                    });
                    self.setArrow("bottom");
                } else if (location === "top-right") {
                    _domNode.css({
                        left: viewPort.left + viewPort.width - domViewPort.width,
                        top: viewPort.top - domViewPort.height - arrowHeight
                    });
                    self.setArrow("bottom-right");
                } else if (location === "bottom-left") {
                    _domNode.css({
                        left: viewPort.left,
                        top: viewPort.top + viewPort.height + arrowHeight
                    });
                    self.setArrow("top-left");
                } else if (location === "bottom") {
                    _domNode.css({
                        left: viewPort.left + (viewPort.width / 2) - (domViewPort.width / 2),
                        top: viewPort.top + viewPort.height + arrowHeight
                    });
                    self.setArrow("top");
                } else if (location === "bottom-right") {
                    _domNode.css({
                        left: viewPort.left + viewPort.width - domViewPort.width,
                        top: viewPort.top + viewPort.height + arrowHeight
                    });
                    self.setArrow("top-right");
                }

                found = isViewPortWithIn(getViewPort(_domNode), getViewPort($(_containerNode)));
            });
            return this;

        };

        this.positionAroundNode = function (node, preferences) {
            this.positionAround(getViewPort($(node)), preferences);
            return this;
        };

        this.getDomNode = function () {
            return _domNode;
        };

        this.getContentNode = function () {
            return _contentNode;
        };

        this.show = function (preferences) {
            _domNode.show();
            if (_attachedNode) {
                this.positionAroundNode($(_attachedNode), preferences);
            }
            return this;
        };

        this.hide = function () {
            _domNode.hide();
            return this;
        };

        this.remove = function () {
            _domNode.remove();
            return this;
        };

        this.attachTo = function (attachedNode) {
            _attachedNode = attachedNode;
            return this;
        };

        this.setContainerNode = function (containerNode) {
            _containerNode = containerNode;
            return this;
        };

        this.setPreferredLocations = function (preferredLocations) {
            if (preferredLocations instanceof Array) {
                _preferredLocations = preferredLocations;
            }
            return this;
        };

        this.setAllowedLocations = function (allowedLocations) {
            if (allowedLocations instanceof Array) {
                _allowedLocations = allowedLocations;
            }
            return this;
        };

        this.appendTo = function (node) {
            _domNode.detach().appendTo(node);
            return this;
        };

        this.prependTo = function (node) {
            _domNode.detach().prependTo(node);
            return this;
        };

        init.call(this);
    };
}, this);