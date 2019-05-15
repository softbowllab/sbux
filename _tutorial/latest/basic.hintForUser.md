---
title:  1.6 컴포넌트에 사용자를 위한 힌트
date:   2018-12-07
categories: ["latest","basic"]
order: 5
---

1.6 컴포넌트에 사용자를 위한 힌트 주기
===

---

### STEP 1. placeholder 속성 사용 (input component)
<div>1. 아래와 같이 컴포넌트에 placeholder 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" placeholder="input placeholder"></sbux-input>
{% endhighlight %}

### STEP 2. tooltip 속성 사용
<div>1. tooltip 속성으로 hint 문구를 지정합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" tooltip="sbux Tooltip"></sbux-input>
{% endhighlight %}

### STEP 3. popover 속성 사용
<div>1. popover 속성으로 hint 문구를 지정합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" popover="sbux Tooltip"></sbux-input>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/input.placeholder#input" target="_blank">input > placeholder</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/common.tooltip#common" target="_blank">공통 > tooltip</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/common.popover#common" target="_blank">공통 > popover</a>
    </div>
</div>