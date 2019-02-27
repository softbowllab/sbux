---
title:  캘린더값을 서버로 포맷없이 전송기
date:   2018-12-04
categories: ["latest","adv"]
order: 4
---

캘린더 입력값을 서버로 포맷없이 전송하기
===

---

### STEP 1. unmask-format 속성 추가
<div>1. 컴포넌트에 unmask-format 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-datepicker id="sbIdx1" name="sbName1" uitype="popup" date-format="yyyy/mm/dd" unmask-format="yyyymmdd"></sbux-datepicker>
{% endhighlight %}

### STEP 2. default unmask format 변경
<div>1. sbux/assets/js/locale/SBUxMessage_date.js 파일을 엽니다.</div>
<br>
<div>
    2. DATEPICKER_UNMASK_FORMAT의 value를 원하는 unmask format형식으로 변경합니다.<br>
    (defuatl : yyyymmdd)
</div>
<br>
{% highlight html %}
DATEPICKER_FORMAT: 'yyyymmdd',
{% endhighlight %}

### STEP 3. default unmask format name 변경
<div>1. 컴포넌트에 unmask-format-name 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-datepicker id="sbIdx1" name="sbName1" uitype="popup" date-format="yyyy/mm/dd" unmask-format="yyyymmdd" unmask-format-name="formatName"></sbux-datepicker>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/datepicker.unmaskformat#datepicker" target="_blank">datepicker > unmask-format</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/datepicker.unmaskformatname#datepicker" target="_blank">datepicker > unmask-format-name</a><br>
    </div>
</div>