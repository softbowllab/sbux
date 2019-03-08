---
title:  2.15 알림 컴포넌트로 공지사항
date:   2018-12-10
categories: ["latest","adv"]
order: 15
---

2.15 alet 컴포넌트로 공지사항 만들기
===

---

### STEP 1. alert 컴포넌트 생성
<div>1. alert을 띄우게할 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-select id="sbIdx" name="sbName" uitype="single">
    <option-item value="value">input</option-item>
    <option-item value="value">picker</option-item>
    <option-item value="value">radio</option-item>
    <option-item value="value">select</option-item>
</sbux-select>
{% endhighlight %}

<div>2. 생성한 컴포넌트와 연동하여 alert 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-select id="sbIdx" name="sbName" uitype="single">
    <option-item value="value">input</option-item>
    <option-item value="value">picker</option-item>
    <option-item value="value">radio</option-item>
    <option-item value="value">select</option-item>
</sbux-select>
<sbux-alert id="sbIdx1_1" name="sbTagNm1_1" uitype="alert" switch-name="sbName"
            case-array="{iValue,,input을 선택하셨습니다.,}^
                        {pValue,,picker를 선택하셨습니다.,}^
                        {rValue,,radio를 선택하셨습니다.,}^
                        {sValue,,select를 선택하셨습니다.,}">
</sbux-alert>
{% endhighlight %}

### STEP 2. is-fixed 속성 추가
<div>1. is-fixed 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-select id="sbIdx" name="sbName" uitype="single">
    <option-item value="value">input</option-item>
    <option-item value="value">picker</option-item>
    <option-item value="value">radio</option-item>
    <option-item value="value">select</option-item>
</sbux-select>
<sbux-alert id="sbIdx1_1" name="sbTagNm1_1" uitype="alert" switch-name="sbName"
            case-array="{iValue,,input을 선택하셨습니다.,}^
                        {pValue,,picker를 선택하셨습니다.,}^
                        {rValue,,radio를 선택하셨습니다.,}^
                        {sValue,,select를 선택하셨습니다.,}"
            is-fixed="true">
</sbux-alert>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/alert.isconfirm#alert" target="_blank">alert > is-fixed</a><br>
    </div>
</div>