---
title:  next-focus-id
date:   2018-12-04
categories: ["latest","input"]
order: 8
---

next-focus-id
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
        <td colspan="3">Enter 키를 입력했을때 focus를 이동할 Component를 지정합니다.</td>
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
        <td colspan="3">focus를 이동시킬 Component의 ID</td>
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
<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text" next-focus-id="sbIdx2"></sbux-input>
<sbux-input id="sbIdx2" name="sbTagNm2" uitype="text" next-focus-id="sbIdx1"></sbux-input>
{% endhighlight %}

### Preview

<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text" next-focus-id="sbIdx2"></sbux-input>
<sbux-input id="sbIdx2" name="sbTagNm2" uitype="text" next-focus-id="sbIdx1"></sbux-input>

---
### Example (Script)

{% highlight html %}
<div id="sbArea1"></div>
<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            nextFocusId : 'sbArea2'
        });
        $('#sbArea2').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            nextFocusId : 'sbArea1'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea1"></div>
<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            nextFocusId : 'sbArea2'
        });
        $('#sbArea2').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            nextFocusId : 'sbArea1'
        });
    }); 
</script>