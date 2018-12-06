---
title:  popover-placement
date:   2018-12-04
categories: ["latest","common"]
order: 15
---

popover-placement
===
---

## Description
Component에 표시될 popover의 위치를 지정합니다.

`#2.0.0`

---

`popover 속성이 필수로 사용되어야 합니다.`

---

## Value

### popover-placement="popoverplacement"

* popoverplacement : popover가 나타날 위치
* Value Type : string
* Default : top
* Value List : `top` `bottom` `left` `right`

---
## Support Component

`input` `textarea` `listbox` `select` `checkbox` `radio` `button`

---
## Example
{% highlight html %}
<sbux-input id="inputIdx" name="inputIdx" uitype="text" popover="SBUx popover" popover-placement="bottom"></sbux-input>
{% endhighlight %}

---
## Demo
<sbux-input id="inputIdx" name="inputIdx" uitype="text" popover="SBUx popover" popover-placement="bottom"></sbux-input>