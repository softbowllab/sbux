---
title:  popover-title
date:   2018-12-04
categories: ["latest","common"]
order: 14
---

popover-title
===
---

## Discription
Component에 표시될 popover의 Title 문구를 지정합니다.

`#2.0.0`

---

`popover 속성이 필수로 사용되어야 합니다.`

---

## Value

### popover-title="popoverTitleText"

* popoverTitleText : popover의 Title에 나타낼 문구
* Value Type : string
* Default : X

---
## Support Component

`input` `textarea` `listbox` `select` `checkbox` `radio` `button`

---
## Example
{% highlight html %}
<sbux-input id="inputIdx" name="inputIdx" uitype="text" popover="SBUx popover" popover-title="popover Title"></sbux-input>
{% endhighlight %}

---
## Demo
<sbux-input id="inputIdx" name="inputIdx" uitype="text" popover="SBUx popover" popover-title="popover Title"></sbux-input>