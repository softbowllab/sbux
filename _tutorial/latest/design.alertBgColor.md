---
title:  알림창 배경 색상 조정
date:   2018-12-10
categories: ["latest","design"]
order: 9
---

알림창 배경 색상 조정하기
===

---

### STEP 1. 컴포넌트 생성
<div>1. alert을 연동할 컴포넌트와 alert 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-select id="test_1" name="test_1" uitype="single">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>

<sbux-alert id="sbIdx1_1" name="sbTagNm1_1" uitype="alert" switch-name="test_1"
            case-array="{iValue,input,input을 선택하셨습니다.,}^
                        {pValue,picker,picker를 선택하셨습니다.,}^
                        {rValue,radio,radio를 선택하셨습니다.,}^
                        {sValue,select,select를 선택하셨습니다.,}"></sbux-alert>
{% endhighlight %}

### STEP 2. 테마 변경
<div>
    1. case-array 속성으로 테마를 개별 적용합니다.<br>
    ( info | light )
</div>
<br>
{% highlight html %}
<sbux-select id="test_1" name="test_1" uitype="single">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>

<sbux-alert id="sbIdx1_1" name="sbTagNm1_1" uitype="alert" switch-name="test_1"
            case-array="{iValue,input,input을 선택하셨습니다.,info}^
                        {pValue,picker,picker를 선택하셨습니다.,light}^
                        {rValue,radio,radio를 선택하셨습니다.,info}^
                        {sValue,select,select를 선택하셨습니다.,light}"></sbux-alert>
{% endhighlight %}

<div>
    2. base-mode 속성으로 테마를 일괄 적용합니다.<br>
    ( info | light )
</div>
<br>
{% highlight html %}
<sbux-select id="test_1" name="test_1" uitype="single">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>

<sbux-alert id="sbIdx1_1" name="sbTagNm1_1" uitype="alert" switch-name="test_1"
            case-array="{iValue,input,input을 선택하셨습니다.,}^
                        {pValue,picker,picker를 선택하셨습니다.,}^
                        {rValue,radio,radio를 선택하셨습니다.,}^
                        {sValue,select,select를 선택하셨습니다.,}"
            base-mode="light"></sbux-alert>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/alert.casearray#alert" target="_blank">alert > case-array</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/alert.basemode#alert" target="_blank">alert > base-mode</a><br>
    </div>
</div>