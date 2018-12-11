---
title:  starting-day
date:   2018-12-04
categories: ["latest","picker"]
order: 6
---

starting-day
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
        <td colspan="3">캘린더의 시작 요일을 지정합니다.</td>
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
        <td>1(월)</td>
        <td class="tdTitle">자료형</td>
        <td>number</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">0(일) | 1(월) | 2(화) | 3(수) | 4(목) | 5(금) | 6(토)</td>
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
        <td>mode</td>
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
### Example (Tag)

{% highlight html %}
<sbux-picker id="sbIdx1" name="sbTagNm1" uitype="date" mode="inline" starting-day="3"></sbux-picker>
<sbux-picker id="sbIdx2" name="sbTagNm2" uitype="date" mode="popup" starting-day="3"></sbux-picker>
{% endhighlight %}

### Preview

<sbux-picker id="sbIdx1" name="sbTagNm1" uitype="date" mode="inline" starting-day="3"></sbux-picker>
<sbux-picker id="sbIdx2" name="sbTagNm2" uitype="date" mode="popup" starting-day="3"></sbux-picker>

---
### Example (Script)

{% highlight html %}
<div id="sbArea1"></div>
<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbPicker({
            name : 'sbScriptNm1',
            uitype : 'date',
			mode : 'inline',
            startingDay : 3
        });
        $('#sbArea2').sbPicker({
            name : 'sbScriptNm2',
            uitype : 'date',
			mode : 'popup',
            startingDay : 3
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea1"></div>
<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbPicker({
            name : 'sbScriptNm1',
            uitype : 'date',
			mode : 'inline',
            startingDay : 3
        });
        $('#sbArea2').sbPicker({
            name : 'sbScriptNm2',
            uitype : 'date',
			mode : 'popup',
            startingDay : 3
        });
    }); 
</script>