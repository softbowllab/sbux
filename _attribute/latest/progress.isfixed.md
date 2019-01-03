---
title:  is-fixed
date:   2018-05-14
categories: ["latest","progress"]
order: 7
---

is-fixed
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
        <td colspan="3">layerpopup의 close 방식을 설정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>show-openlayer</td>
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
        <td>string</td>
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
        <td class="tdCenter">X</td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="bar" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="progress open" onclick="SBUxMethod.openProgress('sbTagNm1_1')">
<sbux-progress id="sbIdx1_1" name="sbTagNm1_1" uitype="bar" indicator-type="load" show-openlayer="true" is-fixed="true">
    <progress-bar>
       <bar valuenow="0"></bar>
    </progress-bar>
</sbux-progress>
{% endhighlight %}

<br>

▶ Preview 

<input type="button" value="progress open" onclick="SBUxMethod.openProgress('sbTagNm1_1')">
<sbux-progress id="sbIdx1_1" name="sbTagNm1_1" uitype="bar" indicator-type="load" show-openlayer="true" is-fixed="true">
    <progress-bar>
       <bar valuenow="0"></bar>
    </progress-bar>
</sbux-progress>

    </div>
</div>