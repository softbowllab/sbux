---
title:  date-format
date:   2018-12-04
categories: ["latest","picker"]
order: 18
---

date-format
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
        <td colspan="3">
            Component의 input에 보여지는 형태를 지정하는 format을 설정합니다.<br>
            * inline에서는 unmask-format과 동일한 동작을 합니다.
        </td>
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
        <td colspan="3">아래 표 참고</td>
    </tr>
</table>
<table style="width:100%">
    <colgroup>
        <col width="25%"/>
        <col width="75%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg" >사용</td>
        <td class="tdTitle tdBg" >구문</td>
    </tr>
    <tr>
        <td>4자리수 년도(2018)</td>
        <td>yyyy/mm/dd</td>
    </tr>
    <tr>
        <td>2자리수 년도(18)</td>
        <td>yy/mm/dd</td>
    </tr>
    <tr>
        <td>숫자 월(0이 붙지않음 / 1)</td>
        <td>yyyy/m/dd</td>
    </tr>
    <tr>
        <td>숫자 월(0이 붙음 / 01)</td>
        <td>yyyy/mm/dd</td>
    </tr>
    <tr>
        <td>월 명(1월 / locale : en시 jan)</td>
        <td>yyyy/mmm/dd</td>
    </tr>
    <tr>
        <td>월 명(1월 / locale : en시 january)</td>
        <td>yyyy/mmmm/dd</td>
    </tr>
    <tr>
        <td>숫자 일(0이 붙지않음 / 1)</td>
        <td>yyyy/mmmm/d</td>
    </tr>
    <tr>
        <td>숫자 일(0이 붙음 / 01)</td>
        <td>yyyy/mmmm/dd</td>
    </tr>
    <tr>
        <td>구분자</td>
        <td>
            yyyy.mm.dd<br>
            * '/' 이외에 다양한 구분자 사용가능
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
<sbux-picker id="sbIdx" name="sbTagNm" uitype="date" mode="popup" date-format="yyyy.mm.dd"></sbux-picker>
{% endhighlight %}

### Preview

<sbux-picker id="sbIdx" name="sbTagNm" uitype="date" mode="popup" date-format="yyyy.mm.dd"></sbux-picker>

---
### Example (Script)

{% highlight html %}
<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbPicker({
            name : 'sbScriptNm',
            uitype : 'date',
			mode : 'popup',
            dateFormat : 'yyyy.mm.dd'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbPicker({
            name : 'sbScriptNm',
            uitype : 'date',
			mode : 'popup',
            dateFormat : 'yyyy.mm.dd'
        });
    });  
</script>