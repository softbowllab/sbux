---
title:  setSideMenu
date:   2018-12-04
categories: ["latest","sidemenu"]
order: 1
---

setSideMenu
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
        <td colspan="3">Component의 항목을 선택합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.setSideMenu('CompName', 'value', 'baseKey');</td>
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
        <td class="tdCenter">string</td>
        <td>선택할 항목의 value</td>
        <td></td>
    </tr>
    <tr>
        <td class="tdCenter">3</td>
        <td class="tdCenter">string</td>
        <td>두번째 param의 기준값</td>
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
<input type="button" value="setSidemenu" onclick="SBUxMethod.setSideMenu('sbTagNm1', '2');">
<sbux-sidemenu id="sbIdx1" name="sbTagNm1" uitype="normal">
    <menu-item id="1" text="1">
        <menu-item id="1_1" text="1_1">
            <menu-item id="1_1_1" text="1_1_1"></menu-item>
            <menu-item id="1_1_2" text="1_1_2"></menu-item>
        </menu-item>
    </menu-item>
    <menu-item id="2" text="2" >
        <menu-item id="2_1" text="2_1">
            <menu-item id="2_1_1" text="2_1_1"></menu-item>
        </menu-item>
    </menu-item>
</sbux-sidemenu>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="setSidemenu" onclick="SBUxMethod.setSideMenu('sbTagNm1', '2');">
<sbux-sidemenu id="sbIdx1" name="sbTagNm1" uitype="normal">
    <menu-item id="1" text="1">
        <menu-item id="1_1" text="1_1">
            <menu-item id="1_1_1" text="1_1_1"></menu-item>
            <menu-item id="1_1_2" text="1_1_2"></menu-item>
        </menu-item>
    </menu-item>
    <menu-item id="2" text="2" >
        <menu-item id="2_1" text="2_1">
            <menu-item id="2_1_1" text="2_1_1"></menu-item>
        </menu-item>
    </menu-item>
</sbux-sidemenu>

    </div>
</div>