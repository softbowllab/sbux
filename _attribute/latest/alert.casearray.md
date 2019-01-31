---
title:  case-array
date:   2018-05-14
categories: ["latest","alert"]
order: 2
---

switch-name
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
        <td colspan="3">연동된 Component의 값에 대한 분기를 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle tdBg">필수여부</td>
        <td class="tdRed">필수</td>
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
        <td colspan="3">
            {value, title, contents, theme},{value, title, contents, theme}<br>
            * 각 항목은 모두 필수 조건이며 사용하지 않을시 공백으로 처리 ({value,,content,})
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
        <td class="tdTitle tdBg tdCenter" colspan="5">사용제한</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype</td>
        <td class="tdCenter">alert</td>
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

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="alert" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-select id="test_1" name="test_1" uitype="single">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>

<sbux-alert id="sbIdx1_1" name="sbTagNm1_1" uitype="alert" switch-name="test_1" case-array="{iValue,input,input을 선택하셨습니다.,info}^{pValue,picker,picker를 선택하셨습니다.,light}^{rValue,radio,radio를 선택하셨습니다.,info}^{sValue,select,select를 선택하셨습니다.,light}"></sbux-alert>
{% endhighlight %}

<br>

▶ Preview 
<sbux-select id="test_1" name="test_1" uitype="single">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>

<sbux-alert id="sbIdx1_1" name="sbTagNm1_1" uitype="alert" switch-name="test_1" case-array="{iValue,input,input을 선택하셨습니다.,info}^{pValue,picker,picker를 선택하셨습니다.,light}^{rValue,radio,radio를 선택하셨습니다.,info}^{sValue,select,select를 선택하셨습니다.,light}"></sbux-alert>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="alert" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<sbux-select id="test_2" name="test_2" uitype="single">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>

<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbAlert({
            name : 'sbScriptNm2_1',
            uitype : 'alert',
            jsondataRef : 'jsondata',
            switchName : 'test_2',
            caseArray : '{iValue,input,input을 선택하셨습니다.,info}^{pValue,picker,picker를 선택하셨습니다.,light}^{rValue,radio,radio를 선택하셨습니다.,info}^{sValue,select,select를 선택하셨습니다.,light}'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<sbux-select id="test_2" name="test_2" uitype="single">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>

<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbAlert({
            name : 'sbScriptNm2_1',
            uitype : 'alert',
            jsondataRef : 'jsondata',
            switchName : 'test_2',
            caseArray : '{iValue,input,input을 선택하셨습니다.,info}^{pValue,picker,picker를 선택하셨습니다.,light}^{rValue,radio,radio를 선택하셨습니다.,info}^{sValue,select,select를 선택하셨습니다.,light}'
        });
    });
</script>

    </div>
</div>