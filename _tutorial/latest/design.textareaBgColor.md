---
title:  텍스트에어리어 배경 색상 조정
date:   2018-12-10
categories: ["latest","design"]
order: 8
---

텍스트에어리어 배경 색상 조정하기
===

---

### STEP 1. 컴포넌트 생성
<div>1. textarea 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-textarea id="sbIdx1" name="sbTagNm1" uitype="normal"></sbux-textarea>
{% endhighlight %}

### STEP 2. 색상 변경
<div>1. id 속성으로 색상을 조정합니다.</div>
<br>
{% highlight html %}
<style>
    #sbIdx1{
        background-color:skyblue;
    }
</style>
<sbux-textarea id="sbIdx1" name="sbTagNm1" uitype="normal"></sbux-textarea>
{% endhighlight %}

<div>2. class 속성으로 색상을 조정합니다.</div>
<br>
{% highlight html %}
<style>
    .textareaColor{
        background-color:skyblue;
    }
</style>
<sbux-textarea id="sbIdx1" name="sbTagNm1" uitype="normal" class="textareaColor"></sbux-textarea>
{% endhighlight %}

<div>3. style 속성으로 색상을 조정합니다.</div>
<br>
{% highlight html %}
<sbux-textarea id="sbIdx1" name="sbTagNm1" uitype="normal" style="background-color:skyblue;"></sbux-textarea>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/common.id#common" target="_blank">공통 > id</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/common.class#common" target="_blank">공통 > class</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/common.style#common" target="_blank">공통 > style</a><br>
    </div>
</div>