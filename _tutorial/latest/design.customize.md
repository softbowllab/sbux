---
title:  3.2 커스터마이징 CSS
date:   2018-12-10
categories: ["latest","design"]
order: 2
---

3.2 커스터마이징 CSS
===

---

### STEP 1. CustomCSS 설정 사용
<div>1. 컴포넌트에 적용할 CustomCSS파일을 생성합니다.</div>
<br>

<div>
    2. 컴포넌트 환경설정에 CustomCSS를 설정합니다.<br>
    ( 파일의 경로는 상단 Path기준입니다. )
</div>
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
        CustomCSS : "생성한CSS파일명.css"
    };
</script>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 환경설정<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/tutorial/latest/basic.configSetting#basic" target="_blank">환경설정하기</a><br>
    </div>
</div>