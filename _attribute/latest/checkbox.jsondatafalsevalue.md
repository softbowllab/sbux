---
title:  jsondata-false-value
date:   2018-05-14
categories: ["latest","checkbox"]
order: 11
---

jsondata-false-value
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
            호출한 json data에서 false value에 해당하는 key값을 지정합니다.<br>
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
        <td>falseValue</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">호출한 json data에 false value에 해당하는 key값</td>
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
### Example (Tag)

{% highlight html %}
<script>
    var SBUxData = [
        { text : "빨강", tValueKey : "False" },
        { text : "초록", tValueKey : "거짓" },
        { text : "파랑", tValueKey : "0" }
    ];
</script>
<sbux-checkbox id="sbIdx" name="sbTagNm" uitype="normal" jsondata-ref="SBUxData" jsondata-false-value="tValueKey"></sbux-checkbox>
<input type="button" value="get()" onclick="alert(JSON.stringify(SBUxMethod.get('sbTagNm')))">
{% endhighlight %}

### Preview

<script>
    var SBUxData = [
        { text : "빨강", tValueKey : "False" },
        { text : "초록", tValueKey : "거짓" },
        { text : "파랑", tValueKey : "0" }
    ];
</script>
<sbux-checkbox id="sbIdx" name="sbTagNm" uitype="normal" jsondata-ref="SBUxData" jsondata-false-value="tValueKey"></sbux-checkbox>
<input type="button" value="get()" onclick="alert(JSON.stringify(SBUxMethod.get('sbTagNm')))">

---
### Example (Script)

{% highlight html %}
<div id="sbArea"></div>
<input type="button" value="get()" onclick="alert(JSON.stringify(SBUxMethod.get('sbScriptNm')))">
<script>
    var SBUxData = [
        { text : "빨강", tValueKey : "False" },
        { text : "초록", tValueKey : "거짓" },
        { text : "파랑", tValueKey : "0" }
    ];
    $(document).ready(function(){
        $('#sbArea').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            jsondataFalseValue : 'tValueKey'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea"></div>
<input type="button" value="get()" onclick="alert(JSON.stringify(SBUxMethod.get('sbScriptNm')))">
<script>
    $(document).ready(function(){
        $('#sbArea').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            jsondataFalseValue : 'tValueKey'
        });
    });  
</script>