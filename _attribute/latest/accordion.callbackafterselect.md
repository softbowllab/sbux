---
title:  callback-after-select
date:   2018-05-14
categories: ["latest","accordion"]
order: 31
---

callback-after-select
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
        <td colspan="3">Component가 선택된 이후에 호출되는 function을 지정합니다.</td>
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

<script>
    function afterSelectfunc(){
        alert('select이후 호출');
    }
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}" title-text-array="normal{고정형,변동형}" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    function afterSelectfunc(){
        alert('select이후 호출');
    }
</script>
<sbux-accordion id="sbIdx1_1" name="sbIdx1_1" uitype="normal" title-target-id-array="acc1_1^acc1_2" title-text-array="acc1_1^acc1_2" callback-after-select="afterSelectfunc"></sbux-accordion>
<div id="acc1_1">
   acc contents 1
</div>
<div id="acc1_2">
   acc contents 2
</div>
{% endhighlight %}

<br>

▶ Preview 

<sbux-accordion id="sbIdx1_1" name="sbIdx1_1" uitype="normal" title-target-id-array="acc1_1^acc1_2" title-text-array="acc1_1^acc1_2" callback-after-select="afterSelectfunc"></sbux-accordion>
<div id="acc1_1">
   acc contents 1
</div>
<div id="acc1_2">
   acc contents 2
</div>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var accJsonData=[
        { "id": "0", "pid": "-1", "order": "1", "targetid": "acc2_1", "text": "acc2_1" },
        { "id": "1", "pid": "-1", "order": "2", "targetid": "acc2_2", "text": "acc2_2" }
    ];
    function afterSelectfunc(){
        alert('select이후 호출');
    }
</script>
<sbux-accordion id="sbIdx1_2" name="sbTagNm1_2" uitype="normal" jsondata-ref="accJsonData" callback-after-select="afterSelectfunc"></sbux-accordion>
<div id="acc2_1">
   acc contents 1
</div>
<div id="acc2_2">
   acc contents 2
</div>
{% endhighlight %}


<br>

▶ Preview 

<script>
    var accJsonData1=[
        { "id": "0", "pid": "-1", "order": "1", "targetid": "acc2_1", "text": "acc2_1" },
        { "id": "1", "pid": "-1", "order": "2", "targetid": "acc2_2", "text": "acc2_2" }
    ];
    function afterSelectfunc(){
        alert('select이후 호출');
    }
</script>
<sbux-accordion id="sbIdx1_2" name="sbTagNm1_2" uitype="normal" jsondata-ref="accJsonData1" callback-after-select="afterSelectfunc"></sbux-accordion>
<div id="acc2_1">
   acc contents 1
</div>
<div id="acc2_2">
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
<div id="sbArea3_1"></div>
<div id="acc3_1">
   acc contents 1
</div>
<div id="acc3_2">
   acc contents 2
</div>
<script>
    var accJsonData2=[
        { "id": "0", "pid": "-1", "order": "1", "targetid": "acc3_1", "text": "acc3_1" },
        { "id": "1", "pid": "-1", "order": "2", "targetid": "acc3_2", "text": "acc3_2" }
    ];
    function afterSelectfunc(){
        alert('select이후 호출');
    }
    $(document).ready(function(){
        $('#sbArea3_1').sbAccordion({
            name : 'sbScriptNm3_1',
            uitype : 'normal',
            jsondataRef : 'accJsonData2',
            callbackAfterSelect : 'afterSelectfunc'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea3_1"></div>
<div id="acc3_1">
   acc contents 1
</div>
<div id="acc3_2">
   acc contents 2
</div>
<script>
    var accJsonData2=[
        { "id": "0", "pid": "-1", "order": "1", "targetid": "acc3_1", "text": "acc3_1" },
        { "id": "1", "pid": "-1", "order": "2", "targetid": "acc3_2", "text": "acc3_2" }
    ];
    function afterSelectfunc(){
        alert('select이후 호출');
    }
    $(document).ready(function(){
        $('#sbArea3_1').sbAccordion({
            name : 'sbScriptNm3_1',
            uitype : 'normal',
            jsondataRef : 'accJsonData2',
            callbackAfterSelect : 'afterSelectfunc'
        });
    }); 
</script>

    </div>
</div>