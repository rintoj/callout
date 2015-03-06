
Callout
=======

Callout is an implementation of a tool popup with an arrow giving information about a related node, image or area. This popup can render any HTML content. The arrow's direction can be configured.

#### Version: 
1.0

#### Author: 
rintoj (Rinto Jose)

Usage
-----

    var callout = new Callout();
    callout.attachTo(targetNode);
    callout.show(["right"]);

Api
===

### Constructor
    new Callout()

### appendTo(node) → {Callout}

Append to a target node (uses JQuery.appendTo)

#### Parameters:
**`node`** - `{Object}` Target node

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

### attachTo(attachedNode) → {Callout}
Attach callout to a dom node. From here on callout will be placed around this node.

#### Parameters:

**`attachedNode`** -	`{Object}`	Target node

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

### getContentNode() → {Object}
Get content node. Attach your content into this node.

#### Returns:
**`{Object}`** Returns content node

**Example**

    callout.getContentNode().html("This is a tooltip");
    callout.getContentNode().append(bannerNode);
    
### getDomNode() → {Object}
Return the root node of callout. To avoid unexpected behaviour do NOT manipulate this node

#### Returns:
**`{Object}`** Returns root node

### hide() → {Callout}
Hide callout.

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

### positionAround(viewPort, preferredLocations) → {Callout}
Position around a view port. All the positions from the preferred locations and the reset of the positions from the allowed positions will be iterated until a position is found that places callout's viewport within the container's view port without overflowing. If no suitable position is found the last position is taken.

#### Parameters:
**`viewPort`** - `{Object}` `{left: Number, top: Number, width: Number, height: Number}`

**`preferredLocations`** - `{Array}` Array of strings; Allowed values are

    top
    right
    bottom
    left
    top-left
    top-right
    bottom-left
    bottom-right
    right-top
    right-left
    left-top
    left-bottom

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

### positionAroundNode(node, preferences) → {Callout}
Position around a dom node.

#### Parameters:
**`node`** - `{Object}` A dom node

**`preferences`** - `{Array}` Array of prefered locations

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

#### See:
'positionAround' for allowed values for preferences

### prependTo(node) → {Callout}
Prepend to a target node (uses JQuery.prependTo)

#### Parameters:
**`node`** - `{Object}` Target node

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

### remove() → {Callout}
Remove callout from DOM

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

### setAllowedLocations(allowedLocations) → {Callout}
Set the allowed locations for the callout. This is the final list of locations allowed for callout. Any value outside this list used preferred location will be ignored.

#### Parameters:
**`allowedLocations`** - `{Array}` Array of allowed locations

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

##### See:
'positionAround' for allowed values for allowedLocations

### setArrow(direction) → {Callout}
Set arrow's direction

#### Parameters:
**`direction`** - `{String}` Arrow's direction. Arrow will be removed if no value or invalid value is given. Valid values are:

    top
    right
    bottom
    left
    top-left
    top-right
    bottom-left
    bottom-right
    right-top
    right-left
    left-top
    left-bottom

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

### setClassName(className) → {Callout}
Add additional class name (or more than one name separated by space) can be added to the node.

#### Parameters:
**`className`** - `{String}` One or more css class names separated by sapce

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

### setContainerNode(containerNode) → {Callout}
Container node for the callout. The view port of the callout will be always calculated to be with in containerNode's view port.

#### Parameters:
**`containerNode`** - `{Object}` The container node
		
#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

### setPreferredLocations(preferredLocations) → {Callout}
Set preferred locations for the callout. Eg. ["right"] will place callout on the right side of the attached node with left arrow. However this location will be ignored if the calculated view port is outside containerNode's view port.

#### Parameters:
**`preferredLocations`** - `{Array}` Array of preferred locations

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining

##### See:
'positionAround' for allowed values for preferredLocations

### show(preferences) → {Callout}
Show callout.

#### Parameters:
**`preferences`** - `{Array}` Array of preferred locations

#### Returns:
**`{Callout}`** Returns 'this' to enable method chaining


License
-------

The MIT License (MIT)

Copyright (c) 2015 rintoj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

