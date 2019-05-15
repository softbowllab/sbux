---
title:  2.16 모달창으로 상세내용 표시
date:   2018-12-10
categories: ["latest","adv"]
order: 16
---

2.16 모달창으로 상세내용 표시하기
===

---

### STEP 1. modal 컴포넌트 생성
<div>1. alert을 띄우게할 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-modal id="sbIdx1_1" name="sbTagNm1_1" uitype="small"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_1')">
{% endhighlight %}

### STEP 2. 속성으로 cotnent 추가
<div>1. header-title 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-modal id="sbIdx1_1" name="sbTagNm1_1" uitype="small" header-title="Modal Title"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_1')">
{% endhighlight %}

<div>2. body-html 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-modal id="sbIdx1_1" name="sbTagNm1_1" uitype="small" header-title="Modal Title" body-html="<b>Modal Content</b>"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_1')">
{% endhighlight %}

<div>3. footer-html 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-modal id="sbIdx1_1" name="sbTagNm1_1" uitype="small" header-title="Modal Title" body-html="<b>Modal Content</b>" footer-html="Modal Footer"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_1')">
{% endhighlight %}

### STEP 3. 외부 div로 cotnent 추가
<div>1. body-html-id 속성을 추가하고 가져올 외부 div id를 입력합니다.</div>
<br>
{% highlight html %}
<div id="contentTag1"><b>Modal Contnet</b></div>
<sbux-modal id="sbIdx1_1" name="sbTagNm1_1" uitype="small" header-title="Modal Title" body-html-id="contentTag1"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_1')">
{% endhighlight %}

<div>3. footer-html-id 속성을 추가하고 가져올 외부 div id를 입력합니다.</div>
<br>
{% highlight html %}
<div id="contentTag1"><b>Modal Contnet</b></div>
<div id="footerTag1"><b>Modal Footer</b></div>
<sbux-modal id="sbIdx1_1" name="sbTagNm1_1" uitype="small" header-title="Modal Title" body-html-id="contentTag1" footer-html-id="footerTag1"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_1')">
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/modal.bodyhtml#modal" target="_blank">modal > body-html</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/modal.bodyhtmlid#modal" target="_blank">modal > body-html-id</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/modal.footerhtml#modal" target="_blank">modal > footer-html</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/modal.footerhtmlid#modal" target="_blank">modal > footer-html-id</a><br>

    </div>
</div>