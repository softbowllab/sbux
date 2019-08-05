---
title:  required
date:   2018-05-14
categories: ["latest","checkbox"]
order: 16
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
        <td colspan="3">
            Component에 필수입력 속성을 지정합니다.
        </td>
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
        <td class="tdCenter">normal</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
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
        { text : "SBUx Checkbox1" },
        { text : "SBUx Checkbox2" },
        { text : "SBUx Checkbox3" }
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}" title-text-array="normal{고정형,변동형}">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<form>
    <sbux-checkbox id="sbIdx1" name="sbTagNm.a" uitype="normal" text="SBUx Checkbox1" required="required"></sbux-checkbox>
    <sbux-checkbox id="sbIdx2" name="sbTagNm.b" uitype="normal" text="SBUx Checkbox2"></sbux-checkbox>
    <sbux-checkbox id="sbIdx3" name="sbTagNm.c" uitype="normal" text="SBUx Checkbox3" required="required"></sbux-checkbox>
    <input type="submit" value="submit">
</form>
{% endhighlight %}

<br>

▶ Preview

<form>
    <sbux-checkbox id="sbIdx1" name="sbTagNm.a" uitype="normal" text="SBUx Checkbox1" required="required"></sbux-checkbox>
    <sbux-checkbox id="sbIdx2" name="sbTagNm.b" uitype="normal" text="SBUx Checkbox2"></sbux-checkbox>
    <sbux-checkbox id="sbIdx3" name="sbTagNm.c" uitype="normal" text="SBUx Checkbox3" required="required"></sbux-checkbox>
    <input type="submit" value="submit">
</form>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var SBUxData = [
        { text : "SBUx Checkbox1" },
        { text : "SBUx Checkbox2" },
        { text : "SBUx Checkbox3" }
    ];
</script>
<form>
    <sbux-checkbox id="sbIdx4" name="sbTagNm4" uitype="normal" jsondata-ref="SBUxData" required="required"></sbux-checkbox>
    <input type="submit" value="submit">
</form>
{% endhighlight %}

<br>

▶ Preview
<form>
    <sbux-checkbox id="sbIdx4" name="sbTagNm4" uitype="normal" jsondata-ref="SBUxData" required="required"></sbux-checkbox>
    <input type="submit" value="submit">
</form>
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
<form>
    <div id="sbArea1"></div>
    <input type="submit" value="submit">
</form>
<script>
    var SBUxData = [
        { text : "SBUx Checkbox1" },
        { text : "SBUx Checkbox2" },
        { text : "SBUx Checkbox3" }
    ];
    $(document).ready(function(){
        $('#sbArea1').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            required : 'required'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 
<form>
    <div id="sbArea1"></div>
    <input type="submit" value="submit">
</form>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            required : 'required'
        });
    });  
</script>

    </div>
</div>