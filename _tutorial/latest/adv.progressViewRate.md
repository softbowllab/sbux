---
title:  2.17 프로그래스바로 진행률
date:   2018-12-10
categories: ["latest","adv"]
order: 17
---

2.17 프로그래스바로 진행률 나타내기
===

---

### STEP 1. progress 컴포넌트 생성
<div>1. uitype 속성을 chekbox로 설정하여 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-progress id="sbIdx1_1" name="sbTagNm1_1" uitype="bar">
    <progress-bar>
       <bar valuenow="0"></bar>
    </progress-bar>
</sbux-progress>
{% endhighlight %}

### STEP 2. set Method로 컴포넌트 값 변경
<div>1. set Method를 사용하여 진행률을 변경합니다.</div>
<br>
{% highlight html %}
<script>
    $(document).ready(function(){
        SBUxMethod.set('sbTagNm1_1', '50');
    });
</script>
<sbux-progress id="sbIdx1_1" name="sbTagNm1_1" uitype="bar">
    <progress-bar>
       <bar valuenow="0"></bar>
    </progress-bar>
</sbux-progress>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 메소드<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/progress.set#progress" target="_blank">progress > set</a><br>
    </div>
</div>