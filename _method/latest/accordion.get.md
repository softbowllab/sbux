---
title:  get
date:   2018-12-04
categories: ["latest","accordion"]
order: 1
---

get
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
        <td colspan="3">Component에 설정된 값을 반환합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.get('CompName');</td>
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
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm1'));">
<sbux-accordion id="sbIdx1" name="sbTagNm1" uitype="normal" title-target-id-array="1_1^1_2" title-text-array="acc1^acc2"></sbux-accordion>
<div id="1_1">
   <p>accordion menu 1</p>
</div>
<div id="1_2">
   <p>accordion menu 2</p>
</div>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm1'));">
<sbux-accordion id="sbIdx1" name="sbTagNm1" uitype="normal" title-target-id-array="1_1^1_2" title-text-array="acc1^acc2"></sbux-accordion>
<div id="1_1">
   <p>accordion menu 1</p>
</div>
<div id="1_2">
   <p>accordion menu 2</p>
</div>

    </div>
</div>