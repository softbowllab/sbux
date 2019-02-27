---
title:  다국어 설정
date:   2018-12-07
categories: ["latest","basic"]
order: 11
---

다국어 설정하기
===

---

### STEP 1. locale 설정 사용
<div>1. 컴포넌트 환경설정에 locale을 설정합니다.</div>
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
        locale : "en"
    };
</script>
{% endhighlight %}

### STEP 2. LocaleFile  설정 사용
<div>1. localeFile 생성 후 컴포넌트 환경설정에 LocaleFile경로를 설정합니다.</div>
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
        LocaleFile : "<c:url value='/resources/locale/locale_???.js' />"
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