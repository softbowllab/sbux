---
title:  리스트박스 표시 필터링
date:   2018-12-10
categories: ["latest","adv"]
order: 12
---

리스트박스 표시 목록을 입력박스에서 필터링하기
===

---

### STEP 1. listbox, input 컴포넌트 생성
<div>1. listbox 컴포넌트, input 컴포넌트 생성</div>
<br>
{% highlight html %}
<script>
    var jsondata = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
</script>
<sbux-input id="filterInput1" name="filterInput1" uitype="text"></sbux-input>
<sbux-listbox id="sbIdx1_1" name="sbTagNm1_1" uitype="single" jsondata-ref="jsondata"></sbux-listbox>
{% endhighlight %}

### STEP 2. listbox 컴포넌트에 filter-source-name 속성 추가
<div>1. listbox 컴포넌트에 filter-source-name 속성을 추가하고 필터링할때 쓸 input의 name을 입력합니다.</div>
<br>
{% highlight html %}
<script>
    var jsondata = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
</script>
<sbux-input id="filterInput1" name="filterInput1" uitype="text"></sbux-input>
<sbux-listbox id="sbIdx1_1" name="sbTagNm1_1" uitype="single" jsondata-ref="jsondata" filter-source-name="filterInput1"></sbux-listbox>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/listbox.filtersourcename#listbox" target="_blank">listbox > filter-source-name</a><br>
    </div>
</div>