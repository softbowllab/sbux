---
title:  refreshGroup
date:   2018-12-04
categories: ["latest","common"]
order: 3
---

refreshGroup
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
        <td colspan="3">group id가 지정된 모든 Component를 초기형태로 재호출합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.refreshGroup('groupId');</td>
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
        <td>method를 실행할 group Id</td>
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
<input type="button" value="refreshGroup" onclick="SBUxMethod.refreshGroup('inputGroup');">
<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text" group-id="inputGroup"></sbux-input>
<sbux-input id="sbIdx2" name="sbTagNm2" uitype="text" group-id="inputGroup"></sbux-input>
<sbux-input id="sbIdx3" name="sbTagNm3" uitype="text" group-id="inputGroup"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="refreshGroup" onclick="SBUxMethod.refreshGroup('inputGroup');">
<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text" group-id="inputGroup"></sbux-input>
<sbux-input id="sbIdx2" name="sbTagNm2" uitype="text" group-id="inputGroup"></sbux-input>
<sbux-input id="sbIdx3" name="sbTagNm3" uitype="text" group-id="inputGroup"></sbux-input>

    </div>
</div>