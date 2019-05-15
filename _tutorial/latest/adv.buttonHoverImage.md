---
title:  2.9 버튼에 마우스 오버시 이미지 교체
date:   2018-12-10
categories: ["latest","adv"]
order: 9
---

2.9 버튼에 마우스 오버시 이미지 교체하기 
===

---

### STEP 1. 이미지가 포함된 컴포넌트 생성
<div>1. image-src 속성을 사용하여 이미지가 포함된 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-button id="sbIdx1" name="sbName1" uitype="normal" image-src="image.jpg"></sbux-button>
{% endhighlight %}

### STEP 2. 컴포넌트에 hover 이미지 속성 추가
<div>1. hover-image-src 속성을 컴포넌트에 추가합니다.</div>
<br>
{% highlight html %}
<sbux-button id="sbIdx1" name="sbName1" uitype="normal" image-src="image.jpg" hover-image-src="hoverimage.jpg"></sbux-button>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/button.imagesrc#button" target="_blank">button > image-src</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/button.hoverimagesrc#button" target="_blank">button > hover-image-src</a><br>
    </div>
</div>