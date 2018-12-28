---
title:  required
date:   2018-05-14
categories: ["latest","listbox"]
order: 10
---

required
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
        <td colspan="3">Component에 필수입력 속성을 지정합니다.</td>
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
        <td colspan="3">required</td>
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

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}" title-text-array="single{고정형,변동형}" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<form>
    <sbux-listbox id="sbIdx1_1" name="sbTagNm1_1" uitype="single" required="required">
        <option-item>input</option-item>
        <option-item>picker</option-item>
        <option-item>radio</option-item>
        <option-item>select</option-item>
    </sbux-listbox>
    <input type="submit" value="submit">
</form>
{% endhighlight %}

<br>

▶ Preview 

<form>
    <sbux-listbox id="sbIdx1_1" name="sbTagNm1_1" uitype="single" required="required">
        <option-item>input</option-item>
        <option-item>picker</option-item>
        <option-item>radio</option-item>
        <option-item>select</option-item>
    </sbux-listbox>
    <input type="submit" value="submit">
</form>

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
<form>
    <sbux-listbox id="sbIdx1_2" name="sbTagNm1_2" uitype="single" jsondata-ref="jsondata" required="required"></sbux-listbox>
    <input type="submit" value="submit">
</form>
{% endhighlight %}


<br>

▶ Preview 

<form>
    <sbux-listbox id="sbIdx1_2" name="sbTagNm1_2" uitype="single" jsondata-ref="jsondata" required="required"></sbux-listbox>
    <input type="submit" value="submit">
</form>

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
<form>
    <div id="sbArea2_1"></div>
    <input type="submit" value="submit">
</form>
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
            required : 'required'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<form>
    <div id="sbArea2_1"></div>
    <input type="submit" value="submit">
</form>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbListbox({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'jsondata',
            required : 'required'
        });
    }); 
</script>

    </div>
</div>