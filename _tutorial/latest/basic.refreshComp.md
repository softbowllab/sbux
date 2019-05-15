---
title:  1.5 컴포넌트들 새로 고침
date:   2018-12-07
categories: ["latest","basic"]
order: 4
---

1.5 컴포넌트들 새로 고침하기
===

---

### STEP 1. 개별 Component refresh
<div>1. refresh Method를 사용하여 새로고침합니다.</div>
<br>
{% highlight html %}
<script>
    $(document).ready(function(){
        SBUxMethod.refresh('sbName1');
    });
</script>
<sbux-input id="sbIdx1" name="sbName1" uitype="text"></sbux-input>
{% endhighlight %}

### STEP 2. 여러 Component 한번에 refresh
<div>1. refreshAll Method를 사용하여 새로고침합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text"></sbux-input>
<sbux-input id="sbIdx2" name="sbName2" uitype="text"></sbux-input>
<sbux-input id="sbIdx3" name="sbName3" uitype="text"></sbux-input>
<script>
    $(document).ready(function(){
        SBUxMethod.refreshAll();
    });
</script>
{% endhighlight %}

### STEP 3. Component Group refresh
<div>1. 아래와 같이 컴포넌트에 그룹핑을 위한 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" group-id="sbGroup"></sbux-input>
<sbux-input id="sbIdx2" name="sbName2" uitype="text" group-id="sbGroup"></sbux-input>
<sbux-input id="sbIdx3" name="sbName3" uitype="text" group-id="sbGroup"></sbux-input>
<script>
    $(document).ready(function(){
        SBUxMethod.refreshGroup();
    });
</script>
{% endhighlight %}

<div>2. refreshAll Method로 컴포넌트 그룹 전체를 새로고침합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text"></sbux-input>
<sbux-input id="sbIdx2" name="sbName2" uitype="text"></sbux-input>
<sbux-input id="sbIdx3" name="sbName3" uitype="text"></sbux-input>
<script>
    $(document).ready(function(){
        SBUxMethod.refreshGroup();
    });
</script>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 메소드<br><br>
        &nbsp;&nbsp;- 각 컴포넌트별 refresh<br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/common.refreshAll#common" target="_blank">공통 > refreshAll</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/common.refreshGroup#common" target="_blank">공통 > refreshGroup</a><br>
    </div>
</div>