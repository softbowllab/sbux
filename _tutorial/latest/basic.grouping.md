---
title:  컴포넌트들을 그룹핑하기
date:   2018-12-07
categories: ["latest","basic"]
order: 6
---

컴포넌트들을 그룹핑하기
===

---

### STEP 1. Component에 그룹 지정 속성 추가
<div>1. 아래와 같이 컴포넌트에 그룹핑을 위한 속성을 추가합니다.</div>

{% highlight html %}
<sbux-input id="sbIdx1" name="sbName1" uitype="text" group-id="sbGroup"></sbux-input>
<sbux-datepicker id="sbIdx2" name="sbName2" uitype="popup" group-id="sbGroup"></sbux-datepicker>
<sbux-textarea id="sbIdx3" name="sbName3" uitype="normal" group-id="sbGroup"></sbux-textarea>
{% endhighlight %}

### STEP 2. 그룹 관련 Method 사용
<div>2. 그룹핑관련 Method로 컴포넌트 그룹 전체를 제어합니다.</div>

{% highlight html %}
<script>
    $(document).ready(function(){
        SBUxMethod.hideGroup('sbGroup');
    });
</script>
{% endhighlight %}

<div>3. 설명</div>
<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
    </div>
</div>