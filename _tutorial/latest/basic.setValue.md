---
title:  컴포넌트에 값을 입력
date:   2018-12-07
categories: ["latest","basic"]
order: 2
---

컴포넌트에 값을 입력하기
===

---

### STEP 1. 개별 Component 값 입력
<div>1. set Method를 사용하여 값을 입력합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text"></sbux-input>

<script>
    $(document).ready(function(){
        SBUxMethod.set('sbName1', 'input set');
    });
</script>
{% endhighlight %}

### STEP 2. 여러 Component 값 한번에 입력
<div>1. dataBind Method를 사용하여 값을 입력합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text"></sbux-input>
<sbux-input id="sbIdx2" name="sbName2" uitype="text"></sbux-input>
<sbux-input id="sbIdx3" name="sbName3" uitype="text"></sbux-input>

<script>
    var jsonData={
        sbName1:'input set1',
        sbName2:'input set2',
        sbName3:'input set3'
    }
    $(document).ready(function(){
        SBUxMethod.dataBind('jsonData');
    });
</script>
{% endhighlight %}

<div>2. datastore를 사용하여 값을 입력합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" datastore-id="idxData1"></sbux-input>
<sbux-input id="sbIdx2" name="sbName2" uitype="text" datastore-id="idxData1"></sbux-input>
<sbux-input id="sbIdx3" name="sbName3" uitype="text" datastore-id="idxData1"></sbux-input>

<sbux-datastore id="idxData1" name="ajaxData1" uitype="ajax" is-onload-bind="false" jsondata-ref="jsonData"></sbux-datastore>

<script>
    var jsonData={
        sbName1:'input set1',
        sbName2:'input set2',
        sbName3:'input set3'
    }
</script>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 메소드<br><br>
        &nbsp;&nbsp;- 각 컴포넌트별 set<br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/common.dataBind#common" target="_blank">공통 > dataBind</a><br>
    </div>
</div>