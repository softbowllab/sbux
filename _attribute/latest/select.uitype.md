---
title:  uitype
date:   2018-05-14
categories: ["latest","select"]
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
        <td colspan="3">single | checkbox</td>
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
        <td class="tdBlue tdCenter">O</td>
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

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}^exTab1_3" title-text-array="single{고정형,변동형}^checkbox(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-select id="sbIdx1_1" name="sbTagNm1_1" uitype="single">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>
{% endhighlight %}

<br>

▶ Preview 

<sbux-select id="sbIdx1_1" name="sbTagNm1_1" uitype="single">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>

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
</script>
<sbux-select id="sbIdx1_2" name="sbTagNm1_2" uitype="single" jsondata-ref="jsondata"></sbux-select>
{% endhighlight %}

<br>

▶ Preview 

<sbux-select id="sbIdx1_2" name="sbTagNm1_2" uitype="single" jsondata-ref="jsondata"></sbux-select>

    </div>
    <div id="exTab1_3">

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
<sbux-select id="sbIdx1_3" name="sbTagNm1_3" uitype="checkbox" jsondata-ref="jsondata"></sbux-select>
{% endhighlight %}

<br>

▶ Preview 

<sbux-select id="sbIdx1_3" name="sbTagNm1_3" uitype="checkbox" jsondata-ref="jsondata"></sbux-select>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2" title-text-array="single(변동형)^checkbox(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<script>
    var jsondata = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
    $(document).ready(function(){
        $('#sbArea2_1').sbSelect({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'jsondata'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<script>
    var jsondata = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
    $(document).ready(function(){
        $('#sbArea2_1').sbSelect({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'jsondata'
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2_2"></div>
<script>
    var jsondata = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
    $(document).ready(function(){
        $('#sbArea2_2').sbSelect({
            name : 'sbScriptNm2_2',
            uitype : 'checkbox',
            jsondataRef : 'jsondata'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_2"></div>
<script>
    var jsondata = [
        {text : 'input', value : 'iValue'},
        {text : 'picker', value : 'pValue'},
        {text : 'radio', value : 'rValue'},
        {text : 'select', value : 'sValue'}
    ];
    $(document).ready(function(){
        $('#sbArea2_2').sbSelect({
            name : 'sbScriptNm2_2',
            uitype : 'single',
            jsondataRef : 'jsondata'
        });
    }); 
</script>

    </div>
</div>