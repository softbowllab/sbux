---
title:  submit-name
date:   2018-05-14
categories: ["latest","checkbox"]
order: 7
---

submit-name
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
        <td colspan="3">여러개의 checkbox를 같은 Key값으로 form submit 할때 사용할 Key값을 지정합니다.</td>
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
        <td colspan="3">공용으로 쓸 Key 값</td>
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
        <td class="tdCenter">normal</td>
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
### Example (Tag)

{% highlight html %}
<form id="testForm1">
    <sbux-checkbox id="sbIdx1" name="sbTagNmA" uitype="normal" submit-name="formKey"></sbux-checkbox>
    <sbux-checkbox id="sbIdx2" name="sbTagNmB" uitype="normal" submit-name="formKey"></sbux-checkbox>
    <sbux-checkbox id="sbIdx3" name="sbTagNmC" uitype="normal" submit-name="formKey"></sbux-checkbox>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm1').serialize());">
{% endhighlight %}

### Preview

<form id="testForm1">
    <sbux-checkbox id="sbIdx1" name="sbTagNmA" uitype="normal" submit-name="formKey"></sbux-checkbox>
    <sbux-checkbox id="sbIdx2" name="sbTagNmB" uitype="normal" submit-name="formKey"></sbux-checkbox>
    <sbux-checkbox id="sbIdx3" name="sbTagNmC" uitype="normal" submit-name="formKey"></sbux-checkbox>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm1').serialize());">

---
### Example (Script)

{% highlight html %}
<form id="testForm2">
    <div id="sbArea1"></div>
    <div id="sbArea2"></div>
    <div id="sbArea3"></div>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm2').serialize());">
<script>
    $(document).ready(function(){
        $('#sbArea1').sbCheckbox({
            name : 'sbScriptNmA',
            uitype : 'normal',
            submitName : 'formKey'
        });
        $('#sbArea2').sbCheckbox({
            name : 'sbScriptNmB',
            uitype : 'normal',
            submitName : 'formKey'
        });
        $('#sbArea3').sbCheckbox({
            name : 'sbScriptNmC',
            uitype : 'normal',
            submitName : 'formKey'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<form id="testForm2">
    <div id="sbArea1"></div>
    <div id="sbArea2"></div>
    <div id="sbArea3"></div>
</form>
<input type="button" value="serialize()" onclick="alert($('#testForm2').serialize());">
<script>
    $(document).ready(function(){
        $('#sbArea1').sbCheckbox({
            name : 'sbScriptNmA',
            uitype : 'normal',
            submitName : 'formKey'
        });
        $('#sbArea2').sbCheckbox({
            name : 'sbScriptNmB',
            uitype : 'normal',
            submitName : 'formKey'
        });
        $('#sbArea3').sbCheckbox({
            name : 'sbScriptNmC',
            uitype : 'normal',
            submitName : 'formKey'
        });
    });  
</script>