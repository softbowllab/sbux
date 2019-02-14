---
title:  selectTab
date:   2018-12-04
categories: ["latest","tabs"]
order: 10
---

selectTab
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
        <td colspan="3">Component의 tab의 개수를 반환합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.selectTab('TabId');</td>
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
        <td>선택할 tab ID</td>
        <td></td>
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
        <td class="tdCenter">inbox</td>
        <td class="tdCenter">webacc</td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
    </tr>
</table>

---
### Example & Preview

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3" title-text-array="normal^inbox^webacc"></sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="selectTab" onclick="SBUxMethod.selectTab('tab1_2');">
<sbux-tabs id="sbIdx1" name="sbTagNm1" uitype="normal" title-target-id-array="tab1_1^tab1_2" title-text-array="tab1^tab2"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_1">
        첫번째 tab
    </div>
    <div id="tab1_2">
        두번째 tab
    </div>
</div>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="selectTab" onclick="SBUxMethod.selectTab('tab1_2');">
<sbux-tabs id="sbIdx1" name="sbTagNm1" uitype="normal" title-target-id-array="tab1_1^tab1_2" title-text-array="tab1^tab2"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_1">
        첫번째 tab
    </div>
    <div id="tab1_2">
        두번째 tab
    </div>
</div>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<input type="button" value="selectTab" onclick="SBUxMethod.selectTab('tab2_2');">
<sbux-tabs id="sbIdx2" name="sbTagNm2" uitype="inbox" title-target-id-array="tab2_1^tab2_2" title-text-array="tab1^tab2"></sbux-tabs>
<div class="tab-content">
    <div id="tab2_1">
        첫번째 tab
    </div>
    <div id="tab2_2">
        두번째 tab
    </div>
</div>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="selectTab" onclick="SBUxMethod.selectTab('tab2_2');">
<sbux-tabs id="sbIdx2" name="sbTagNm2" uitype="inbox" title-target-id-array="tab2_1^tab2_2" title-text-array="tab1^tab2"></sbux-tabs>
<div class="tab-content">
    <div id="tab2_1">
        첫번째 tab
    </div>
    <div id="tab2_2">
        두번째 tab
    </div>
</div>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<input type="button" value="selectTab" onclick="SBUxMethod.selectTab('tab3_2');">
<sbux-tabs id="sbIdx3" name="sbTagNm3" uitype="webacc" title-target-id-array="tab3_1^tab3_2" title-text-array="tab1^tab2" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab3_1">
        첫번째 tab
    </div>
    <div id="tab3_2">
        두번째 tab
    </div>
</div>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="selectTab" onclick="SBUxMethod.selectTab('tab3_2');">
<sbux-tabs id="sbIdx3" name="sbTagNm3" uitype="webacc" title-target-id-array="tab3_1^tab3_2" title-text-array="tab1^tab2" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab3_1">
        첫번째 tab
    </div>
    <div id="tab3_2">
        두번째 tab
    </div>
</div>

    </div>
</div>