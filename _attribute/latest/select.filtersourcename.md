---
title:  filter-source-name
date:   2018-05-14
categories: ["latest","select"]
order: 7
---

filter-source-name
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
            master-detail관계에서 detail의 master를 지정합니다.<br>
            * 변동형으로 컴포넌트를 구성할때 사용합니다.
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
        <td>jsondata-ref, jsondata-filter</td>
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
        <td>stirng</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">연결할 master의 name</td>
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
        <td class="tdCenter">checkbox</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdCenter">X</td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<script>
    var json_master = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];

    var json_detail = [
        {text : 'text', value : 'text', mastervalue : 'iValue'},
        {text : 'password', value : 'password', mastervalue : 'iValue'},
        {text : 'popup', value : 'popup', mastervalue : 'pValue'},
        {text : 'inline', value : 'inline', mastervalue : 'pValue'},
        {text : 'normal', value : 'normal', mastervalue : 'rValue'},
        {text : 'single', value : 'single', mastervalue : 'sValue'},
        {text : 'checkbox', value : 'checkbox', mastervalue : 'sValue'}
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="single(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var json_master = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];

    var json_detail = [
        {text : 'text', value : 'text', mastervalue : 'iValue'},
        {text : 'password', value : 'password', mastervalue : 'iValue'},
        {text : 'popup', value : 'popup', mastervalue : 'pValue'},
        {text : 'inline', value : 'inline', mastervalue : 'pValue'},
        {text : 'normal', value : 'normal', mastervalue : 'rValue'},
        {text : 'single', value : 'single', mastervalue : 'sValue'},
        {text : 'checkbox', value : 'checkbox', mastervalue : 'sValue'}
    ];
</script>
<sbux-select id="sbIdx1_1" name="sbTagNm1_1" uitype="single" jsondata-ref="json_master"></sbux-select>
<sbux-select id="sbIdx1_2" name="sbTagNm1_2" uitype="single" jsondata-ref="json_detail" filter-source-name="sbTagNm1_1" jsondata-filter="mastervalue"></sbux-select>
{% endhighlight %}

<br>

▶ Preview 

<sbux-select id="sbIdx1_1" name="sbTagNm1_1" uitype="single" jsondata-ref="json_master"></sbux-select>
<sbux-select id="sbIdx1_2" name="sbTagNm1_2" uitype="single" jsondata-ref="json_detail" filter-source-name="sbTagNm1_1" jsondata-filter="mastervalue"></sbux-select>

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
<div id="sbArea2_2"></div>
<script>
    var json_master = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];

    var json_detail = [
        {text : 'text', value : 'text', mastervalue : 'iValue'},
        {text : 'password', value : 'password', mastervalue : 'iValue'},
        {text : 'popup', value : 'popup', mastervalue : 'pValue'},
        {text : 'inline', value : 'inline', mastervalue : 'pValue'},
        {text : 'normal', value : 'normal', mastervalue : 'rValue'},
        {text : 'single', value : 'single', mastervalue : 'sValue'},
        {text : 'checkbox', value : 'checkbox', mastervalue : 'sValue'}
    ];

    $(document).ready(function(){
        $('#sbArea2_1').sbSelect({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'json_master'
        });
        $('#sbArea2_2').sbSelect({
            name : 'sbScriptNm2_2',
            uitype : 'single',
            jsondataRef : 'json_detail',
            filterSourceName : 'sbScriptNm2_1',
            jsondataFilter : 'mastervalue'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<div id="sbArea2_2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbSelect({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'json_master'
        });
        $('#sbArea2_2').sbSelect({
            name : 'sbScriptNm2_2',
            uitype : 'single',
            jsondataRef : 'json_detail',
            filterSourceName : 'sbScriptNm2_1',
            jsondataFilter : 'mastervalue'
        });
    }); 
</script>

    </div>
</div>