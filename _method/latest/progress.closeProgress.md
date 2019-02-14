---
title:  closeProgress
date:   2018-12-04
categories: ["latest","progress"]
order: 3
---

closeProgress
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
        <td colspan="3">Component를 나타냅니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.closeProgress('CompName');</td>
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
        <td>method를 실행할 Component name</td>
        <td>- show-openlayer="true"인 경우에만 적용</td>
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
        <td class="tdCenter">bar</td>
        <td class="tdCenter">loading</td>
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
### Example & Preview

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2" title-text-array="bar^loading">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="openProgress" onclick="SBUxMethod.openProgress('sbTagNm1');">
<input type="button" value="closeProgress" onclick="SBUxMethod.closeProgress('sbTagNm1');">
<sbux-progress id="sbIdx1" name="sbTagNm1" uitype="bar" show-openlayer="true" is-modal="false">
    <progress-bar>
        <bar valuenow="20"></bar>
    </progress-bar>
</sbux-progress>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="openProgress" onclick="SBUxMethod.openProgress('sbTagNm1');">
<input type="button" value="closeProgress" onclick="SBUxMethod.closeProgress('sbTagNm1');">
<sbux-progress id="sbIdx1" name="sbTagNm1" uitype="bar" show-openlayer="true" is-modal="false">
    <progress-bar>
        <bar valuenow="20"></bar>
    </progress-bar>
</sbux-progress>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<input type="button" value="openProgress" onclick="SBUxMethod.openProgress('sbTagNm2');">
<input type="button" value="closeProgress" onclick="SBUxMethod.closeProgress('sbTagNm2');">
<sbux-progress id="sbIdx2" name="sbTagNm2" uitype="loading" show-openlayer="true" is-modal="false"></sbux-progress>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="openProgress" onclick="SBUxMethod.openProgress('sbTagNm2');">
<input type="button" value="closeProgress" onclick="SBUxMethod.closeProgress('sbTagNm2');">
<sbux-progress id="sbIdx2" name="sbTagNm2" uitype="loading" show-openlayer="true" is-modal="false"></sbux-progress>

    </div>
</div>