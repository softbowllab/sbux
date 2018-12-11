---
title:  unmask-format
date:   2018-12-04
categories: ["latest","picker"]
order: 20
---

unmask-format
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
        <td colspan="3">form serialize 출력 형태를 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>unmask-format-name</td>
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
        <td colspan="3">원하는 출력 형태</td>
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
<form id="testForm1">
    <sbux-picker id="sbIdx1" name="sbTagNm1" uitype="date" mode="inline" unmask-format-name="unmaskFormatNm1" unmask-format="yyyymmdd"></sbux-picker>
    <sbux-picker id="sbIdx2" name="sbTagNm2" uitype="date" mode="popup" unmask-format-name="unmaskFormatNm2" unmask-format="yyyymmdd"></sbux-picker>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm1').serialize());">
{% endhighlight %}

### Preview

<form id="testForm1">
    <sbux-picker id="sbIdx1" name="sbTagNm1" uitype="date" mode="inline" unmask-format-name="tagNm1" unmask-format="yyyymmdd"></sbux-picker>
    <sbux-picker id="sbIdx2" name="sbTagNm2" uitype="date" mode="popup" unmask-format-name="tagNm2" unmask-format="yyyymmdd"></sbux-picker>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm1').serialize());">

---
### Example (Script)

{% highlight html %}
<form id="testForm2">
    <div id="sbArea1"></div>
    <div id="sbArea2"></div>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm2').serialize());">
<script>
    $(document).ready(function(){
        $('#sbArea1').sbPicker({
            name : 'sbScriptNm1',
            uitype : 'date',
			mode : 'inline',
            unmaskFormatName : 'scriptNm1',
            unmaskFormat : 'yyyymmdd'
        });
        $('#sbArea2').sbPicker({
            name : 'sbScriptNm2',
            uitype : 'date',
			mode : 'popup',
            unmaskFormatName : 'scriptNm1',
            unmaskFormat : 'yyyymmdd'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<form id="testForm2">
    <div id="sbArea1"></div>
    <div id="sbArea2"></div>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm2').serialize());">
<script>
    $(document).ready(function(){
        $('#sbArea1').sbPicker({
            name : 'sbScriptNm1',
            uitype : 'date',
			mode : 'inline',
            unmaskFormatName : 'scriptNm1',
            unmaskFormat : 'yyyymmdd'
        });
        $('#sbArea2').sbPicker({
            name : 'sbScriptNm2',
            uitype : 'date',
			mode : 'popup',
            unmaskFormatName : 'scriptNm1',
            unmaskFormat : 'yyyymmdd'
        });
    });
</script>