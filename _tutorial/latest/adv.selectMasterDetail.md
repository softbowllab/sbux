---
title:  콤보박스의 마스터 디테일
date:   2018-12-04
categories: ["latest","adv"]
order: 6
---

콤보박스의 마스터 디테일관계 연결하기
===

---

### STEP 1. 콤보박스 생성
<div>1. 마스터 콤보박스를 생성합니다.</div>
<br>
{% highlight html %}
<script>
var json_master = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
</script>
<sbux-select id="sbIdx1_1" name="sbName1" uitype="single" jsondata-ref="json_master"></sbux-select>
{% endhighlight %}

<div>
    2. 마스터 콤보박스와 연결할 디테일 콤보박스를 생성합니다.<br>
</div>
<br>
{% highlight html %}
<script>
    var json_master = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
    
    var json_detail = [
        {text : 'text', value : 'text'},
        {text : 'password', value : 'password'},
        {text : 'popup', value : 'popup'},
        {text : 'inline', value : 'inline'},
        {text : 'normal', value : 'normal'},
        {text : 'single', value : 'single'},
        {text : 'checkbox', value : 'checkbox'}
    ];
</script>
<sbux-select id="sbIdx1_1" name="sbName1" uitype="single" jsondata-ref="json_master"></sbux-select>
<sbux-select id="sbIdx1_2" name="sbName1_2" uitype="single" jsondata-ref="json_detail"></sbux-select>
{% endhighlight %}

### STEP 2. 마스터 디테일 연결 하기
<div>1. 디테일 콤보박스에 jsondata-filter, filter-source-name 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-select id="sbIdx1_2" name="sbName1_2" uitype="single" jsondata-ref="json_detail" filter-source-name="sbName1_1" jsondata-filter="mastervalue"></sbux-select>
{% endhighlight %}

<div>
    2. 디테일 데이터에 마스터와 연결에 필요한 데이터를 추가합니다.<br>
</div>
<br>
{% highlight html %}
<script>
    var json_detail = [
        {text : 'text', value : 'text', mastervalue : 'iValue'},
        {text : 'password', value : 'password', mastervalue : 'iValue'},
        {text : 'popup', value : 'popup', mastervalue : 'pValue'},
        {text : 'inline', value : 'inline', mastervalue : 'pValue'},
        {text : 'normal', value : 'normal', mastervalue : 'rValue'},
        {text : 'single', value : 'single', mastervalue : 'sValue'},
        {text : 'checkbox', value : 'checkbox', mastervalue : 'sValue'}
    ];
</script>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/select.jsondatafilter#select" target="_blank">select > jsondata-filter</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/select.filtersourcename#select" target="_blank">select > filter-source-name</a><br>
    </div>
</div>