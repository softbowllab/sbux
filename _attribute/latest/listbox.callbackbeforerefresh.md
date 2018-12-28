---
title:  callback-before-refresh
date:   2018-05-14
categories: ["latest","listbox"]
order: 8
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
        <td colspan="3">Component를 refresh 하기 이전에 호출되는 function을 지정합니다.</td>
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
        <td class="tdCenter">single</td>
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
    var jsondata = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
    function beforeRefreshfunc(){
        alert('refresh이전 호출');
    };
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}" title-text-array="single{고정형,변동형}" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    function beforeRefreshfunc(){
        alert('refresh이전 호출');
    };
</script>
<sbux-listbox id="sbIdx1_1" name="sbTagNm1_1" uitype="single" callback-before-refresh="beforeRefreshfunc">
    <option-item>input</option-item>
    <option-item>picker</option-item>
    <option-item>radio</option-item>
    <option-item>select</option-item>
</sbux-listbox>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbTagNm1_1')">
{% endhighlight %}


<br>

▶ Preview 

<sbux-listbox id="sbIdx1_1" name="sbTagNm1_1" uitype="single" callback-before-refresh="beforeRefreshfunc">
    <option-item>input</option-item>
    <option-item>picker</option-item>
    <option-item>radio</option-item>
    <option-item>select</option-item>
</sbux-listbox>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbTagNm1_1')">

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var jsondata = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
    function beforeRefreshfunc(){
        alert('refresh이전 호출');
    };
</script>
<sbux-listbox id="sbIdx1_2" name="sbTagNm1_2" uitype="single" jsondata-ref="jsondata" callback-before-refresh="beforeRefreshfunc"></sbux-listbox>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbTagNm1_2')">
{% endhighlight %}


<br>

▶ Preview 

<sbux-listbox id="sbIdx1_2" name="sbTagNm1_2" uitype="single" jsondata-ref="jsondata" callback-before-refresh="beforeRefreshfunc"></sbux-listbox>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbTagNm1_2')">

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="single(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbScriptNm2_1')">
<script>
    var jsondata = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
    function beforeRefreshfunc(){
        alert('refresh이전 호출');
    };
    $(document).ready(function(){
        $('#sbArea2_1').sbListbox({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'jsondata',
            callbackBeforeRefresh : 'beforeRefreshfunc'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<input type="button" value="refresh()" onclick="SBUxMethod.refresh('sbScriptNm2_1')">
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbListbox({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'jsondata',
            callbackBeforeRefresh : 'beforeRefreshfunc'
        });
    }); 
</script>

    </div>
</div>