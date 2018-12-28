---
title:  jsondata-value
date:   2018-05-14
categories: ["latest","listbox"]
order: 4
---

jsondata-value
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
            호출한 json data에서 value에 해당하는 key값<br>
            * 변동형으로 컴포넌트를 구성할때 사용합니다
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
        <td>jsondata-ref</td>
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
        <td>value</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">호출한 json data에서 value에 해당하는 key값</td>
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
        {text : 'input', valueKey : 'iValue'},
        {text : 'picker', valueKey : 'pValue'},
        {text : 'radio', valueKey : 'rValue'},
        {text : 'select', valueKey : 'sValue'}
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="single(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var jsondata = [
        {text : 'input', valueKey : 'iValue'},
        {text : 'picker', valueKey : 'pValue'},
        {text : 'radio', valueKey : 'rValue'},
        {text : 'select', valueKey : 'sValue'}
    ];
</script>
<sbux-listbox id="sbIdx1_1" name="sbTagNm1_1" uitype="single" jsondata-ref="jsondata" jsondata-value="valueKey"></sbux-listbox>
{% endhighlight %}


<br>

▶ Preview 

<sbux-listbox id="sbIdx1_1" name="sbTagNm1_1" uitype="single" jsondata-ref="jsondata" jsondata-value="valueKey"></sbux-listbox>

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
<script>
    var jsondata = [
        {text : 'input', valueKey : 'iValue'},
        {text : 'picker', valueKey : 'pValue'},
        {text : 'radio', valueKey : 'rValue'},
        {text : 'select', valueKey : 'sValue'}
    ];
    $(document).ready(function(){
        $('#sbArea2_1').sbListbox({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'jsondata',
            jsondataValue : 'valueKey'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbListbox({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'jsondata',
            jsondataValue : 'valueKey'
        });
    }); 
</script>

    </div>
</div>