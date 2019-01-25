---
title:  text
date:   2018-05-14
categories: ["latest","checkbox"]
order: 1
---

text
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
        <td colspan="3">Component 우측에 나타나는 text를 지정합니다.</td>
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
        <td colspan="3">text로 지정할 문구</td>
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

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="normal(고정형)">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-checkbox id="sbIdx1" name="sbTagNm.a" uitype="normal" text="SBUx checkbox1"></sbux-checkbox>
<sbux-checkbox id="sbIdx2" name="sbTagNm.b" uitype="normal" text="SBUx checkbox2"></sbux-checkbox>
<sbux-checkbox id="sbIdx3" name="sbTagNm.c" uitype="normal" text="SBUx checkbox3"></sbux-checkbox>
{% endhighlight %}

<br>

▶ Preview

<sbux-checkbox id="sbIdx1" name="sbTagNm.a" uitype="normal" text="SBUx checkbox1"></sbux-checkbox>
<sbux-checkbox id="sbIdx2" name="sbTagNm.b" uitype="normal" text="SBUx checkbox2"></sbux-checkbox>
<sbux-checkbox id="sbIdx3" name="sbTagNm.c" uitype="normal" text="SBUx checkbox3"></sbux-checkbox>

    </div>
</div>