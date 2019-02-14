---
title:  addTab
date:   2018-12-04
categories: ["latest","tabs"]
order: 5
---

addTab
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
        <td colspan="3">
            Component에 새 tab을 추가합니다.<br>
            (is-scrollable="true"일때 만 추가 가능)
        </td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.addTab('CompName', addTabData);</td>
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
        <td></td>
    </tr>
    <tr>
        <td class="tdCenter">2</td>
        <td class="tdCenter">object</td>
        <td>추가할 tab의 option</td>
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
        <td class="tdBlue tdCenter">X</td>
        <td></td>
    </tr>
</table>

---
### Example & Preview

<script>
    var addTabdata1={'text':'addTab', 'targetid':'tab1_3'};
    var addTabdata2={'text':'addTab', 'targetid':'tab2_3'};
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2" title-text-array="normal^inbox"></sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var addTabdata1={'text':'addTab', 'targetid':'tab1_3'};
</script>
<input type="button" value="addTab" onclick="SBUxMethod.addTab('sbTagNm1', addTabdata1);">
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
<input type="button" value="addTab" onclick="SBUxMethod.addTab('sbTagNm1', addTabdata1);">
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
<script>
    var addTabdata2={'text':'addTab', 'targetid':'tab2_3'};
</script>
<input type="button" value="addTab" onclick="SBUxMethod.addTab('sbTagNm2', addTabdata2);">
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
<input type="button" value="addTab" onclick="SBUxMethod.addTab('sbTagNm2', addTabdata2);">
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
</div>