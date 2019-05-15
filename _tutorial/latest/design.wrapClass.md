---
title:  3.3 입력박스의 너비 조정하기
date:   2018-12-10
categories: ["latest","design"]
order: 3
---

3.3 입력박스의 너비 조정하기
===

---

### STEP 1. 컴포넌트 생성
<div>1. 버튼이 같이 있는 입력박스를 생성합니다. (input/search, datepicker/popup)</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text"></sbux-input>
<sbux-datepicker id="sbIdx1" name="sbName1" uitype="popup"></sbux-datepicker>
{% endhighlight %}

### STEP 2. 속성 추가, 스타일 적용
<div>1. wrap-class 속성을 지정하고 해당 클래스에 CSS를 지정합니다.</div>
<br>
{% highlight html %}
<style>
    .widthClass{
        width:300px;
    }
</style>
<sbux-input id="sbIdx1" name="sbName1" uitype="text" wrap-class="widthClass"></sbux-input>
<sbux-datepicker id="sbIdx1" name="sbName1" uitype="popup" wrap-class="widthClass"></sbux-datepicker>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/common.wrapclass#common" target="_blank">공통 > wrap-class</a><br>
    </div>
</div>