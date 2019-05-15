---
title:  3.7 버튼색상 조정
date:   2018-12-10
categories: ["latest","design"]
order: 7
---

3.7 버튼색상 조정하기
===

---

### STEP 1. 컴포넌트 생성
<div>1. button 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-button id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" text="SBUx normal button"></sbux-button>
{% endhighlight %}

### STEP 2. 색상 변경
<div>
    1. button-color 속성으로 버튼 색상을 조정합니다.<br>
    ( default(white) | blue | green | sky | orange | red )
</div>
<br>
{% highlight html %}
<sbux-button id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" text="SBUx normal button" button-color="sky"></sbux-button>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/button.buttoncolor#button" target="_blank">button > button-color</a><br>
    </div>
</div>