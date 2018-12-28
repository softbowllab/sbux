---
title:  uitype
date:   2018-05-14
categories: ["latest","radio"]
order: 0
---

uitype
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
        <td colspan="3">Component의 type을 지정합니다.</td>
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
        <td colspan="3">normal</td>
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
<sbux-radio id="sbIdx1" name="sbTagNm" uitype="normal" text="SBUx Radio1"></sbux-radio>
<sbux-radio id="sbIdx2" name="sbTagNm" uitype="normal" text="SBUx Radio2"></sbux-radio>
<sbux-radio id="sbIdx3" name="sbTagNm" uitype="normal" text="SBUx Radio3"></sbux-radio>
{% endhighlight %}

### Preview

<sbux-radio id="sbIdx1" name="sbTagNm" uitype="normal" text="SBUx Radio1"></sbux-radio>
<sbux-radio id="sbIdx2" name="sbTagNm" uitype="normal" text="SBUx Radio2"></sbux-radio>
<sbux-radio id="sbIdx3" name="sbTagNm" uitype="normal" text="SBUx Radio3"></sbux-radio>

---
### Example (Script)

{% highlight html %}
<div id="sbArea1"></div>
<div id="sbArea2"></div>
<div id="sbArea3"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio1'
        });
		$('#sbArea2').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio2'
        });
		$('#sbArea3').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio3'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea1"></div>
<div id="sbArea2"></div>
<div id="sbArea3"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio1'
        });
		$('#sbArea2').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio2'
        });
		$('#sbArea3').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio3'
        });
    });   
</script>