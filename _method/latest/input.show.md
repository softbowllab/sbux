---
title:  show
date:   2018-12-04
categories: ["latest","input"]
order: 5
---

show
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
        <td colspan="3">숨겨진 Component를 보입니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.show('CompName');</td>
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
        <td class="tdCenter">text</td>
        <td class="tdCenter">password</td>
        <td class="tdCenter">search</td>
        <td class="tdCenter">hidden</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
    </tr>
</table>

---
### Example & Preview

<script>
    $(document).ready(function(){
        SBUxMethod.hide('sbTagNm1');
        SBUxMethod.hide('sbTagNm2');
        SBUxMethod.hide('sbTagNm3');
    });
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3" title-text-array="text^password^search">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="show" onclick="SBUxMethod.show('sbTagNm1');">
<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="show" onclick="SBUxMethod.show('sbTagNm1');">
<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text"></sbux-input>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<input type="button" value="show" onclick="SBUxMethod.show('sbTagNm2');">
<sbux-input id="sbIdx2" name="sbTagNm2" uitype="password"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="show" onclick="SBUxMethod.show('sbTagNm2');">
<sbux-input id="sbIdx2" name="sbTagNm2" uitype="password"></sbux-input>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<input type="button" value="show" onclick="SBUxMethod.show('sbTagNm3');">
<sbux-input id="sbIdx3" name="sbTagNm3" uitype="search"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="show" onclick="SBUxMethod.show('sbTagNm3');">
<sbux-input id="sbIdx3" name="sbTagNm3" uitype="search"></sbux-input>

    </div>
</div>