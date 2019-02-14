---
title:  refreshAll
date:   2018-12-04
categories: ["latest","common"]
order: 9
---

refreshAll
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
        <td colspan="3">모든 Component를 초기형태로 재호출합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.refreshAll();</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">순서</td>
        <td class="tdTitle tdCenter tdBg">타입</td>
        <td class="tdTitle tdCenter tdBg">설명</td>
        <td class="tdTitle tdCenter tdBg">비고</td>
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
<input type="button" value="refreshAll" onclick="SBUxMethod.refreshAll();">
<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text"></sbux-input>
<sbux-input id="sbIdx2" name="sbTagNm2" uitype="text"></sbux-input>
<sbux-input id="sbIdx3" name="sbTagNm3" uitype="text"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="refreshAll" onclick="SBUxMethod.refreshAll();">
<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text"></sbux-input>
<sbux-input id="sbIdx2" name="sbTagNm2" uitype="text"></sbux-input>
<sbux-input id="sbIdx3" name="sbTagNm3" uitype="text"></sbux-input>

    </div>
</div>