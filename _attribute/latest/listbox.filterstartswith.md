---
title:  filter-starts-with
date:   2018-05-14
categories: ["latest","listbox"]
order: 6
---

filter-starts-with
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
        <td colspan="3">filter를 사용할때 검색 대상을 문장의 첫글자 부터 시작하도록 설정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>jsondata-ref, filter-source-name</td>
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
        <td>false</td>
        <td class="tdTitle">자료형</td>
        <td>boolean</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">true | false</td>
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
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="single(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var jsondata = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
</script>
<sbux-input id="filterInput1" name="filterInput1" uitype="text"></sbux-input>
<sbux-listbox id="sbIdx1_1" name="sbTagNm1_1" uitype="single" jsondata-ref="jsondata" filter-source-name="filterInput1" filter-starts-with="true"></sbux-listbox>
{% endhighlight %}


<br>

▶ Preview 

<sbux-input id="filterInput1" name="filterInput1" uitype="text"></sbux-input>
<sbux-listbox id="sbIdx1_1" name="sbTagNm1_1" uitype="single" jsondata-ref="jsondata" filter-source-name="filterInput1" filter-starts-with="true"></sbux-listbox>

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
<sbux-input id="filterInput2" name="filterInput2" uitype="text"></sbux-input>
<div id="sbArea2_1"></div>
<script>
    var jsondata = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
    $(document).ready(function(){
        $('#sbArea2_1').sbListbox({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'jsondata',
            filterSourceName : 'filterInput2',
            filterStartsWith : true
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<sbux-input id="filterInput2" name="filterInput2" uitype="text"></sbux-input>
<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbListbox({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'jsondata',
            filterSourceName : 'filterInput2',
            filterStartsWith : true
        });
    }); 
</script>

    </div>
</div>