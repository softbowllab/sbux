---
title:  2.14 알림 컴포넌트로 컨폼창
date:   2018-12-10
categories: ["latest","adv"]
order: 14
---

2.14 Alert 컴포넌트로 컨폼창 만들기
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

### STEP 2. is-confirm 속성 추가
<div>1. is-confirm 속성을 추가합니다.</div>
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
            is-confirm="true">
</sbux-alert>
{% endhighlight %}

### STEP 3. ok, cancel callback function 설정
<div>1. callback-confirm-ok 속성을 추가하여 ok에 대한 callback을 설정합니다.</div>
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
            is-confirm="true"
            callback-confirm-ok="okCallback">
</sbux-alert>
{% endhighlight %}

<div>2. callback-confirm-ok 속성에 지정한 function을 추가합니다.</div>
<br>
{% highlight html %}
<script>
    function okCallback(){
        alert('확인');
    }
</script>
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
            is-confirm="true"
            callback-confirm-ok="okCallback">
</sbux-alert>
{% endhighlight %}

<div>3. callback-confirm-cancel 속성을 추가하여 ok에 대한 callback을 설정합니다.</div>
<br>
{% highlight html %}
<script>
    function okCallback(){
        alert('확인');
    }
</script>
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
            is-confirm="true"
            callback-confirm-ok="okCallback"
            callback-confirm-cancel="cancelCallback">
</sbux-alert>
{% endhighlight %}

<div>4. callback-confirm-cancel 속성에 지정한 function을 추가합니다.</div>
<br>
{% highlight html %}
<script>
    function okCallback(){
        alert('확인');
    }
    function cancelCallback(){
        alert('취소');
    }
</script>
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
            is-confirm="true"
            callback-confirm-ok="okCallback"
            callback-confirm-cancel="cancelCallback">
</sbux-alert>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/alert.isconfirm#alert" target="_blank">alert > is-confirm</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/alert.callbackconfirmok#alert" target="_blank">alert > callback-confirm-ok</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/alert.callbackconfirmcancel#alert" target="_blank">alert > callback-confirm-cancel</a><br>
    </div>
</div>