---
title:  캘린더 입력 포맷 변경
date:   2018-12-04
categories: ["latest","adv"]
order: 3
---

캘린더 입력 포맷을 변경하기
===

---

### STEP 1. date-format 속성 추가
<div>1. 컴포넌트에 date-format 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-datepicker id="sbIdx1" name="sbName1" uitype="popup" date-format=""></sbux-datepicker>
{% endhighlight %}

<div>
    2. 필요한 형태에 따라 value를 추가합니다.<br>
    (설명란의 연결된 date-format 페이지에 형태 별 예시가 있습니다.)
</div>
<br>
{% highlight html %}
<sbux-datepicker id="sbIdx1" name="sbName1" uitype="popup" date-format="yyyy/mm/dd"></sbux-datepicker>
{% endhighlight %}

### STEP 2. default format 변경
<div>1. sbux/assets/js/locale/SBUxMessage_date.js 파일을 엽니다.</div>
<br>
<div>
    2. DATEPICKER_FORMAT의 value를 원하는 format형식으로 변경합니다.<br>
    (defuatl : yyyy/mm/dd)
</div>
<br>
{% highlight html %}
DATEPICKER_FORMAT: 'yyyy.mm.dd',
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/datepicker.dateformat#datepicker" target="_blank">datepicker > date-format</a><br>
    </div>
</div>