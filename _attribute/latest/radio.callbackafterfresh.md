---
title:  callback-after-refresh
date:   2018-05-14
categories: ["latest","radio"]
order: 11
---

callback-after-refresh
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
            Component를 refresh 한 이후에 호출되는 function을 지정합니다.<br>
            * 고정형일 경우 첫번째 radio에 설정해야합니다.
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
### Example & Preview (Tag)

<script>
    var SBUxData = [
        { text : "SBUx Radio1" },
        { text : "SBUx Radio2" },
        { text : "SBUx Radio3" }
    ];
    function afterRefreshfunc(){
        alert('refresh이후 호출');
    }
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}" title-text-array="normal{고정형,변동형}">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    function afterRefreshfunc(){
        alert('refresh이후 호출');
    }
</script>
<sbux-radio id="sbIdx1" name="sbTagNm" uitype="normal" text="SBUx Radio1" callback-after-refresh="afterRefreshfunc"></sbux-radio>
<sbux-radio id="sbIdx2" name="sbTagNm" uitype="normal" text="SBUx Radio2"></sbux-radio>
<sbux-radio id="sbIdx3" name="sbTagNm" uitype="normal" text="SBUx Radio3"></sbux-radio>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbTagNm')">
{% endhighlight %}

<br>

▶ Preview

<sbux-radio id="sbIdx1" name="sbTagNm" uitype="normal" text="SBUx Radio1" callback-after-refresh="afterRefreshfunc"></sbux-radio>
<sbux-radio id="sbIdx2" name="sbTagNm" uitype="normal" text="SBUx Radio2"></sbux-radio>
<sbux-radio id="sbIdx3" name="sbTagNm" uitype="normal" text="SBUx Radio3"></sbux-radio>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbTagNm')">

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var SBUxData = [
        { text : "SBUx Radio1" },
        { text : "SBUx Radio2" },
        { text : "SBUx Radio3" }
    ];
    function afterRefreshfunc(){
        alert('refresh이후 호출');
    }
</script>
<sbux-radio id="sbIdx4" name="sbTagNm4" uitype="normal" jsondata-ref="SBUxData" callback-after-refresh="afterRefreshfunc"></sbux-radio>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbTagNm4')">
{% endhighlight %}

<br>

▶ Preview

<sbux-radio id="sbIdx4" name="sbTagNm4" uitype="normal" jsondata-ref="SBUxData" callback-after-refresh="afterRefreshfunc"></sbux-radio>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbTagNm4')">

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="normal(변동형)">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea1"></div>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbScriptNm')">
<script>
    var SBUxData = [
        { text : "SBUx Radio1" },
        { text : "SBUx Radio2" },
        { text : "SBUx Radio3" }
    ];
    function afterRefreshfunc(){
        alert('refresh이후 호출');
    }
    $(document).ready(function(){
        $('#sbArea1').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            callbackAfterRefresh : 'afterRefreshfunc'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea1"></div>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbScriptNm')">
<script>
    $(document).ready(function(){
        $('#sbArea1').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            callbackAfterRefresh : 'afterRefreshfunc'
        });
    });  
</script>

    </div>
</div>