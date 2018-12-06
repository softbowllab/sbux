---
title:  wrap-class
date:   2018-12-04
categories: ["latest","common"]
order: 8
---

wrap-class
===
---

## Discription
Component의 최상단 root에 class를 지정합니다.

`#2.0.0`

---

## Value

### wrap-class="compWrapClass"

* compWrapClass : 지정 할 class명
* Value Type : string
* Default : X

---
## Example
{% highlight html %}
<style>
	.customClass{font-weight: bold;}
</style>

<sbux-input id="inputIdx" name="inputIdx" uitype="text" wrap-style="font-weight: bold;"></sbux-input>
{% endhighlight %}

---
## Demo
<sbux-input id="inputIdx" name="inputIdx" uitype="text" wrap-style="font-weight: bold;"></sbux-input>
<style>.customClass{width:100px;}</style>