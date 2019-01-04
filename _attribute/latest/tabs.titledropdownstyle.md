---
title:  title-dropdown-style
date:   2018-05-14
categories: ["latest","tabs"]
order: 8
---

title-dropdown-style
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
        <td colspan="3">tab dropdown의 style을 지정합니다.</td>
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
        <td colspan="3">적용할 CSS 구문에서 '{' , '}'를 제외한 값</td>
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

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2" title-text-array="normal(고정형)^inbox(고정형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" title-target-id-array="{tab1_1_1,tab1_1_2}^tab1_1_3" title-text-array="tab1{dropdown1,dropdown2}^tab2" title-dropdown-style="color:red" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_1_1">
        tab1 content
    </div>
    <div id="tab1_1_2">
        tab2 content
    </div>
    <div id="tab1_1_3">
        tab2 content
    </div>
</div>
{% endhighlight %}

<br>

▶ Preview 

<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" title-target-id-array="{tab1_1_1,tab1_1_2}^tab1_1_3" title-text-array="tab1{dropdown1,dropdown2}^tab2" title-dropdown-style="color:red" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_1_1">
        tab1 content
    </div>
    <div id="tab1_1_2">
        tab2 content
    </div>
    <div id="tab1_1_3">
        tab2 content
    </div>
</div>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<sbux-tabs id="sbIdx1_2" name="sbTagNm1_2" uitype="inbox" title-target-id-array="{tab1_2_1,tab1_2_2}^tab1_2_3" title-text-array="tab1{dropdown1,dropdown2}^tab2" title-dropdown-style="color:red" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_2_1">
        tab1 content
    </div>
    <div id="tab1_2_2">
        tab2 content
    </div>
    <div id="tab1_2_3">
        tab2 content
    </div>
</div>
{% endhighlight %}

<br>

▶ Preview 

<sbux-tabs id="sbIdx1_2" name="sbTagNm1_2" uitype="inbox" title-target-id-array="{tab1_2_1,tab1_2_2}^tab1_2_3" title-text-array="tab1{dropdown1,dropdown2}^tab2" title-dropdown-style="color:red" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_2_1">
        tab1 content
    </div>
    <div id="tab1_2_2">
        tab2 content
    </div>
    <div id="tab1_2_3">
        tab2 content
    </div>
</div>

    </div>
</div>