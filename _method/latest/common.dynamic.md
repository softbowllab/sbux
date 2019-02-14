---
title:  dynamic
date:   2018-12-04
categories: ["latest","common"]
order: 7
---

dynamic
===

---

## Description

<table style="width:100%">
    <colgroup>
        <col width="10%"/>
        <col width="15%"/>
        <col width="55%"/>
        <col width="20%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg">설명</td>
        <td colspan="3">Component를 동적으로 추가합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.dynamic('selector', 'position', 'HTML');</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">순서</td>
        <td class="tdTitle tdCenter tdBg">타입</td>
        <td class="tdTitle tdCenter tdBg">설명</td>
        <td class="tdTitle tdCenter tdBg">비고</td>
    </tr>
    <tr>
        <td class="tdCenter">1</td>
        <td class="tdCenter">string</td>
        <td>jquery selector</td>
        <td></td>
    </tr>
    <tr>
        <td class="tdCenter">2</td>
        <td class="tdCenter">string</td>
        <td>추가할 위치</td>
        <td>- append | prepend</td>
    </tr>
    <tr>
        <td class="tdCenter">3</td>
        <td class="tdCenter">string</td>
        <td>추가할 HTML 구문</td>
        <td></td>
    </tr>
</table>

---
### Example & Preview

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="-">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="dynamic" onclick="SBUxMethod.dynamic('#dynamicTest', 'append', '<sbux-input id=sbIdx1 name=sbTagNm1 uitype=text group-id=inputGroup></sbux-input>');">
<div id="dynamicTest"></div>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="dynamic" onclick="SBUxMethod.dynamic('#dynamicTest', 'append', '<sbux-input id=sbIdx1 name=sbTagNm1 uitype=text group-id=inputGroup></sbux-input>');">
<div id="dynamicTest"></div>

    </div>
</div>