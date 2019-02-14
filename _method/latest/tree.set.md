---
title:  set
date:   2018-12-04
categories: ["latest","tree"]
order: 0
---

set
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
        <td colspan="3">Component에 값을 설정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.set('CompName', 'value', 'expand');</td>
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
        <td>Component에 설정할 값</td>
        <td>
            - checkbox type의 경우 ','를 구분자로 여러 값 선택 가능
        </td>
    </tr>
    <tr>
        <td class="tdCenter">3</td>
        <td class="tdCenter">string</td>
        <td>node 확장 옵션</td>
        <td>
            - expand | expandParents | collapseParents | expandParentsChild<br>
              expand : 부모를 가진 Node 라면 상위 Node 하나만 펼쳐짐<br>
              expandParents : Node Id에 접근하는 경로의 Node들이 모두 펼쳐짐<br>
              collapseParents : Node Id에 접근하는 경로의 Node들이 모두 닫혀짐<br>
              expandParentsChild : 선택된 Node의 Parent와 바로 하위 Child가 펼쳐짐<br>
            - 생략 가능
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
        <td class="tdCenter">normal</td>
        <td class="tdCenter">checkbox</td>
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

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2" title-text-array="normal^checkbox">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1', '2_2_1', 'expand');">
<sbux-tree id="sbIdx1" name="sbTagNm1" uitype="normal">
    <menu-item id="1" text="1">
        <menu-item id="1_1" text="1_1"></menu-item>
        <menu-item id="1_2" text="1_2"></menu-item>
    </menu-item>
    <menu-item id="2" text="2">
        <menu-item id="2_1" text="2_1"></menu-item>
        <menu-item id="2_2" text="2_2">
            <menu-item id="2_2_1" text="2_2_1"></menu-item>
        </menu-item>
    </menu-item>
</sbux-tree>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1', '2_2_1', 'expand');">
<sbux-tree id="sbIdx1" name="sbTagNm1" uitype="normal">
    <menu-item id="1" text="1">
        <menu-item id="1_1" text="1_1"></menu-item>
        <menu-item id="1_2" text="1_2"></menu-item>
    </menu-item>
    <menu-item id="2" text="2">
        <menu-item id="2_1" text="2_1"></menu-item>
        <menu-item id="2_2" text="2_2">
            <menu-item id="2_2_1" text="2_2_1"></menu-item>
        </menu-item>
    </menu-item>
</sbux-tree>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm2', '2_2_1', 'expand');">
<sbux-tree id="sbIdx2" name="sbTagNm2" uitype="checkbox">
    <menu-item id="1" text="1">
        <menu-item id="1_1" text="1_1"></menu-item>
        <menu-item id="1_2" text="1_2"></menu-item>
    </menu-item>
    <menu-item id="2" text="2">
        <menu-item id="2_1" text="2_1"></menu-item>
        <menu-item id="2_2" text="2_2">
            <menu-item id="2_2_1" text="2_2_1"></menu-item>
        </menu-item>
    </menu-item>
</sbux-tree>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm2', '2_2_1', 'expand');">
<sbux-tree id="sbIdx2" name="sbTagNm2" uitype="checkbox">
    <menu-item id="1" text="1">
        <menu-item id="1_1" text="1_1"></menu-item>
        <menu-item id="1_2" text="1_2"></menu-item>
    </menu-item>
    <menu-item id="2" text="2">
        <menu-item id="2_1" text="2_1"></menu-item>
        <menu-item id="2_2" text="2_2">
            <menu-item id="2_2_1" text="2_2_1"></menu-item>
        </menu-item>
    </menu-item>
</sbux-tree>

    </div>
</div>