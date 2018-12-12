---
title:  required
date:   2018-12-04
categories: ["latest","input"]
order: 27
---

required
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
        <td colspan="3">Component에 필수입력 속성을 지정합니다.</td>
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
        <td colspan="3">required</td>
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
        <td class="tdCenter">text</td>
        <td class="tdCenter">password</td>
        <td class="tdCenter">search</td>
        <td class="tdCenter">hidden</td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdCenter">X</td>
    </tr>
</table>

---
### Example (Tag)

{% highlight html %}
<form id="testForm1">
    <sbux-input id="sbIdx" name="sbTagNm" uitype="text" required="required"></sbux-input>
    <input type="submit" value="submit">
</form>
{% endhighlight %}

### Preview

<form id="testForm1">
    <sbux-input id="sbIdx" name="sbTagNm" uitype="text" required="required"></sbux-input>
    <input type="submit" value="submit">
</form>

---
### Example (Script)

{% highlight html %}
<form id="testForm2">
    <div id="sbArea"></div>
    <input type="submit" value="submit">
</form>
<script>
    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            required : 'required'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<form id="testForm2">
    <div id="sbArea"></div>
    <input type="submit" value="submit">
</form>
<script>
    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            required : 'required'
        });
    }); 
</script>