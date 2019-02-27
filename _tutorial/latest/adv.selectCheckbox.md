---
title:  콤보박스 내 다중 선택
date:   2018-12-10
categories: ["latest","adv"]
order: 7
---

콤보박스 내 선택을 다중으로 만들기
===

---

### STEP 1. checkbox type 콤보박스 생성
<div>1. uitype 속성을 chekbox로 설정하여 컴포넌트를 생성합니다.</div>
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
<sbux-select id="sbIdx1" name="sbName1" uitype="checkbox" jsondata-ref="jsondata"></sbux-select>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/select#select" target="_blank">select > select common</a><br>
    </div>
</div>