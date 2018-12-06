---
title:  tooltip-trigger
date:   2018-12-04
categories: ["latest","common"]
order: 11
---

tooltip-trigger
===
---

## Discription
Component에 표시될 Tooltip이 나타나고 사라지게 할 동작을 지정합니다.

`#2.0.0`

---

`Tooltip 속성이 필수로 사용되어야 합니다.`

---

## Value

### tooltip-trigger="tooltipTrigger"

* tooltipTrigger : Tooltip이 나타나고 사라지게 할 동작
* Value Type : string
* Default : hover
* Value List : `click` `hover` `focus`

---
## Support Component

`input` `textarea` `listbox` `select` `checkbox` `radio` `button`

---
## Example
{% highlight html %}
<sbux-input id="inputIdx" name="inputIdx" uitype="text" tooltip="SBUx Tooltip" tooltip-trigger="click"></sbux-input>
{% endhighlight %}

---
## Demo
<sbux-input id="inputIdx" name="inputIdx" uitype="text" tooltip="SBUx Tooltip" tooltip-trigger="click"></sbux-input>