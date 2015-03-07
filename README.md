* * *

## Class: Callout


### Callout.setTheme(theme) 

Set theme. Valid values are 'dark', 'light', 'normal'

**Parameters**

**theme**: `String`, Valid values are 'dark', 'light', 'normal'

**Returns**: `Callout`, Returns 'this' to enable method chaining

### Callout.setSize(width, height) 

Set size of the callout

**Parameters**

**width**: `Number`, Width in pixels

**height**: `Number`, height in pixels

**Returns**: `Callout`, Returns 'this' to enable method chaining

### Callout.setArrow(direction) 

Set arrow's direction

**Parameters**

**direction**: `String`, Allowed directions are:
                                        top,
                                        right,
                                        bottom,
                                        left,
                                        top-left,
                                        top-right,
                                        bottom-left,
                                        bottom-right,
                                        right-top,
                                        right-left,
                                        left-top,
                                        left-bottom
                                        Arrow will be removed if no value
                                        or invalid value is given

**Returns**: `Callout`, Returns 'this' to enable method chaining

### Callout.show(target, preferredLocations) 

Show call out and position it around a view port or a node. All the positions from the preferred locations
and the reset of the positions from the allowed positions will be iterated until a position is found that
places callout's viewport within the container's view port without overflowing. If no suitable position
is found the last position is taken.

**Parameters**

**target**: `Object`, A dom node or an instance of jQuery.Event

**preferredLocations**: `Array`, (optional) Array of prefered locations; Valid values are:
                                    top, right, bottom, left.
                                    Following values are allowed only if target is a dom node:
                                    top-left,
                                    top-right,
                                    bottom-left,
                                    bottom-right,
                                    right-top,
                                    right-left,
                                    left-top,
                                    left-bottom

**Returns**: `Callout`, Returns 'this' to enable method chaining

### Callout.hide() 

Hide callout.

**Returns**: `Callout`, Returns 'this' to enable method chaining.

### Callout.remove() 

Remove callout from DOM

**Returns**: `Callout`, Returns 'this' to enable method chaining

### Callout.getDomNode() 

Return the root node of callout. To avoid unexpected behaviour do NOT manipulate this node

**Returns**: `Object`, The node object

### Callout.getContentNode() 

Get content node. Attach your content into this node.

**Returns**: `Object`, Content node

**Example**:
```js
callout.getContentNode().html("This is a tooltip");
callout.getContentNode().append(bannerNode);
```

### Callout.setContainer(container) 

Container node for the callout. The view port of the callout will be
always calculated to be with in container's view port.

**Parameters**

**container**: `Object`, The container node

**Returns**: `Callout`, Returns 'this' to enable method chaining

### Callout.setAutoHide(autohideOn) 

Turn on/off auto hide. Auto hide feature will hide the callout
when focus is removed

**Parameters**

**autohideOn**: `Boolean`, True to turn on auto hide.

**Returns**: `Callout`, Returns 'this' to enable method chaining

### Callout.setPreferredLocations(preferredLocations) 

Set preferred locations for the callout. Eg. ["right"] will place
callout on the right side of the attached node with left arrow.
However this location will be ignored if the calculated view port
is outside containerNode's view port.

**Parameters**

**preferredLocations**: `Array`, Array of preferred locations

**Returns**: `Callout`, Returns 'this' to enable method chaining

### Callout.setAllowedLocations(allowedLocations) 

Set the allowed locations for the callout. This is the final list of
locations allowed for callout. Any value outside this list used preferred
location will be ignored.

**Parameters**

**allowedLocations**: `Array`, Array of allowed locations

**Returns**: `Callout`, Returns 'this' to enable method chaining



* * *









