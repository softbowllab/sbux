---
title:  model-name
date:   2018-12-04
categories: ["latest","common"]
order: 4
---

model-name
===
---

## Discription
Component의 name이 중복될 경우 고유 model-name을 지정합니다.

`#2.0.0`

---

## Value

### model-name="compModelName"

* compModelName : Component의 model-name
* Value Type : string
* Default : X

---
## Example
{% highlight html %}
<sbux-input id="inputIdx1" name="inputIdx" uitype="text" model-name="sbuxInput1"></sbux-input>
<sbux-input id="inputIdx2" name="inputIdx" uitype="text" model-name="sbuxInput2"></sbux-input>
{% endhighlight %}

---
## Demo
<sbux-input id="inputIdx1" name="inputIdx" uitype="text" model-name="sbuxInput1"></sbux-input>
<sbux-input id="inputIdx2" name="inputIdx" uitype="text" model-name="sbuxInput2"></sbux-input>