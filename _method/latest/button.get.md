---
title:  get
date:   2018-12-04
categories: ["latest","button"]
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

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3^exTab1_4" title-text-array="normal^modal^submit^send">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm1'));">
<sbux-button id="sbIdx1" name="sbTagNm1" uitype="normal" text="button" value="button value"></sbux-button>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm1'));">
<sbux-button id="sbIdx1" name="sbTagNm1" uitype="normal" text="button" value="button value"></sbux-button>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm2'));">
<sbux-button id="sbIdx2" name="sbTagNm2" uitype="modal" text="button" value="button value"></sbux-button>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm2'));">
<sbux-button id="sbIdx2" name="sbTagNm2" uitype="modal" text="button" value="button value"></sbux-button>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm3'));">
<sbux-button id="sbIdx3" name="sbTagNm3" uitype="submit" text="button" value="button value"></sbux-button>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm3'));">
<sbux-button id="sbIdx3" name="sbTagNm3" uitype="submit" text="button" value="button value"></sbux-button>

    </div>
    <div id="exTab1_4">

▶ Example

{% highlight html %}
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm4'));">
<sbux-button id="sbIdx4" name="sbTagNm4" uitype="send" text="button" value="button value"></sbux-button>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm4'));">
<sbux-button id="sbIdx4" name="sbTagNm4" uitype="send" text="button" value="button value"></sbux-button>

    </div>
</div>