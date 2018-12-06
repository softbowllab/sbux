---
title:  class
date:   2018-12-04
categories: ["latest","common"]
order: 7
---

class
===
---

## Discription
Component에 class를 지정합니다.

`#2.0.0`

---

## Value

### class="compClass"

* compClass : 지정 할 class명
* Value Type : string
* Default : X

---
## Example
{% highlight html %}
<style>
	.customClass{width:100px;}
</style>

<sbux-input id="inputIdx" name="inputIdx" uitype="text" class="customClass"></sbux-input>
{% endhighlight %}

---
## Demo
<sbux-input id="inputIdx" name="inputIdx" uitype="text" class="customClass"></sbux-input>
<style>.customClass{width:100px;}</style>