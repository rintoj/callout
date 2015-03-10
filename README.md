* * *

## Class: Callout

This is an implementation of tooltip. The tooltip can render any HTML content within and the arrow's direction can be configured. This module is capable of rearranging the position to a best suited place based on preferred and allowed locations.

### Usage

    var callout = new Callout({
        content: "I'm callout",
        size: {
            width: 150,
            height: 20
        },
        autohide: true
    });

    $(".targetNode").on("click", function () {
        callout.show(this, ["top"]); // show on top if possible
    });

    $("body").on("contextmenu", function(event) {
        callout.show(event);
        event.preventDefault();
    });

### Resources

    <link rel="stylesheet" href="css/callout.css">
    <script src="js/src/Callout.js"></script>

### Dependency

    <script src="js/lib/jquery-2.1.1.js"></script>

* * *

API
---

## Constructor: new Callout(options)

**Options**

**content**: `String`, Specify content for the callout within this member.

**theme**: `String`, Theme. Valid values are 'dark', 'light', 'default'. Default value is 'default'

**size**: `Object`, Expect an object with 'width' and 'height'. Eg: {width: 25, height: 25}

**autohide**: `Booean`, If set to true callout will be made hidden when focus is lost; default value is true.

**container**: `String | Node`, If specified, callout will try to position itself within the specified dom node; default value is body

**preferredLocations**: `Array`, The preferred locations of callout. This must be a subset of allowed location. Any other value will be
ignored.

**allowedLocations**: `Array`, Locations that are allowed for the callout. Valid values are "top", "top-left", "top-right", "right", "right-top", "right-bottom", "bottom", "bottom-right", "bottom-left", "left", "left-top", "left-bottom"

## show(target, preferredLocations) 

Show callout and position it around a view port or a node. All the valid positions from the preferred
locations and the reset of the positions from the allowed positions will be iterated until a position is
found that places callout's viewport within the container's view port without overflowing. If no suitable
position the callout is place within the target node.

**Parameters**

**target**: `Node | jQuery.Event`, (Mandatory) Dom node or an instance of jQuery.Event

**preferredLocations**: `Array`, (optional) Array of prefered locations;

**Returns**: `Callout`, Returns 'this' to enable method chaining

## hide() 

Hide callout.

**Returns**: `Callout`, Returns 'this' to enable method chaining.

## remove() 

Remove callout from DOM

**Returns**: `Callout`, Returns 'this' to enable method chaining

## getDomNode() 

Return the root node of callout. To avoid unexpected behaviour do NOT manipulate this node

**Returns**: `Object`, The node object

## getContentNode() 

Get content node. Attach your content into this node.

**Returns**: `Object`, Content node

**Example**:
```js
callout.getContentNode().html("This is a tooltip"); // setting text
callout.getContentNode().append(bannerNode); // setting inner node
```

## setContent(content) 

Set content of the callout.

**Parameters**

**content**: `String`, The content as string

**Returns**: `Callout`, Returns 'this' to enable method chaining

## getArrow() 

Get current direction of arrow

**Returns**: `String`, Returns direction of arrow

## setArrow(direction) 

Set direction of arrow

**Parameters**

**direction**: `String`, All possible values for 'allowedLocations' are valid here

**Returns**: `Callout`, Returns 'this' to enable method chaining

## getContainer() 

Get container

**Returns**: `Node | String`, Returns 'container'

## setContainer(container) 

Container node for the callout. The view port of the callout will be
always calculated to be with in container's view port.

**Parameters**

**container**: `Object`, The container node

**Returns**: `Callout`, Returns 'this' to enable method chaining

## getAutoHide() 

Check if auto hide is on or off

**Returns**: `Boolean`, Returns 'true' if auto hide is on

## setAutoHide(autohideOn) 

Turn on/off auto hide. Auto hide feature will hide the callout
when focus is removed

**Parameters**

**autohideOn**: `Boolean`, True to turn on auto hide.

**Returns**: `Callout`, Returns 'this' to enable method chaining

## getPreferredLocations() 

Get preferred locations.

**Returns**: `Array`, Array of locations that are preferred

## setPreferredLocations(preferredLocations) 

Set preferred locations for the callout. Eg. ["right"] will place
callout on the right side of the attached node with left arrow.
However this location will be ignored if the calculated view port
is outside containerNode's view port.

**Parameters**

**preferredLocations**: `Array`, Array of preferred locations

**Returns**: `Callout`, Returns 'this' to enable method chaining

## getAllowedLocations() 

Get allowed locations.

**Returns**: `Array`, Array of locations that are allowed

## setAllowedLocations(allowedLocations) 

Set the allowed locations for the callout. This is the final list of locations allowed for
callout. Any value outside this list, if used in preferred locations, will be ignored.

**Parameters**

**allowedLocations**: `Array`, Array of allowed locations

**Returns**: `Callout`, Returns 'this' to enable method chaining

## getTheme() 

Get theme.

**Returns**: `String`, Theme.

## setTheme(theme) 

Set theme. Valid values are 'dark', 'light', 'normal'

**Parameters**

**theme**: `String`, Valid values are 'dark', 'light', 'normal'

**Returns**: `Callout`, Returns 'this' to enable method chaining

## getSize() 

Get size of the callout.

**Returns**: `Object`, An object in the format {width: Number, height: Number}.

## setSize(width, height) 

Set size of the callout

**Parameters**

**width**: `Number`, Width in pixels

**height**: `Number`, height in pixels

**Returns**: `Callout`, Returns 'this' to enable method chaining



* * *







