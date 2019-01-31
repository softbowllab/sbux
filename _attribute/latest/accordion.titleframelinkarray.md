---
title:  title-frame-link-array
date:   2018-05-14
categories: ["latest","accordion"]
order: 26
---

title-frame-link-array
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
        <td colspan="3">menu click시 이동할 link를 지정합니다.</td>
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
        <td colspan="3">link1^link2^link3 (link와 link를 '^'로 구분)</td>
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

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="normal(고정형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-accordion id="sbIdx1_1" name="sbIdx1_1" uitype="normal" title-target-id-array="acc1_1^acc1_2" title-text-array="acc1_1^acc1_2" title-frame-name-array="targetIframe1^targetIframe2" title-frame-link-array="https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input^https://softbowllab.github.io/sbux/attribute/latest/picker.uitype#picker"></sbux-accordion>
<div id="acc1_1">
    <iframe id="idxfrmJson1" name="targetIframe1" style="width:100%;"></iframe>
</div>
<div id="acc1_2">
    <iframe id="idxfrmJson2" name="targetIframe2" style="width:100%;"></iframe>
</div>
{% endhighlight %}

<br>

▶ Preview 

<sbux-accordion id="sbIdx1_1" name="sbIdx1_1" uitype="normal" title-target-id-array="acc1_1^acc1_2" title-text-array="acc1_1^acc1_2" title-frame-name-array="targetIframe1^targetIframe2" title-frame-link-array="https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input^https://softbowllab.github.io/sbux/attribute/latest/picker.uitype#picker"></sbux-accordion>
<div id="acc1_1">
    <iframe id="idxfrmJson1" name="targetIframe1" style="width:100%;"></iframe>
</div>
<div id="acc1_2">
    <iframe id="idxfrmJson2" name="targetIframe2" style="width:100%;"></iframe>
</div>

    </div>
</div>