---
title:  텍스트에어리어 내 HTML 구문
date:   2018-12-10
categories: ["latest","adv"]
order: 11
---

텍스트에어리어 내 HTML 구문으로 다양하게 활용하기
===

---

### STEP 1. textarea 컴포넌트 생성
<div>1. textarea 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-textarea id="sbIdx1" name="sbName1" uitype="normal"></sbux-textarea>
{% endhighlight %}

### STEP 2. 컴포넌트에 is-content-html 속성 추가
<div>1. auto-resize 속성을 컴포넌트에 추가합니다.</div>
<br>
{% highlight html %}
<sbux-textarea id="sbIdx1" name="sbName1" uitype="normal" is-content-html="true"></sbux-textarea>
{% endhighlight %}

### STEP 3. value에 html tag 사용
<div>1. value에 html tag를 사용합니다.</div>
<br>
{% highlight html %}
<sbux-textarea id="sbIdx1" name="sbName1" uitype="normal" auto-resize="true" init="<i><b>SBUx</b></i>"></sbux-textarea>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/textarea.iscontenthtml#textarea" target="_blank">textarea > is-content-html</a><br>
    </div>
</div>