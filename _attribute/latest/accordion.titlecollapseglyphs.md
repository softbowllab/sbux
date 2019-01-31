---
title:  title-collapse-glyphs
date:   2018-05-14
categories: ["latest","accordion"]
order: 22
---

title-collapse-glyphs
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
        <td colspan="3">menu가 축소되어있을때 표시될 glyph icon을 지정합니다.</td>
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
        <td colspan="3"><a href="https://getbootstrap.com/docs/3.3/components/#glyphicons" target="_blank">bootstrap glyphicons 참고</a></td>
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
<sbux-accordion id="sbIdx1_1" name="sbIdx1_1" uitype="normal" title-target-id-array="acc1_1^acc1_2" title-text-array="acc1_1^acc1_2" title-collapse-glyphs="glyphicon-plus"></sbux-accordion>
<div id="acc1_1">
   acc contents 1
</div>
<div id="acc1_2">
   acc contents 2
</div>
{% endhighlight %}

<br>

▶ Preview 

<sbux-accordion id="sbIdx1_1" name="sbIdx1_1" uitype="normal" title-target-id-array="acc1_1^acc1_2" title-text-array="acc1_1^acc1_2" title-collapse-glyphs="glyphicon-plus"></sbux-accordion>
<div id="acc1_1">
   acc contents 1
</div>
<div id="acc1_2">
   acc contents 2
</div>

    </div>
</div>