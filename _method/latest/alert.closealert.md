---
title:  closeAlert
date:   2018-12-04
categories: ["latest","alert"]
order: 2
---

closeAlert
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
        <td colspan="3">Component를 닫습니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.attr();</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">순서</td>
        <td class="tdTitle tdCenter tdBg">타입</td>
        <td class="tdTitle tdCenter tdBg">설명</td>
        <td class="tdTitle tdCenter tdBg">비고</td>
    </tr>
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
        <td class="tdCenter">alert</td>
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
### Example & Preview

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="normal">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="closeAlert" onclick="SBUxMethod.closeAlert();">
<sbux-select id="alertTest" name="alertTest" uitype="single">
    <option-item value="red">Red</option-item>
    <option-item value="green">Green</option-item>
    <option-item value="blue">Blue</option-item>
</sbux-select>
<sbux-alert id="sbIdx1" name="sbTagNm1" uitype="alert" switch-name="alertTest" case-array="{red,red,red,}^{green,green,green,}^{blue,blue,blue,}" is-fixed="true"></sbux-alert>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="closeAlert" onclick="SBUxMethod.closeAlert();">
<sbux-select id="alertTest" name="alertTest" uitype="single">
    <option-item value="red">Red</option-item>
    <option-item value="green">Green</option-item>
    <option-item value="blue">Blue</option-item>
</sbux-select>
<sbux-alert id="sbIdx1" name="sbTagNm1" uitype="alert" switch-name="alertTest" case-array="{red,red,red,}^{green,green,green,}^{blue,blue,blue,}" is-fixed="true"></sbux-alert>

    </div>
</div>