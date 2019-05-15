---
title:  3.5 체크박스 사이 간격 조정
date:   2018-12-10
categories: ["latest","design"]
order: 5
---

3.5 체크박스 사이 간격 조정하기
===

---

### STEP 1. 컴포넌트 생성
<div>1. cehckbox 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-checkbox id="sbIdx1" name="sbTagNm.a" uitype="normal" text="SBUx Checkbox1"></sbux-checkbox>
<sbux-checkbox id="sbIdx2" name="sbTagNm.b" uitype="normal" text="SBUx Checkbox2"></sbux-checkbox>
<sbux-checkbox id="sbIdx3" name="sbTagNm.c" uitype="normal" text="SBUx Checkbox3"></sbux-checkbox>
{% endhighlight %}

### STEP 2. 좌우 간격 조정
<div>1. text-right-padding 속성으로 text 기준 오른쪽 간격을 조정합니다.</div>
<br>
{% highlight html %}
<sbux-checkbox id="sbIdx1" name="sbTagNm.a" uitype="normal" text="SBUx Checkbox1" text-right-padding="50px"></sbux-checkbox>
<sbux-checkbox id="sbIdx2" name="sbTagNm.b" uitype="normal" text="SBUx Checkbox2" text-right-padding="50px"></sbux-checkbox>
<sbux-checkbox id="sbIdx3" name="sbTagNm.c" uitype="normal" text="SBUx Checkbox3" text-right-padding="50px"></sbux-checkbox>
{% endhighlight %}

<div>2. text-left-padding 속성으로 text 기준 왼쪽 간격을 조정합니다.</div>
<br>
{% highlight html %}
<sbux-checkbox id="sbIdx1" name="sbTagNm.a" uitype="normal" text="SBUx Checkbox1" text-left-padding="50px"></sbux-checkbox>
<sbux-checkbox id="sbIdx2" name="sbTagNm.b" uitype="normal" text="SBUx Checkbox2" text-left-padding="50px"></sbux-checkbox>
<sbux-checkbox id="sbIdx3" name="sbTagNm.c" uitype="normal" text="SBUx Checkbox3" text-left-padding="50px"></sbux-checkbox>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/checkbox.textrightpadding#checkbox" target="_blank">checkbox > text-right-padding</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/checkbox.textleftpadding#checkbox" target="_blank">checkbox > text-left-padding</a><br>
    </div>
</div>