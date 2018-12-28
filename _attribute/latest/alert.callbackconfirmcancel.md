---
title:  callback-confirm-cancel
date:   2018-05-14
categories: ["latest","alert"]
order: 15
---

callback-confirm-cancel
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
        <td colspan="3">Component가 confirm형태일때 취소 버튼에 대한 callback 함수를 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>is-confirm</td>
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
        <td class="tdCenter">alert</td>
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
    function callbackConfirmCancel(){
        alert('취소버튼을 누르셨습니다.');
    }
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="alert" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    function callbackConfirmCancel(){
        alert('취소버튼을 누르셨습니다.');
    }
</script>
<sbux-select id="test_1" name="test_1" uitype="single">
    <option-item value="value">input</option-item>
    <option-item value="value">picker</option-item>
    <option-item value="value">radio</option-item>
    <option-item value="value">select</option-item>
</sbux-select>

<sbux-alert id="sbIdx1_1" name="sbTagNm1_1" uitype="alert" switch-name="test_1" case-array="{iValue,,input을 선택하셨습니다.,}^{pValue,,picker를 선택하셨습니다.,}^{rValue,,radio를 선택하셨습니다.,}^{sValue,,select를 선택하셨습니다.,}" is-confirm="true" callback-confirm-cancel="callbackConfirmCancel"></sbux-alert>
{% endhighlight %}

<br>

▶ Preview 
<sbux-select id="test_1" name="test_1" uitype="single">
    <option-item value="iValue">input</option-item>
    <option-item value="pValue">picker</option-item>
    <option-item value="rValue">radio</option-item>
    <option-item value="sValue">select</option-item>
</sbux-select>

<sbux-alert id="sbIdx1_1" name="sbTagNm1_1" uitype="alert" switch-name="test_1" case-array="{iValue,,input을 선택하셨습니다.,}^{pValue,,picker를 선택하셨습니다.,}^{rValue,,radio를 선택하셨습니다.,}^{sValue,,select를 선택하셨습니다.,}" is-confirm="true" callback-confirm-cancel="callbackConfirmCancel"></sbux-alert>

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
<script>
    function callbackConfirmCancel(){
        alert('취소버튼을 누르셨습니다.');
    }
</script>
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
            caseArray : '{iValue,,input을 선택하셨습니다.,}^{pValue,,picker를 선택하셨습니다.,}^{rValue,,radio를 선택하셨습니다.,}^{sValue,,select를 선택하셨습니다.,}',
            isConfirm : true,
            callbackConfirmCancel : 'callbackConfirmCancel'
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
            caseArray : '{iValue,,input을 선택하셨습니다.,}^{pValue,,picker를 선택하셨습니다.,}^{rValue,,radio를 선택하셨습니다.,}^{sValue,,select를 선택하셨습니다.,}',
            isConfirm : true,
            callbackConfirmCancel : 'callbackConfirmCancel'
        });
    });
</script>

    </div>
</div>