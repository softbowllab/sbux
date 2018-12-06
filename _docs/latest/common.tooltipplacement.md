---
title:  tooltip-placement
date:   2018-12-04
categories: ["latest","common"]
order: 10
---

tooltip-placement
===
---

## Discription
Component에 표시될 Tooltip의 위치를 지정합니다.

`#2.0.0`

---

`Tooltip 속성이 필수로 사용되어야 합니다.`

---

## Value

### tooltip-placement="tooltipPlacement"

* tooltipPlacement : Tooltip이 나타나는 위치
* Value Type : string
* Default : top
* Value List : `top` `bottom` `left` `right`

---
## Support Component

`input` `textarea` `listbox` `select` `checkbox` `radio` `button`

---
## Example
{% highlight html %}
<sbux-input id="inputIdx" name="inputIdx" uitype="text" tooltip="SBUx Tooltip" tooltip-placement="bottom"></sbux-input>
{% endhighlight %}

---
## Demo
<sbux-input id="inputIdx" name="inputIdx" uitype="text" tooltip="SBUx Tooltip" tooltip-placement="bottom"></sbux-input>