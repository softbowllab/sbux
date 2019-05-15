---
title:  1.2 컴포넌트 생성
date:   2018-12-04
categories: ["latest","basic"]
order: 1
---

1.2 컴포넌트 생성 하기
===

---

### STEP 1. tag 방식(고정형) 생성
<div>1. 아래와 같이 생성합니다.</div>
<br>
{% highlight html %}
<sbux-select id="sbIdx1" name="sbName1" uitype="single">
    <option-item value="red">red</option-item>
    <option-item value="green">green</option-item>
    <option-item value="blue">blue</option-item>
</sbux-select>
{% endhighlight %}

### STEP 2. tag 방식(변동형) 생성
<div>1. 아래와 같이 생성합니다.</div>
<br>
{% highlight html %}
<script>
    var jsonData=[
        {text:'red', value:'red'},
        {text:'green', value:'green'},
        {text:'blue', value:'blue'}
    ];
</script>
<sbux-select id="sbIdx1" name="sbName1" uitype="single" jsondata-ref="jsonData"></sbux-select>
{% endhighlight %}

### STEP 3. jQuery 방식 생성
<div>1. 아래와 같이 생성합니다.</div>
<br>
{% highlight html %}
<script>
    var jsonData=[
        {text:'red', value:'red'},
        {text:'green', value:'green'},
        {text:'blue', value:'blue'}
    ];
    $(document).ready(function(){
        $('#sbIdx1').sbSelect({
            name:'sbName1',
            uitype:'single',
            jsondataRef:'jsonData'
        });
    });
</script>
<div id="sbIdx1"></div>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        - 각 컴포넌트별 attr 참고
    </div>
</div>