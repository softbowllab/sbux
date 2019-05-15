---
title:  2.5 캘린더의 버튼만 사용
date:   2018-12-04
categories: ["latest","adv"]
order: 5
---

2.5 캘린더의 버튼만 사용하기
===

---

### STEP 1. readonly-input 속성 추가
<div>1. 컴포넌트에 readonly-input 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-datepicker id="sbIdx1" name="sbName1" uitype="popup" readonly-input="true"></sbux-datepicker>
{% endhighlight %}

### STEP 2. disabled-input 속성 추가
<div>1. 컴포넌트에 readonly-input 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-datepicker id="sbIdx1" name="sbName1" uitype="popup" disabled-input="true"></sbux-datepicker>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/datepicker.readonlyinput#datepicker" target="_blank">datepicker > readonly-input</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/datepicker.disabledinput#datepicker" target="_blank">datepicker > disabled-input</a><br>
    </div>
</div>