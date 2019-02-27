---
title:  Lazy 로딩
date:   2018-12-07
categories: ["latest","basic"]
order: 8
---

Lazy 로딩하기
===

---

### STEP 1. LoadIncludeClass 설정 사용
<div>1. 컴포넌트 환경설정에 LoadIncludeClass를 설정합니다.</div>
<br>
{% highlight html %}
<script>
    var SBUxConfig = {
        Path : "/resources/SBUx/",  
        SBGrid : {
            Version2_5 : true
        },
        SBChart : {
            Version2_0 : true
        },
        LoadIncludeClass : 'lazyLoadClass'
    };
</script>
{% endhighlight %}

<div>2. 우선 랜더링할 컴포넌트에만 lazyLoadClass를 설정합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text"></sbux-input>
<sbux-input id="sbIdx2" name="sbName2" uitype="text" class="lazyLoadClass"></sbux-input>
<sbux-input id="sbIdx3" name="sbName3" uitype="text"></sbux-input>
{% endhighlight %}

<div>3. render Method를 사용하여 남은 컴포넌트를 랜더링합니다.</div>
<br>
{% highlight html %}
<script>
    $(document).ready(function(){
        SBUxMethod.render();
    });
</script>
{% endhighlight %}

### STEP 2. LoadExcludeClass 설정 사용
<div>1. 컴포넌트 환경설정에 LoadExcludeClass를 설정합니다.</div>
<br>
{% highlight html %}
<script>
    var SBUxConfig = {
        Path : "/resources/SBUx/",  
        SBGrid : {
            Version2_5 : true
        },
        SBChart : {
            Version2_0 : true
        },
        LoadExcludeClass : 'notLoadClass'
    };
</script>
{% endhighlight %}

<div>2. 랜더링하지않을 컴포넌트에만 notLoadClass를 설정합니다.</div>
<br>
{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text"></sbux-input>
<sbux-input id="sbIdx2" name="sbName2" uitype="text" class="notLoadClass"></sbux-input>
<sbux-input id="sbIdx3" name="sbName3" uitype="text"></sbux-input>
{% endhighlight %}

<div>3. render Method를 사용하여 남은 컴포넌트를 랜더링합니다.</div>
<br>
{% highlight html %}
<script>
    $(document).ready(function(){
        SBUxMethod.render();
    });
</script>
{% endhighlight %}

### STEP 3. lazyloading 속성 사용 (Tabs)
<div>1. tabs 컴포넌트에 lazyloading 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" title-target-id-array="tab1_1_1^tab1_1_2" title-text-array="tab1^tab2" is-scrollable="false" lazyloading="true"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_1_1">
        tab1 content
    </div>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

### STEP 4. lazyloading 속성 사용 (Carousel)
<div>1. carousel 컴포넌트에 lazyloading 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-carousel id="sbIdx1_1" name="sbTagNm1_1" uitype="tag" lazyloading="true">
    <content-item><sbux-input id="couinput" name="couinput" uitype="text"></sbux-input></content-item>
    <content-item><sbux-datepicker id="coupicker" name="coupicker" uitype="inline"></sbux-datepicker></content-item>
    <content-item><sbux-button id="coubutton" name="coubutton" uitype="normal" text="버튼"></sbux-button></content-item>
</sbux-carousel>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 환경설정<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/tutorial/latest/basic.configSetting#basic" target="_blank">환경설정하기</a><br>
        <br>
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/tabs.lazyloding#tabs" target="_blank">tabs > lazyloding</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/carousel.lazyloding#carousel" target="_blank">carousel > lazyloding</a><br>
    </div>
</div>