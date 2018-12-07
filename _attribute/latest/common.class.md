---
title:  class
date:   2018-12-04
categories: ["latest","common"]
order: 7
---

class
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
        <td colspan="3">Component에 class를 지정합니다.</td>
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
        <td colspan="3">지정 할 class명</td>
    </tr>
</table>

---
## Example (Tag)

{% highlight html %}
<style>
	.customClass{width:100px;}
</style>

<sbux-input id="sbIdx" name="sbTagNm" uitype="text" class="customClass"></sbux-input>
{% endhighlight %}

## Preview

<sbux-input id="sbIdx" name="sbTagNm" uitype="text" class="customClass"></sbux-input>

---
## Example (Script)

{% highlight html %}
<style>
	.customClass{width:100px;}
</style>

<div id="sbArea"></div>

<script>
    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
			class : 'customClass'
        });
    }); 
</script>
{% endhighlight %}

## Preview 
<style>
	.customClass{width:100px;}
</style>

<div id="sbArea"></div>

<script>
    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
			class : 'customClass'
        });
    }); 
</script>