---
title:  callback-after-open
date:   2018-05-14
categories: ["latest","modal"]
order: 13
---

callback-after-open
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
        <td colspan="3">Component가 나타난 후 호출 할 함수를 지정합니다.</td>
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
        <td class="tdTitle tdBg tdCenter" colspan="5">사용제한</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype</td>
        <td class="tdCenter">small</td>
        <td class="tdCenter">middle</td>
        <td class="tdCenter">large</td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<script>
    function afterOpenFunc(){
        alert('open후 호출');
    }
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3" title-text-array="small^middle^large" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    function afterOpenFunc(){
        alert('open후 호출');
    }
</script>
<sbux-modal id="sbIdx1_1" name="sbTagNm1_1" uitype="small" callback-after-open="afterOpenFunc"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_1')">
{% endhighlight %}

<br>

▶ Preview 

<sbux-modal id="sbIdx1_1" name="sbTagNm1_1" uitype="small" callback-after-open="afterOpenFunc"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_1')">

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    function afterOpenFunc(){
        alert('open후 호출');
    }
</script>
<sbux-modal id="sbIdx1_2" name="sbTagNm1_2" uitype="middle" callback-after-open="afterOpenFunc"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_2')">
{% endhighlight %}


<br>

▶ Preview 

<sbux-modal id="sbIdx1_2" name="sbTagNm1_2" uitype="middle" callback-after-open="afterOpenFunc"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_2')">

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<script>
    function afterOpenFunc(){
        alert('open후 호출');
    }
</script>
<sbux-modal id="sbIdx1_3" name="sbTagNm1_3" uitype="large" callback-after-open="afterOpenFunc"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_3')">
{% endhighlight %}

<br>

▶ Preview 

<sbux-modal id="sbIdx1_3" name="sbTagNm1_3" uitype="large" callback-after-open="afterOpenFunc"></sbux-modal>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbTagNm1_3')">

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2^exTab2_3" title-text-array="small^middle^large" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbScriptNm2_1')">
<script>
    function afterOpenFunc(){
        alert('open후 호출');
    }
    $(document).ready(function(){
        $('#sbArea2_1').sbModal({
            name : 'sbScriptNm2_1',
            uitype : 'small',
            callbackAfterOpen : 'afterOpenFunc'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbScriptNm2_1')">
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbModal({
            name : 'sbScriptNm2_1',
            uitype : 'small',
            callbackAfterOpen : 'afterOpenFunc'
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2_2"></div>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbScriptNm2_2')">
<script>
    function afterOpenFunc(){
        alert('open후 호출');
    }
    $(document).ready(function(){
        $('#sbArea2_2').sbModal({
            name : 'sbScriptNm2_2',
            uitype : 'middle',
            callbackAfterOpen : 'afterOpenFunc'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_2"></div>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbScriptNm2_2')">
<script>
    $(document).ready(function(){
        $('#sbArea2_2').sbModal({
            name : 'sbScriptNm2_2',
            uitype : 'middle',
            callbackAfterOpen : 'afterOpenFunc'
        });
    }); 
</script>

    </div>
    <div id="exTab2_3">

▶ Example

{% highlight html %}
<div id="sbArea2_3"></div>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbScriptNm2_3')">
<script>
    function afterOpenFunc(){
        alert('open후 호출');
    }
    $(document).ready(function(){
        $('#sbArea2_3').sbModal({
            name : 'sbScriptNm2_3',
            uitype : 'large',
            callbackAfterOpen : 'afterOpenFunc'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_3"></div>
<input type="button" value="modal open" onclick="SBUxMethod.openModal('sbScriptNm2_3')">
<script>
    $(document).ready(function(){
        $('#sbArea2_3').sbModal({
            name : 'sbScriptNm2_3',
            uitype : 'large',
            callbackAfterOpen : 'afterOpenFunc'
        });
    }); 
</script>

    </div>
</div>