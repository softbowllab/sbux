---
title:  2.27 회전판을 이용한 설문조사
date:   2018-12-10
categories: ["latest","adv"]
order: 27
---

2.27 회전판을 이용한 설문조사 만들기
===

---

### STEP 1. tag type으로 컴포넌트 생성
<div>1. tag type 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-carousel id="sbIdx1_1" name="sbTagNm1_1" uitype="tag">
    <content-item></content-item>
    <content-item></content-item>
    <content-item></content-item>
</sbux-carousel>
{% endhighlight %}

### STEP 2. 설문 페이지 작성
<div>1. contente-item tag 내부에 필요한 html tag를 입력합니다.</div>
<br>
{% highlight html %}
<sbux-carousel id="sbIdx1_1" name="sbTagNm1_1" uitype="tag">
    <content-item><sbux-input id="couinput" name="couinput" uitype="text"></sbux-input></content-item>
    <content-item><sbux-datepicker id="coupicker" name="coupicker" uitype="inline"></sbux-datepicker></content-item>
    <content-item><sbux-button id="coubutton" name="coubutton" uitype="normal" text="버튼"></sbux-button></content-item>
</sbux-carousel>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/carousel#carousel" target="_blank">carousel > carousel common</a><br>
    </div>
</div>