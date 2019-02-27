---
title:  텍스트에어리어 높이 자동조절
date:   2018-12-10
categories: ["latest","adv"]
order: 10
---

텍스트에어리어 내 입력에 따른 높이 자동조절하기
===

---

### STEP 1. textarea 컴포넌트 생성
<div>1. textarea 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-textarea id="sbIdx1" name="sbName1" uitype="normal"></sbux-textarea>
{% endhighlight %}

### STEP 2. 컴포넌트에 auto-resize 속성 추가
<div>1. auto-resize 속성을 컴포넌트에 추가합니다.</div>
<br>
{% highlight html %}
<sbux-textarea id="sbIdx1" name="sbName1" uitype="normal" auto-resize="true"></sbux-textarea>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/textarea.autoresize#textarea" target="_blank">textarea > auto-resize</a><br>
    </div>
</div>