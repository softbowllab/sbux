---
title:  model-name
date:   2018-12-04
categories: ["latest","common"]
order: 4
---

model-name
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
        <td colspan="3">Component의 name이 중복될 경우 고유 model-name을 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td class="tdRed">필수</td>
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
        <td colspan="3">Component의 Model-name</td>
    </tr>
</table>

---
## Example (Tag)

{% highlight html %}
<sbux-input id="sbIdx1" name="sbTagNm" uitype="text" model-name="sbModelNm1"></sbux-input>
<sbux-input id="sbIdx2" name="sbTagNm" uitype="text" model-name="sbModelNm2"></sbux-input>
{% endhighlight %}

## Preview

<sbux-input id="sbIdx1" name="sbTagNm" uitype="text" model-name="sbModelNm1"></sbux-input>
<sbux-input id="sbIdx2" name="sbTagNm" uitype="text" model-name="sbModelNm2"></sbux-input>

---
## Example (Script)

{% highlight html %}
<div id="sbArea1"></div>
<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            modelName : 'sbModelNm1'
        });
        $('#sbArea2').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            modelName : 'sbModelNm2'
        });
    }); 
</script>
{% endhighlight %}

## Preview 

<div id="sbArea1"></div>
<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            modelName : 'sbModelNm1'
        });
        $('#sbArea2').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            modelName : 'sbModelNm2'
        });
    }); 
</script>