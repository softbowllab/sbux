---
title:  show-button-bar
date:   2018-12-04
categories: ["latest","datepicker"]
order: 9
---

show-button-bar
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
        <td colspan="3">캘린더 하단의 버튼바 표시 여부를 설정합니다.</td>
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
        <td>true</td>
        <td class="tdTitle">자료형</td>
        <td>boolean</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">true | false</td>
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
        <td class="tdCenter">X</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="popup">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-datepicker id="sbIdx" name="sbTagNm" uitype="popup" show-button-bar="false"></sbux-datepicker>
{% endhighlight %}

<br>

▶ Preview

<sbux-datepicker id="sbIdx" name="sbTagNm" uitype="popup" show-button-bar="false"></sbux-datepicker>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="popup">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbPicker({
            name : 'sbScriptNm',
            uitype : 'popup',
            showButtonBar : false
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbDatepicker({
            name : 'sbScriptNm',
            uitype : 'popup',
            showButtonBar : false
        });
    });  
</script>

    </div>
</div>