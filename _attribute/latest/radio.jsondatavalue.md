---
title:  jsondata-value
date:   2018-05-14
categories: ["latest","radio"]
order: 8
---

jsondata-value
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
            호출한 json data에서 value에 해당하는 key값을 지정합니다.<br>
            * 변동형으로 컴포넌트를 구성할때 사용합니다.
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
        <td>jsondata-ref</td>
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
        <td>text</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">호출한 json data에 value에 해당하는 key값</td>
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
        <td class="tdCenter">normal</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<script>
    var SBUxData = [
        { text : "SBUx Radio1", valueKey : "radio1" },
        { text : "SBUx Radio2", valueKey : "radio2" },
        { text : "SBUx Radio3", valueKey : "radio3" }
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="normal(변동형)">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var SBUxData = [
        { text : "SBUx Radio1", valueKey : "radio1" },
        { text : "SBUx Radio2", valueKey : "radio2" },
        { text : "SBUx Radio3", valueKey : "radio3" }
    ];
</script>
<sbux-radio id="sbIdx1" name="sbTagNm1" uitype="normal" jsondata-ref="SBUxData" jsondata-value="valueKey"></sbux-radio>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm1'))">
{% endhighlight %}

<br>

▶ Preview

<sbux-radio id="sbIdx1" name="sbTagNm1" uitype="normal" jsondata-ref="SBUxData" jsondata-value="valueKey"></sbux-radio>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm1'))">

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="normal(변동형)">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea1"></div>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbScriptNm'))">
<script>
    var SBUxData = [
        { text : "SBUx Radio1", valueKey : "radio1" },
        { text : "SBUx Radio2", valueKey : "radio2" },
        { text : "SBUx Radio3", valueKey : "radio3" }
    ];
    $(document).ready(function(){
        $('#sbArea1').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            jsondataValue : 'valueKey'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea1"></div>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbScriptNm'))">
<script>
    $(document).ready(function(){
        $('#sbArea1').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            jsondataValue : 'valueKey'
        });
    });  
</script>

    </div>
</div>