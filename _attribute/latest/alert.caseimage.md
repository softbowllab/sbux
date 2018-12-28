---
title:  case-image
date:   2018-05-14
categories: ["latest","alert"]
order: 3
---

case-image
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
        <td colspan="3">Component에 표시할 image의 주소를 지정합니다.</td>
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
        <td colspan="3">표시할 image의 주소</td>
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

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="alert" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-select id="test_1" name="test_1" uitype="single">
    <option-item value="loading">input</option-item>
    <option-item value="loading">picker</option-item>
    <option-item value="loading">radio</option-item>
    <option-item value="loading">select</option-item>
</sbux-select>

<sbux-alert id="sbIdx1_1" name="sbTagNm1_1" uitype="alert" switch-name="test_1" case-array="{loading,로딩중,,}^{loading,로딩중,,}^{loading,로딩중,,}^{loading,로딩중,,}" case-image="./../img/loading.gif"></sbux-alert>
{% endhighlight %}

<br>

▶ Preview 
<sbux-select id="test_1" name="test_1" uitype="single">
    <option-item value="loading">input</option-item>
    <option-item value="loading">picker</option-item>
    <option-item value="loading">radio</option-item>
    <option-item value="loading">select</option-item>
</sbux-select>

<sbux-alert id="sbIdx1_1" name="sbTagNm1_1" uitype="alert" switch-name="test_1" case-array="{loading,로딩중,,}^{loading,로딩중,,}^{loading,로딩중,,}^{loading,로딩중,,}" case-image="./../img/loading.gif"></sbux-alert>

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
    <option-item value="loading">input</option-item>
    <option-item value="loading">picker</option-item>
    <option-item value="loading">radio</option-item>
    <option-item value="loading">select</option-item>
</sbux-select>

<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbAlert({
            name : 'sbScriptNm2_1',
            uitype : 'alert',
            jsondataRef : 'jsondata',
            switchName : 'test_2',
            caseArray : '{loading,로딩중,,}^{loading,로딩중,,}^{loading,로딩중,,}^{loading,로딩중,,}',
            caseImage : './../img/loading.gif'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<sbux-select id="test_2" name="test_2" uitype="single">
    <option-item value="loading">input</option-item>
    <option-item value="loading">picker</option-item>
    <option-item value="loading">radio</option-item>
    <option-item value="loading">select</option-item>
</sbux-select>

<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbAlert({
            name : 'sbScriptNm2_1',
            uitype : 'alert',
            jsondataRef : 'jsondata',
            switchName : 'test_2',
            caseArray : '{loading,로딩중,,}^{loading,로딩중,,}^{loading,로딩중,,}^{loading,로딩중,,}',
            caseImage : './../img/loading.gif'
        });
    }); 
</script>

    </div>
</div>