---
title:  jsondata-css-style
date:   2018-05-14
categories: ["latest","accordion"]
order: 16
---

jsondata-css-style
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
        <td colspan="3">
            호출한 json data에서 css style에 해당하는 key값을 지정합니다.<br>
            * 변동형으로 컴포넌트를 구성할때 사용합니다.
        </td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>jsondata-ref</td>
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
        <td>cssstyle</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">호출한 json data에서 cssstyle에 해당하는 key값</td>
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
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="normal(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var accJsonData=[
        { "id": "0", "pid": "-1", "order": "1", "targetid": "acc1_1", "text": "acc1_1", "cssstyleKey":"color:red" },
        { "id": "1", "pid": "-1", "order": "2", "targetid": "acc1_2", "text": "acc1_2", "cssstyleKey":"color:blue" }
    ];
</script>
<sbux-accordion id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="accJsonData" jsondata-css-style="cssstyleKey"></sbux-accordion>
<div id="acc1_1">
   acc contents 1
</div>
<div id="acc1_2">
   acc contents 2
</div>
{% endhighlight %}


<br>

▶ Preview 

<script>
    var accJsonData=[
        { "id": "0", "pid": "-1", "order": "1", "targetid": "acc1_1", "text": "acc1_1", "cssstyleKey":"color:red" },
        { "id": "1", "pid": "-1", "order": "2", "targetid": "acc1_2", "text": "acc1_2", "cssstyleKey":"color:blue" }
    ];
</script>
<sbux-accordion id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="accJsonData" jsondata-css-style="cssstyleKey"></sbux-accordion>
<div id="acc1_1">
   acc contents 1
</div>
<div id="acc1_2">
   acc contents 2
</div>

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
<div id="acc2_1">
   acc contents 1
</div>
<div id="acc2_2">
   acc contents 2
</div>
<script>
    var accJsonData2=[
        { "id": "0", "pid": "-1", "order": "1", "targetid": "acc2_1", "text": "acc2_1", "cssstyleKey":"color:red" },
        { "id": "1", "pid": "-1", "order": "2", "targetid": "acc2_2", "text": "acc2_2", "cssstyleKey":"color:blue" }
    ];
    $(document).ready(function(){
        $('#sbArea2_1').sbAccordion({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'accJsonData2',
            jsondataCssStyle : 'cssstyleKey'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<div id="acc2_1">
   acc contents 1
</div>
<div id="acc2_2">
   acc contents 2
</div>
<script>
    var accJsonData2=[
        { "id": "0", "pid": "-1", "order": "1", "targetid": "acc2_1", "text": "acc2_1", "cssstyleKey":"color:red" },
        { "id": "1", "pid": "-1", "order": "2", "targetid": "acc2_2", "text": "acc2_2", "cssstyleKey":"color:blue" }
    ];
    $(document).ready(function(){
        $('#sbArea2_1').sbAccordion({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'accJsonData2',
            jsondataCssStyle : 'cssstyleKey'
        });
    }); 
</script>

    </div>
</div>