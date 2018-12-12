---
title:  false-value
date:   2018-05-14
categories: ["latest","checkbox"]
order: 4
---

false-value
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
        <td colspan="3">Component 선택해제시 model에 저장되는 value를 지정합니다.</td>
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
        <td>false</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">선택해제시 model에 저장될 값</td>
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
<sbux-checkbox id="sbIdx1" name="sbTagNm.a" uitype="normal" false-value="FALSE"></sbux-checkbox>
<sbux-checkbox id="sbIdx2" name="sbTagNm.b" uitype="normal" false-value="거짓"></sbux-checkbox>
<sbux-checkbox id="sbIdx3" name="sbTagNm.c" uitype="normal" false-value="0"></sbux-checkbox>
<input type="button" value="get()" onclick="alert(JSON.stringify(SBUxMethod.get('sbTagNm')))">
{% endhighlight %}

### Preview

<sbux-checkbox id="sbIdx1" name="sbTagNm.a" uitype="normal" false-value="FALSE"></sbux-checkbox>
<sbux-checkbox id="sbIdx2" name="sbTagNm.b" uitype="normal" false-value="거짓"></sbux-checkbox>
<sbux-checkbox id="sbIdx3" name="sbTagNm.c" uitype="normal" false-value="0"></sbux-checkbox>
<input type="button" value="get()" onclick="alert(JSON.stringify(SBUxMethod.get('sbTagNm')))">

---
### Example (Script)

{% highlight html %}
<div id="sbArea1"></div>
<div id="sbArea2"></div>
<div id="sbArea3"></div>
<input type="button" value="get()" onclick="alert(JSON.stringify(SBUxMethod.get('sbScriptNm')))">
<script>
    $(document).ready(function(){
        $('#sbArea1').sbCheckbox({
            name : 'sbScriptNm.a',
            uitype : 'normal',
            falseValue : 'FALSE'
        });
        $('#sbArea2').sbCheckbox({
            name : 'sbScriptNm.b',
            uitype : 'normal',
            falseValue : '거짓'
        });
        $('#sbArea3').sbCheckbox({
            name : 'sbScriptNm.c',
            uitype : 'normal',
            falseValue : '0'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea1"></div>
<div id="sbArea2"></div>
<div id="sbArea3"></div>
<input type="button" value="get()" onclick="alert(JSON.stringify(SBUxMethod.get('sbScriptNm')))">
<script>
    $(document).ready(function(){
        $('#sbArea1').sbCheckbox({
            name : 'sbScriptNm.a',
            uitype : 'normal',
            falseValue : 'FALSE'
        });
        $('#sbArea2').sbCheckbox({
            name : 'sbScriptNm.b',
            uitype : 'normal',
            falseValue : '거짓'
        });
        $('#sbArea3').sbCheckbox({
            name : 'sbScriptNm.c',
            uitype : 'normal',
            falseValue : '0'
        });
    });  
</script>