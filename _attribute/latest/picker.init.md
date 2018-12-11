---
title:  init
date:   2018-12-04
categories: ["latest","picker"]
order: 2
---

init
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
        <td colspan="3">Component의 초기값을 지정합니다.</td>
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
        <td colspan="3">
            Component에 지정 할 초기값<br>
            * date-format으로 지정된 형태로 설정해야 합니다.
        </td>
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
        <td>mode</td>
        <td class="tdCenter">inline</td>
        <td class="tdCenter">popup</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example (Tag)

{% highlight html %}
<sbux-picker id="sbIdx1" name="sbTagNm1" uitype="date" mode="inline" init="20180502"></sbux-picker>
<sbux-picker id="sbIdx2" name="sbTagNm2" uitype="date" mode="popup" init="20180502"></sbux-picker>
{% endhighlight %}

### Preview

<sbux-picker id="sbIdx1" name="sbTagNm1" uitype="date" mode="inline" init="20180502"></sbux-picker>
<sbux-picker id="sbIdx2" name="sbTagNm2" uitype="date" mode="popup" init="20180502"></sbux-picker>

---
### Example (Script)

{% highlight html %}
<div id="sbArea1"></div>
<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbPicker({
            name : 'sbScriptNm1',
            uitype : 'date',
			mode : 'inline',
            init : '20180502'
        });
		$('#sbArea2').sbPicker({
            name : 'sbScriptNm2',
            uitype : 'date',
			mode : 'popup',
            init : '20180502'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea1"></div>
<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbPicker({
            name : 'sbScriptNm1',
            uitype : 'date',
			mode: 'inline',
            init: '20180502'
        });
		$('#sbArea2').sbPicker({
            name : 'sbScriptNm2',
            uitype : 'date',
			mode: 'popup',
            init: '20180502'
        });
    }); 
</script>