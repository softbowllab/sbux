---
title:  title-target-value-array
date:   2018-05-14
categories: ["latest","tabs"]
order: 3
---

title-target-value-array
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
        <td colspan="3">Component의 tab value를 지정합니다.</td>
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
        <td colspan="3">{value1_1,value1_2}^value2^value3 (value와 value를 '^'로 구분, 드롭다운 형태는 '{','}'로 구분)</td>
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
        <td class="tdCenter">inbox</td>
        <td class="tdCenter">webacc</td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3" title-text-array="normal(고정형)^inbox(고정형)^webacc(고정형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" title-target-id-array="tab1_1_1^tab1_1_2" title-text-array="tab1^tab2" title-target-value-array="tabValue1^tabValue2" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_1_1">
        tab1 content
    </div>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

<br>

▶ Preview 

<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" title-target-id-array="tab1_1_1^tab1_1_2" title-text-array="tab1^tab2" title-target-value-array="tabValue1^tabValue2" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_1_1">
        tab1 content
    </div>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<sbux-tabs id="sbIdx1_2" name="sbTagNm1_2" uitype="inbox" title-target-id-array="tab1_2_1^tab1_2_2" title-text-array="tab1^tab2" title-target-value-array="tabValue1^tabValue2" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_2_1">
        tab1 content
    </div>
    <div id="tab1_2_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

<br>

▶ Preview 

<sbux-tabs id="sbIdx1_2" name="sbTagNm1_2" uitype="inbox" title-target-id-array="tab1_2_1^tab1_2_2" title-text-array="tab1^tab2" title-target-value-array="tabValue1^tabValue2" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_2_1">
        tab1 content
    </div>
    <div id="tab1_2_2">
        tab2 content
    </div>
</div>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-tabs id="sbIdx1_3" name="sbTagNm1_3" uitype="webacc" title-target-id-array="tab1_3_1^tab1_3_2" title-text-array="tab1^tab2" title-target-value-array="tabValue1^tabValue2" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_3_1">
        tab1 content
    </div>
    <div id="tab1_3_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

<br>

▶ Preview 

<sbux-tabs id="sbIdx1_3" name="sbTagNm1_3" uitype="webacc" title-target-id-array="tab1_3_1^tab1_3_2" title-text-array="tab1^tab2" title-target-value-array="tabValue1^tabValue2" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_3_1">
        tab1 content
    </div>
    <div id="tab1_3_2">
        tab2 content
    </div>
</div>

    </div>
</div>