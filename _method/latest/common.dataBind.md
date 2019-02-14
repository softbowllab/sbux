---
title:  dataBind
date:   2018-12-04
categories: ["latest","common"]
order: 10
---

dataBind
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
        <td colspan="3">Component에 jsondata를 bind 합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.dataBind();</td>
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
        <td>bind할 data 변수명</td>
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
<script>
    var JsonData={'sbTagNm1_1' : 'ddddddd'};
</script>
<input type="button" value="dataBind" onclick="SBUxMethod.dataBind('JsonData');">
<sbux-input id="sbIdx1_1" name="sbTagNm1_1" uitype="text"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<br>
<script>
    var JsonData={'sbTagNm1_1' : 'ddddddd'};
</script>
<input type="button" value="dataBind" onclick="SBUxMethod.dataBind('JsonData');">
<sbux-input id="sbIdx1_1" name="sbTagNm1_1" uitype="text"></sbux-input>

    </div>
</div>