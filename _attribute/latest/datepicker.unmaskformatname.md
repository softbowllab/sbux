---
title:  unmask-format-name
date:   2018-12-04
categories: ["latest","datepicker"]
order: 21
---

unmask-format-name
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
        <td class="tdTitle tdBg">설명</td>
        <td colspan="3">form serialize 출력시 전달할 key값을 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle tdBg">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">선결조건</td>
        <td>unmask-format</td>
        <td class="tdTitle tdBg">연관자료</td>
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
        <td class="tdTitle tdBg tdCenter" colspan="4">속성값</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">기본값</td>
        <td>해당없음</td>
        <td class="tdTitle tdBg">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">값형태</td>
        <td colspan="3">원하는 key 값</td>
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
        <td class="tdTitle tdBg tdCenter" colspan="5">사용제한</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype</td>
        <td class="tdCenter">inline</td>
        <td class="tdCenter">popup</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
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
<form id="testForm1">
    <sbux-datepicker id="sbIdx1" name="sbTagNm1" uitype="inline" unmask-format-name="unmaskFormatNm1" unmask-format="yyyymmdd"></sbux-datepicker>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm1').serialize());">
{% endhighlight %}

<br>

▶ Preview

<form id="testForm1">
    <sbux-datepicker id="sbIdx1" name="sbTagNm1" uitype="inline" unmask-format-name="unmaskFormatNm1" unmask-format="yyyymmdd"></sbux-datepicker>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm1').serialize());">

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<form id="testForm2">
    <sbux-datepicker id="sbIdx2" name="sbTagNm2" uitype="popup" unmask-format-name="unmaskFormatNm2" unmask-format="yyyymmdd"></sbux-datepicker>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm2').serialize());">
{% endhighlight %}

<br>

▶ Preview

<form id="testForm2">
    <sbux-datepicker id="sbIdx2" name="sbTagNm2" uitype="popup" unmask-format-name="unmaskFormatNm2" unmask-format="yyyymmdd"></sbux-datepicker>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm2').serialize());">

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
<form id="testForm3">
    <div id="sbArea1"></div>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm3').serialize());">
<script>
    $(document).ready(function(){
        $('#sbArea1').sbDatepicker({
            name : 'sbScriptNm1',
            uitype : 'inline',
            unmaskFormatName : 'scriptNm1',
            unmaskFormat : 'yyyymmdd'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<form id="testForm3">
    <div id="sbArea1"></div>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm3').serialize());">
<script>
    $(document).ready(function(){
        $('#sbArea1').sbDatepicker({
            name : 'sbScriptNm1',
            uitype : 'inline',
            unmaskFormatName : 'scriptNm1',
            unmaskFormat : 'yyyymmdd'
        });
    });  
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<form id="testForm4">
    <div id="sbArea2"></div>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm4').serialize());">
<script>
    $(document).ready(function(){
        $('#sbArea2').sbDatepicker({
            name : 'sbScriptNm2',
            uitype : 'popup',
            unmaskFormatName : 'scriptNm1',
            unmaskFormat : 'yyyymmdd'
        });
    });  
</script>
{% endhighlight %}

<br>

▶ Preview 

<form id="testForm4">
    <div id="sbArea2"></div>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm4').serialize());">
<script>
    $(document).ready(function(){
        $('#sbArea2').sbDatepicker({
            name : 'sbScriptNm2',
            uitype : 'popup',
            unmaskFormatName : 'scriptNm1',
            unmaskFormat : 'yyyymmdd'
        });
    });  
</script>

    </div>
</div>