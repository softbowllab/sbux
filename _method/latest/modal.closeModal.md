---
title:  closeModal
date:   2018-12-04
categories: ["latest","modal"]
order: 8
---

closeModal
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
        <td colspan="3">SBUxMethod.openModal('CompName');</td>
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
        <td class="tdCenter">small</td>
        <td class="tdCenter">middle</td>
        <td class="tdCenter">large</td>
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

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3" title-text-array="small^middle^large">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="openModal" onclick="SBUxMethod.openModal('sbTagNm1');">
<sbux-modal id="sbIdx1" name="sbTagNm1" uitype="small" header-title="Modal 타이틀" body-html="<input type='button' value='closeModal' onclick='SBUxMethod.closeModal(`sbTagNm1`);'>"></sbux-modal>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="openModal" onclick="SBUxMethod.openModal('sbTagNm1');">
<sbux-modal id="sbIdx1" name="sbTagNm1" uitype="small" header-title="Modal 타이틀" body-html="<input type='button' value='closeModal' onclick='SBUxMethod.closeModal(`sbTagNm1`);'>"></sbux-modal>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<input type="button" value="openModal" onclick="SBUxMethod.openModal('sbTagNm2');">
<sbux-modal id="sbIdx2" name="sbTagNm2" uitype="middle" header-title="Modal 타이틀" body-html="<input type='button' value='closeModal' onclick='SBUxMethod.closeModal(`sbTagNm2`);'>"></sbux-modal>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="openModal" onclick="SBUxMethod.openModal('sbTagNm2');">
<sbux-modal id="sbIdx2" name="sbTagNm2" uitype="middle" header-title="Modal 타이틀" body-html="<input type='button' value='closeModal' onclick='SBUxMethod.closeModal(`sbTagNm2`);'>"></sbux-modal>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<input type="button" value="openModal" onclick="SBUxMethod.openModal('sbTagNm3');">
<sbux-modal id="sbIdx3" name="sbTagNm3" uitype="large" header-title="Modal 타이틀" body-html="<input type='button' value='closeModal' onclick='SBUxMethod.closeModal(`sbTagNm3`);'>"></sbux-modal>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="openModal" onclick="SBUxMethod.openModal('sbTagNm3');">
<sbux-modal id="sbIdx3" name="sbTagNm3" uitype="large" header-title="Modal 타이틀" body-html="<input type='button' value='closeModal' onclick='SBUxMethod.closeModal(`sbTagNm3`);'>"></sbux-modal>

    </div>
</div>