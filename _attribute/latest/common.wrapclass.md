---
title:  wrap-class
date:   2018-12-04
categories: ["latest","common"]
order: 8
---

wrap-class
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
        <td colspan="3">Component의 최상단 root에 class를 지정합니다.</td>
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
	.customClass{font-weight:bold;}
</style>

<sbux-input id="sbIdx" name="sbTagNm" uitype="text" wrap-class="customClass"></sbux-input>
{% endhighlight %}

## Preview
<style>
	.customClass{font-weight:bold;}
</style>
<sbux-input id="sbIdx" name="sbTagNm" uitype="text" wrap-class="customClass"></sbux-input>

---
## Example (Script)

{% highlight html %}
<style>
	.customClass{font-weight:bold;}
</style>

<div id="sbArea"></div>

<script>
    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
			wrapClass : 'customClass'
        });
    }); 
</script>
{% endhighlight %}

## Preview 
<style>
	.customClass{font-weight:bold;}
</style>

<div id="sbArea"></div>

<script>
    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
			wrapClass : 'customClass'
        });
    }); 
</script>