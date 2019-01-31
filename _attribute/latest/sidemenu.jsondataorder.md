---
title:  jsondata-order
date:   2018-05-14
categories: ["latest","sidemenu"]
order: 13
---

jsondata-order
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
            호출한 json data에서 order에 해당하는 key값을 지정합니다.<br>
            * 변동형으로 컴포넌트를 구성할때 사용합니다.
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
        <td>jsondata-ref</td>
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
        <td>order</td>
        <td class="tdTitle tdBg">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">값형태</td>
        <td colspan="3">호출한 json data에서 order에 해당하는 key값</td>
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
    var sideJsonData = [
        {"id": "1", "pid":"0",       "orderKey":"1", "text":"1"},
        {"id": "2", "pid":"0",       "orderKey":"2",  "text":"2"},
        {"id": "1_1", "pid":"1",     "orderKey":"1",  "text":"1_1"},
        {"id": "1_1_1", "pid":"1_1", "orderKey":"1",  "text":"1_1_1"},
        {"id": "1_1_2", "pid":"1_1", "orderKey":"2",  "text":"1_1_2"},
        {"id": "2_1", "pid":"2",     "orderKey":"1",  "text":"2_1"},
        {"id": "2_1_1", "pid":"2_1", "orderKey":"1",  "text":"2_1_1"}
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="normal(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var sideJsonData = [
        {"id": "1", "pid":"0",       "orderKey":"1", "text":"1"},
        {"id": "2", "pid":"0",       "orderKey":"2",  "text":"2"},
        {"id": "1_1", "pid":"1",     "orderKey":"1",  "text":"1_1"},
        {"id": "1_1_1", "pid":"1_1", "orderKey":"1",  "text":"1_1_1"},
        {"id": "1_1_2", "pid":"1_1", "orderKey":"2",  "text":"1_1_2"},
        {"id": "2_1", "pid":"2",     "orderKey":"1",  "text":"2_1"},
        {"id": "2_1_1", "pid":"2_1", "orderKey":"1",  "text":"2_1_1"}
    ];
</script>
<sbux-sidemenu id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="sideJsonData" jsondata-order="orderKey"></sbux-sidemenu>
{% endhighlight %}

<br>

▶ Preview 

<sbux-sidemenu id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="sideJsonData" jsondata-order="orderKey"></sbux-sidemenu>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="normal(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<script>
    var sideJsonData = [
        {"id": "1", "pid":"0",       "orderKey":"1", "text":"1"},
        {"id": "2", "pid":"0",       "orderKey":"2",  "text":"2"},
        {"id": "1_1", "pid":"1",     "orderKey":"1",  "text":"1_1"},
        {"id": "1_1_1", "pid":"1_1", "orderKey":"1",  "text":"1_1_1"},
        {"id": "1_1_2", "pid":"1_1", "orderKey":"2",  "text":"1_1_2"},
        {"id": "2_1", "pid":"2",     "orderKey":"1",  "text":"2_1"},
        {"id": "2_1_1", "pid":"2_1", "orderKey":"1",  "text":"2_1_1"}
   ];
    $(document).ready(function(){
        $('#sbArea2_1').sbSidemenu({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'sideJsonData',
            jsondataOrder : 'orderKey'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbSidemenu({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'sideJsonData',
            jsondataOrder : 'orderKey'
        });
    }); 
</script>

    </div>
</div>