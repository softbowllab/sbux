---
title:  min-date
date:   2018-12-04
categories: ["latest","datepicker"]
order: 7
---

min-date
===

---

## Description

<table style="width:100%">
    <colgroup>
        <col width="15%"/>
        <col width="35%"/>
        <col width="15%"/>
        <col width="35%"/>
    </colgroup>
    <tr>
        <td class="tdTitle">설명</td>
        <td colspan="3">캘린더의 선택 가능한 최소 일자를 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>해당없음</td>
        <td class="tdTitle">연관자료</td>
        <td>해당없음</td>
    </tr>
</table>
<table style="width:100%">
    <colgroup>
        <col width="15%"/>
        <col width="35%"/>
        <col width="15%"/>
        <col width="35%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg" colspan="4">속성값</td>
    </tr>
    <tr>
        <td class="tdTitle">기본값</td>
        <td>해당없음</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">
            최소 일자로 지정할 날짜<br>
            * date-format으로 지정된 형태로 설정해야 합니다.
        </td>
    </tr>
</table>
<table style="width:100%">
    <colgroup>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg" colspan="5">사용제한</td>
    </tr>
    <tr>
        <td>uitype</td>
        <td class="tdCenter">inline</td>
        <td class="tdCenter">popup</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2" title-text-array="inline^popup">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-datepicker id="sbIdx1" name="sbTagNm1" uitype="inline" min-date="20181208"></sbux-datepicker>
{% endhighlight %}

<br>

▶ Preview

<sbux-datepicker id="sbIdx1" name="sbTagNm1" uitype="inline" min-date="20181208"></sbux-datepicker>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<sbux-datepicker id="sbIdx2" name="sbTagNm2" uitype="popup" min-date="20181208"></sbux-datepicker>
{% endhighlight %}

<br>

▶ Preview

<sbux-datepicker id="sbIdx2" name="sbTagNm2" uitype="popup" min-date="20181208"></sbux-datepicker>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2" title-text-array="inline^popup">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbDatepicker({
            name : 'sbScriptNm1',
            uitype : 'inline',
            minDate : '20181208'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbDatepicker({
            name : 'sbScriptNm1',
            uitype : 'inline',
            minDate : '20181208'
        });
    });  
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2').sbDatepicker({
            name : 'sbScriptNm2',
            uitype : 'popup',
            minDate : '20181208'
        });
    });  
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2').sbDatepicker({
            name : 'sbScriptNm2',
            uitype : 'popup',
            minDate : '20181208'
        });
    });  
</script>

    </div>
</div>