---
title:  입력박스에 자동완성 기능
date:   2018-12-10
categories: ["latest","adv"]
order: 1
---

입력박스에 빠른 입력 선택을 위한 자동완성 기능 넣기
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
<div>1. autocomplete-ref 속성을 필수로 사용하며 추가로 관련 속성을 적용합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" autocomplete-ref="autoCompData" grid-direction="both"></sbux-input>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- input의 autocomplete- 로 시작하는 속성<br>
    </div>
</div>