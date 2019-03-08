---
title:  2.1 입력박스에 자동완성 기능
date:   2018-12-10
categories: ["latest","adv"]
order: 1
---

2.1 입력박스에 빠른 입력 선택을 위한 자동완성 기능 넣기
===

---

### STEP 1. autoComplete 속성 사용
<div>1. 문자열로 이루어진 배열형태로 Data를 구성합니다.</div>
<br>
{% highlight html %}
<script>
    var autoCompData=["red", "green", "blue", "yellow","black"];
</script>
{% endhighlight %}

<div>2. 컴포넌트에 autocomplete-ref 속성을 이용하여 연동합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" autocomplete-ref="autoCompData"></sbux-input>
{% endhighlight %}

### STEP 2. autoClplete 속성 추가 기능 사용
<div>1. autocomplete-select-callback 속성을 적용합니다.</div>
<br>
{% highlight html %}
<script>
    function autoFunc(value, label){
        console.log("선택한 항목 : " + value, label);
    }
</script>
<sbux-input id="sbIdx1" name="sbName1" uitype="text" autocomplete-ref="autoCompData" autocomplete-select-callback="autoFunc()"></sbux-input>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/input.autocompleteref#input" target="_blank">input > autocomplete-ref</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/input.autocompleteselectcallback#input" target="_blank">input > autocomplete-select-callback</a><br>
    </div>
</div>