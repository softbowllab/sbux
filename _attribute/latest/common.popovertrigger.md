---
title:  popover-trigger
date:   2018-12-04
categories: ["latest","common"]
order: 16
---

popover-trigger
===
---

## Description
Component에 표시될 popover가 나타나고 사라지게 할 동작을 지정합니다.

`#2.0.0`

---

`popover 속성이 필수로 사용되어야 합니다.`

---

## Value

### popover-trigger="popoverTrigger"

* popoverTrigger : popover가 나타나고 사라지게 할 동작
* Value Type : string
* Default : hover
* Value List : `click` `hover` `focus`

---
## Support Component

`input` `textarea` `listbox` `select` `checkbox` `radio` `button`

---
## Example
{% highlight html %}
<sbux-input id="inputIdx" name="inputIdx" uitype="text" popover="SBUx popover" popover-trigger="click"></sbux-input>
{% endhighlight %}

---
## Demo
<sbux-input id="inputIdx" name="inputIdx" uitype="text" popover="SBUx popover" popover-trigger="click"></sbux-input>