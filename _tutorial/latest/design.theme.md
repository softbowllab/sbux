---
title:  3.1 테마 변경
date:   2018-12-10
categories: ["latest","design"]
order: 1
---

3.1 테마 변경하기
===

---

### STEP 1. Theme 설정 사용
<div>
    1. 컴포넌트 환경설정에 Theme를 설정합니다.<br>
    (default | black 이외의 theme는 추가 예정)
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
        Theme : "black"
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