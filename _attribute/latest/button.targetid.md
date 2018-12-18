---
title:  target-id
date:   2018-05-14
categories: ["latest","button"]
order: 5
---

target-id
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
        <td colspan="3">modal 창을 띄울 modal의 ID를 지정합니다.</td>
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
        <td colspan="3">띄울 modal 창의 ID</td>
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
        <td class="tdCenter">modal</td>
        <td class="tdCenter">submit</td>
        <td class="tdCenter">send</td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdCenter">X</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdCenter">X</td>
        <td class="tdCenter">X</td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-modal id="idxModal_small" name="modal_samll" uitype="small" is-fade="true" header-title="Modal" body-html=""></sbux-modal>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="modal" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-modal id="idxModal_small" name="modal_samll" uitype="small" is-fade="true" header-title="Modal" body-html=""></sbux-modal>
<sbux-button id="sbIdx1_1" name="sbTagNm1_1" uitype="modal" text="SBUx modal open" target-id="idxModal_small"></sbux-button>
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_1" name="sbTagNm1_1" uitype="modal" text="SBUx modal open" target-id="idxModal_small"></sbux-button>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="modal" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<sbux-modal id="idxModal_small" name="modal_samll" uitype="small" is-fade="true" header-title="Modal" body-html=""></sbux-modal>
<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbButton({
            name : 'sbScriptNm2_1',
            uitype : 'modal',
            text : 'SBUx normal open',
            targetId : 'idxModal_small'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbButton({
            name : 'sbScriptNm2_1',
            uitype : 'modal',
            text : 'SBUx normal open',
            targetId : 'idxModal_small'
        });
    }); 
</script>

    </div>
</div>