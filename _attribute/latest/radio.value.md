---
title:  value
date:   2018-05-14
categories: ["latest","radio"]
order: 5
---

value
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
        <td colspan="3">Component 선택시 model에 저장되는 value를 지정합니다.</td>
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
        <td colspan="3">선택시 model에 저장될 값</td>
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

<script>
    var SBUxData = [
        { text : "SBUx Radio1" },
        { text : "SBUx Radio2" },
        { text : "SBUx Radio3" }
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="normal(고정형)">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-radio id="sbIdx1" name="sbTagNm" uitype="normal" value="radio1"></sbux-radio>
<sbux-radio id="sbIdx2" name="sbTagNm" uitype="normal" value="radio2"></sbux-radio>
<sbux-radio id="sbIdx3" name="sbTagNm" uitype="normal" value="radio3"></sbux-radio>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm'))">
{% endhighlight %}

<br>

▶ Preview

<sbux-radio id="sbIdx1" name="sbTagNm" uitype="normal" value="radio1"></sbux-radio>
<sbux-radio id="sbIdx2" name="sbTagNm" uitype="normal" value="radio2"></sbux-radio>
<sbux-radio id="sbIdx3" name="sbTagNm" uitype="normal" value="radio3"></sbux-radio>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm'))">

    </div>
</div>