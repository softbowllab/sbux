---
title:  openAlert
date:   2018-12-04
categories: ["latest","alert"]
order: 1
---

openAlert
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
        <td colspan="3">동적으로 Component를 생성해 나타냅니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.attr(option);</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">순서</td>
        <td class="tdTitle tdCenter tdBg">타입</td>
        <td class="tdTitle tdCenter tdBg">설명</td>
        <td class="tdTitle tdCenter tdBg">비고</td>
    </tr>
    <tr>
        <td class="tdCenter">1</td>
        <td class="tdCenter">object</td>
        <td>나타낼 alert에 적용할 option</td>
        <td>
            - options<br>
              title : alert의 타이틀<br>
              text : alert내 문구<br>
              mode : alert의 색상모드 (info | light)<br>
              image : alert 좌측의 이미지 주소<br>
              is_fixed : 고정여부 (true | flase)<br>
              is_modal : modal 창 효과 (true | false)<br>
              is_fixed_close_button : 닫힘 버튼 고정여부 (true | false)<br>
              time : 창이 지속되는 시간<br>
              placement : 위치<br>
              before_open : alert open 전 callback<br>
              after_open : alert open 후 callback<br>
              before_close : alert close 전 callback<br>
              after_close : alert close 후 callback
        </td>
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
        <td class="tdCenter">alert</td>
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
<input type="button" value="openAlert" onclick="SBUxMethod.openAlert({'title':'alert open', 'text':'method로 생성된 alert'});">
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="openAlert" onclick="SBUxMethod.openAlert({'title':'alert open', 'text':'method로 생성된 alert'});">

    </div>
</div>