---
title:  content-id-array
date:   2018-05-14
categories: ["latest","carousel"]
order: 18
---

content-id-arrayuitype
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
        <td colspan="3">외부 div를 contents로 사용합니다.</td>
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
        <td colspan="3">contentId1^contentId2^contentId3 (contentId와 contentId를 '^'로 구분)</td>
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
        <td class="tdCenter">image</td>
        <td class="tdCenter">tag</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="tag(고정형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-carousel id="sbIdx1_1" name="sbTagNm1_1" uitype="tag" content-id-array="content1^content2^content3"></sbux-carousel>
<div id="content1"><sbux-input id="couinput" name="couinput" uitype="text"></sbux-input></div>
<div id="content2"><sbux-datepicker id="coupicker" name="coupicker" uitype="inline"></div>
<div id="content3"><sbux-button id="coubutton" name="coubutton" uitype="normal" text="버튼"></div>
{% endhighlight %}

<br>

▶ Preview 

<sbux-carousel id="sbIdx1_1" name="sbTagNm1_1" uitype="tag" content-id-array="content1^content2^content3"></sbux-carousel>
<div id="content1"><sbux-input id="couinput" name="couinput" uitype="text"></sbux-input></div>
<div id="content2"><sbux-datepicker id="coupicker" name="coupicker" uitype="inline"></sbux-datepicker></div>
<div id="content3"><sbux-button id="coubutton" name="coubutton" uitype="normal" text="버튼"></sbux-button></div>

    </div>
</div>