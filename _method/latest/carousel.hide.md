---
title:  hide
date:   2018-12-04
categories: ["latest","carousel"]
order: 4
---

hide
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
        <td colspan="3">Component를 숨깁니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.hide('CompName');</td>
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
        <td class="tdCenter">image</td>
        <td class="tdCenter">tag</td>
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

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2" title-text-array="image^tag">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="hide" onclick="SBUxMethod.hide('sbTagNm1');">
<sbux-carousel id="sbIdx1" name="sbTagNm1" uitype="image">
   <content-item image-src="./../img/image1.jpg"></content-item>
   <content-item image-src="./../img/image2.jpg"></content-item>
   <content-item image-src="./../img/image3.jpg"></content-item>
</sbux-carousel>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="hide" onclick="SBUxMethod.hide('sbTagNm1');">
<sbux-carousel id="sbIdx1" name="sbTagNm1" uitype="image">
   <content-item image-src="./../img/image1.jpg"></content-item>
   <content-item image-src="./../img/image2.jpg"></content-item>
   <content-item image-src="./../img/image3.jpg"></content-item>
</sbux-carousel>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<input type="button" value="hide" onclick="SBUxMethod.hide('sbTagNm2');">
<sbux-carousel id="sbIdx2" name="sbTagNm2" uitype="tag">
    <content-item><sbux-input id="couinput" name="couinput" uitype="text"></sbux-input></content-item>
    <content-item><sbux-datepicker id="coupicker" name="coupicker" uitype="inline"></sbux-datepicker></content-item>
    <content-item><sbux-button id="coubutton" name="coubutton" uitype="normal" text="버튼"></sbux-button></content-item>
</sbux-carousel>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="hide" onclick="SBUxMethod.hide('sbTagNm2');">
<sbux-carousel id="sbIdx2" name="sbTagNm2" uitype="tag">
    <content-item><sbux-input id="couinput" name="couinput" uitype="text"></sbux-input></content-item>
    <content-item><sbux-datepicker id="coupicker" name="coupicker" uitype="inline"></sbux-datepicker></content-item>
    <content-item><sbux-button id="coubutton" name="coubutton" uitype="normal" text="버튼"></sbux-button></content-item>
</sbux-carousel>

    </div>
</div>