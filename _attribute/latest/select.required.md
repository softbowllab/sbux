---
title:  required
date:   2018-05-14
categories: ["latest","select"]
order: 18
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
        <td class="tdTitle tdBg">설명</td>
        <td colspan="3">Component에 필수입력 속성을 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle tdBg">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">선결조건</td>
        <td>해당없음</td>
        <td class="tdTitle tdBg">연관자료</td>
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
        <td class="tdTitle tdBg tdCenter" colspan="4">속성값</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">기본값</td>
        <td>해당없음</td>
        <td class="tdTitle tdBg">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">값형태</td>
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
        <td class="tdTitle tdBg tdCenter" colspan="5">사용제한</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype</td>
        <td class="tdCenter">single</td>
        <td class="tdCenter">checkbox</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdCenter">X</td>
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
    <sbux-select id="sbIdx1_1" name="sbTagNm1_1" uitype="single" auto-unselected-text="true" required="required">
        <option-item value="iValue">input</option-item>
        <option-item value="pValue">picker</option-item>
        <option-item value="rValue">radio</option-item>
        <option-item value="sValue">select</option-item>
    </sbux-select>
    <input type="submit" value="submit">
</form>
{% endhighlight %}

<br>

▶ Preview 

<form>
    <sbux-select id="sbIdx1_1" name="sbTagNm1_1" uitype="single" auto-unselected-text="true" required="required">
        <option-item value="iValue">input</option-item>
        <option-item value="pValue">picker</option-item>
        <option-item value="rValue">radio</option-item>
        <option-item value="sValue">select</option-item>
    </sbux-select>
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
    <sbux-select id="sbIdx1_2" name="sbTagNm1_2" uitype="single" jsondata-ref="jsondata" auto-unselected-text="true" required="required"></sbux-select>
    <input type="submit" value="submit">
</form>
{% endhighlight %}

<br>

▶ Preview 

<form>
    <sbux-select id="sbIdx1_2" name="sbTagNm1_2" uitype="single" jsondata-ref="jsondata" auto-unselected-text="true" required="required"></sbux-select>
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
        $('#sbArea2_1').sbSelect({
            name : 'sbScriptNm2_1',
            uitype : 'single',
            jsondataRef : 'jsondata',
            autoUnselectedText : true,
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
            jsondataRef : 'jsondata',
            autoUnselectedText : true,
            required : 'required'
        });
    }); 
</script>

    </div>
</div>