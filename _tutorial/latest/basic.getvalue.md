---
title:  1.4 컴포넌트에 입력된 값 호출
date:   2018-12-07
categories: ["latest","basic"]
order: 3
---

1.4 컴포넌트에 입력된 값 호출하기
===

---

### STEP 1. 개별 Component 값 호출
<div>1. 컴포넌트에 값을 입력합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" init="input get"></sbux-input>
{% endhighlight %}

<div>2. get Method를 사용하여 값을 호출합니다.</div>

{% highlight html %}
<script>
    $(document).ready(function(){
        SBUxMethod.get('sbName1');
    });
</script>
{% endhighlight %}

### STEP 2. 여러 Component 값 한번에 호출
<div>1. 컴포넌트에 값을 입력합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" init="input get1"></sbux-input>
<sbux-input id="sbIdx2" name="sbName2" uitype="text" init="input get2"></sbux-input>
<sbux-input id="sbIdx3" name="sbName3" uitype="text" init="input get3"></sbux-input>
{% endhighlight %}

<div>2. getAllData 사용하여 값을 호출합니다.</div>
<br>
{% highlight html %}
<script>
    $(document).ready(function(){
        SBUxMethod.getAllData();
    });
</script>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 메소드<br><br>
        &nbsp;&nbsp;- 각 컴포넌트별 get<br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/common.getAllData#common" target="_blank">공통 > getAllData</a><br>
    </div>
</div>