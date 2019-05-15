---
title:  3.6 콤보박스 내부 높이 조정
date:   2018-12-10
categories: ["latest","design"]
order: 6
---

3.6 콤보박스 내부 높이 조정하기
===

---

### STEP 1. 컴포넌트 생성
<div>1. select 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-select id="sbIdx1_1" name="sbTagNm1_1" uitype="single">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>
{% endhighlight %}

### STEP 2. style 적용
<div>1. style 속성을 설정합니다.</div>
<br>
{% highlight html %}
<sbux-select id="sbIdx1_1" name="sbTagNm1_1" uitype="single" style="height:100px;">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>
{% endhighlight %}

<div>2. class 속성을 설정합니다.</div>
<br>
{% highlight html %}
<style>
    .selectHeight{
        height:100px;
    }
</style>
<sbux-select id="sbIdx1_1" name="sbTagNm1_1" uitype="single" class="selectHeight">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 환경설정<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/tutorial/latest/basic.configSetting#basic" target="_blank">환경설정하기</a><br>
    </div>
</div>