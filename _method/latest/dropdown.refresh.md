---
title:  refresh
date:   2018-12-04
categories: ["latest","dropdown"]
order: 3
---

refresh
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
        <td colspan="3">Component를 초기형태로 재호출합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.refresh('CompName');</td>
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
        <td class="tdCenter">button</td>
        <td class="tdCenter">splitbutton</td>
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

<script>
    var DropdownJsonData = [
        {'id' : '1', 'pid' : '-1', 'text' : 'red'},
        {'id' : '2', 'pid' : '-1', 'text' : 'blue'},
        {'id' : '3', 'pid' : '-1', 'text' : 'green'}
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3" title-text-array="normal^button^splitbutton">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var DropdownJsonData = [
        {'id' : '1', 'pid' : '-1', 'text' : 'red'},
        {'id' : '2', 'pid' : '-1', 'text' : 'blue'},
        {'id' : '3', 'pid' : '-1', 'text' : 'green'}
    ];
</script>
<input type="button" value="refresh" onclick="SBUxMethod.refresh('sbTagNm1');">
<sbux-dropdown id="sbIdx1" name="sbTagNm1" uitype="normal" jsondata-ref="DropdownJsonData"></sbux-dropdown>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="refresh" onclick="SBUxMethod.refresh('sbTagNm1');">
<sbux-dropdown id="sbIdx1" name="sbTagNm1" uitype="normal" jsondata-ref="DropdownJsonData"></sbux-dropdown>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var DropdownJsonData = [
        {'id' : '1', 'pid' : '-1', 'text' : 'red'},
        {'id' : '2', 'pid' : '-1', 'text' : 'blue'},
        {'id' : '3', 'pid' : '-1', 'text' : 'green'}
    ];
</script>
<input type="button" value="refresh" onclick="SBUxMethod.refresh('sbTagNm2');">
<sbux-dropdown id="sbIdx2" name="sbTagNm2" uitype="button" jsondata-ref="DropdownJsonData"></sbux-dropdown>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="refresh" onclick="SBUxMethod.refresh('sbTagNm2');">
<sbux-dropdown id="sbIdx2" name="sbTagNm2" uitype="button" jsondata-ref="DropdownJsonData"></sbux-dropdown>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<script>
    var DropdownJsonData = [
        {'id' : '1', 'pid' : '-1', 'text' : 'red'},
        {'id' : '2', 'pid' : '-1', 'text' : 'blue'},
        {'id' : '3', 'pid' : '-1', 'text' : 'green'}
    ];
</script>
<input type="button" value="refresh" onclick="SBUxMethod.refresh('sbTagNm3');">
<sbux-dropdown id="sbIdx3" name="sbTagNm3" uitype="splitbutton" jsondata-ref="DropdownJsonData"></sbux-dropdown>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="refresh" onclick="SBUxMethod.refresh('sbTagNm3');">
<sbux-dropdown id="sbIdx3" name="sbTagNm3" uitype="splitbutton" jsondata-ref="DropdownJsonData"></sbux-dropdown>

    </div>
</div>