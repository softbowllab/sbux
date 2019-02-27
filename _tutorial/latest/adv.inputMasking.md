---
title:  입력박스에 masking
date:   2018-12-10
categories: ["latest","adv"]
order: 2
---

입력박스에 다양한 형태를 위한 masking 입히기
===

---

### STEP 1. mask 속성 추가
<div>1. 컴포넌트에 mask 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" mask=""></sbux-input>
{% endhighlight %}

<div>
    2. 필요한 형태에 따라 value를 추가합니다.<br>
    (설명란의 연결된 mask 페이지에 형태 별 예시가 있습니다.)
</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" mask="999999-9999999"></sbux-input>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/input.mask#input" target="_blank">input > mask</a><br>
    </div>
</div>