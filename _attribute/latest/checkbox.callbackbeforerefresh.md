---
title:  callback-before-refresh
date:   2018-05-14
categories: ["latest","checkbox"]
order: 13
---

callback-before-refresh
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
            Component를 refresh 하기 이전에 호출되는 function을 지정합니다.<br>
            * 고정형일 경우 첫번째 checkbox에 설정해야합니다.
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
        <td colspan="3">호출할 function명</td>
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
    function beforeRefreshfunc(){
        alert('refresh이전 호출');
    }
</script>
<sbux-checkbox id="sbIdx1" name="sbTagNm" uitype="normal" text="SBUx Checkbox1" callback-before-refresh="beforeRefreshfunc"></sbux-checkbox>
<sbux-checkbox id="sbIdx2" name="sbTagNm" uitype="normal" text="SBUx Checkbox2"></sbux-checkbox>
<sbux-checkbox id="sbIdx3" name="sbTagNm" uitype="normal" text="SBUx Checkbox3"></sbux-checkbox>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbTagNm')">
{% endhighlight %}

### Preview

<script>
    function beforeRefreshfunc(){
        alert('refresh이전 호출');
    }
</script>
<sbux-checkbox id="sbIdx1" name="sbTagNm" uitype="normal" text="SBUx Checkbox1" callback-before-refresh="beforeRefreshfunc"></sbux-checkbox>
<sbux-checkbox id="sbIdx2" name="sbTagNm" uitype="normal" text="SBUx Checkbox2"></sbux-checkbox>
<sbux-checkbox id="sbIdx3" name="sbTagNm" uitype="normal" text="SBUx Checkbox3"></sbux-checkbox>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbTagNm')">

---
### Example (Script)

{% highlight html %}
<div id="sbArea1"></div>
<div id="sbArea2"></div>
<div id="sbArea3"></div>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbScriptNm')">
<script>
    function beforeRefreshfunc(){
        alert('refresh이전 호출');
    }
    $(document).ready(function(){
        $('#sbArea1').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Checkbox1',
            callbackBeforeRefresh : 'beforeRefreshfunc'
        });
		$('#sbArea2').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Checkbox2'
        });
		$('#sbArea3').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Checkbox3'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea1"></div>
<div id="sbArea2"></div>
<div id="sbArea3"></div>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbScriptNm')">
<script>
    $(document).ready(function(){
        $('#sbArea1').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Checkbox1',
            callbackBeforeRefresh : 'beforeRefreshfunc'
        });
		$('#sbArea2').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Checkbox2'
        });
		$('#sbArea3').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Checkbox3'
        });
    });   
</script>