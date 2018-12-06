---
title:  tooltip-html
date:   2018-12-04
categories: ["latest","common"]
order: 12
---

tooltip-html
===
---

## Discription
Component에 표시될 Tooltip의 내용에 HTML Tag 사용 여부를 지정합니다.

`#2.0.0`

---

`Tooltip 속성이 필수로 사용되어야 합니다.`

`html 구문을 입력할 때 작은 따움표와 큰 따움표 표시에 주의하시기 바랍니다.`

`tooltip 에 대한 구문을 DB 에서 받아올 시 XSS(크로스 사이트 스크립트)에 영향을 받을 수 있습니다.`
`반드시 변환하여 처리하시기 바랍니다.`

---

## Value

### tooltip-html="tooltipHTML"

* tooltipHTML : Tooltip 내용 HTML Tag 사용여부
* Value Type : boolean
* Default : false
* Value List : `true` `false`

---
## Support Component

`input` `textarea` `listbox` `select` `checkbox` `radio` `button`

---
## Example
{% highlight html %}
<sbux-input id="inputIdx" name="inputIdx" uitype="text" tooltip="SBUx <font color='red'>Tooltip</font>" tooltip-html="true"></sbux-input>
{% endhighlight %}

---
## Demo
<sbux-input id="inputIdx" name="inputIdx" uitype="text" tooltip="SBUx <font color='red'>Tooltip</font>" tooltip-html="true"></sbux-input>