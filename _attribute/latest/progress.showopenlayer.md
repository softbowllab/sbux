---
title:  show-openlayer
date:   2018-05-14
categories: ["latest","progress"]
order: 5
---

show-openlayer
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
        <td colspan="3">Component를 layerpopup으로 띄웁니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td class="tdRed">필수(loading type일 경우에만)</td>
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
        <td>false</td>
        <td class="tdTitle">자료형</td>
        <td>boolean</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">true | false</td>
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
        <td class="tdCenter">bar</td>
        <td class="tdCenter">loading</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2" title-text-array="bar^loading" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="progress open" onclick="SBUxMethod.openProgress('sbTagNm1_1')">
<sbux-progress id="sbIdx1_1" name="sbTagNm1_1" uitype="bar" show-openlayer="true">
    <progress-bar>
       <bar valuenow="0"></bar>
    </progress-bar>
</sbux-progress>
{% endhighlight %}

<br>

▶ Preview 

<input type="button" value="progress open" onclick="SBUxMethod.openProgress('sbTagNm1_1')">
<sbux-progress id="sbIdx1_1" name="sbTagNm1_1" uitype="bar" show-openlayer="true">
    <progress-bar>
       <bar valuenow="0"></bar>
    </progress-bar>
</sbux-progress>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<sbux-progress id="sbIdx1_2" name="sbTagNm1_2" uitype="loading" show-openlayer="true"></sbux-progress>
<input type="button" value="progress open" onclick="SBUxMethod.openProgress('sbTagNm1_2')">
{% endhighlight %}


<br>

▶ Preview 

<sbux-progress id="sbIdx1_2" name="sbTagNm1_2" uitype="loading" show-openlayer="true"></sbux-progress>
<input type="button" value="progress open" onclick="SBUxMethod.openProgress('sbTagNm1_2')">

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="loading" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<input type="button" value="progress open" onclick="SBUxMethod.openProgress('sbScriptNm2_1')">
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbProgress({
            name : 'sbScriptNm2_1',
            uitype : 'loading',
            showOpenlayer : true
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<input type="button" value="progress open" onclick="SBUxMethod.openProgress('sbScriptNm2_1')">
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbProgress({
            name : 'sbScriptNm2_1',
            uitype : 'loading',
            showOpenlayer : true
        });
    }); 
</script>

    </div>
</div>