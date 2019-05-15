---
title:  2.8 다중 필수 선택항목 지정
date:   2018-12-10
categories: ["latest","adv"]
order: 8
---

2.8 체크박스의 별도 코드없는 다중 필수 선택항목 지정하기
===

---

### STEP 1. Componenet 생성
<div>1. 변동형으로 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<script type="text/javascript">
   var checkboxJsonData = [
       { text : "빨강"  , truevalue : "YES"  , falsevalue: "NO" , checked : "checked"},
       { text : "노랑"  , truevalue : "true" , falsevalue: "false" },
       { text : "초록"  , truevalue : "yes"  , falsevalue: "no" },
       { text : "파랑"  , truevalue : "1"     , falsevalue: "0" }
   ];
</script>
<sbux-checkbox id="idxChkbox_json" name="chkbox_json" uitype="normal" jsondata-ref="checkboxJsonData"></sbux-checkbox>
{% endhighlight %}

<div>
    2. required-index 속성을 추가합니다.
</div>
<br>
{% highlight html %}
<script type="text/javascript">
   var checkboxJsonData = [
       { text : "빨강"  , truevalue : "YES"  , falsevalue: "NO" , checked : "checked"},
       { text : "노랑"  , truevalue : "true" , falsevalue: "false" },
       { text : "초록"  , truevalue : "yes"  , falsevalue: "no" },
       { text : "파랑"  , truevalue : "1"     , falsevalue: "0" }
   ];
</script>
<sbux-checkbox id="idxChkbox_json" name="chkbox_json" uitype="normal" jsondata-ref="checkboxJsonData" required-index="0,2"></sbux-checkbox>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/checkbox.requiredindex#checkbox" target="_blank">checkbox > required-index</a><br>
    </div>
</div>