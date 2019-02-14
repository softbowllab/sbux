---
title:  addTreeNode
date:   2018-12-04
categories: ["latest","tree"]
order: 8
---

addTreeNode
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
        <td colspan="3">node를 추가합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.addTreeNode('CompName', 'nodeType', nodeData, 'baseNode', callback);</td>
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
        <td>추가 할 node 유형</td>
        <td>
            - sbling | child<br>
            - 공백으로 생략 가능 (생략시 child)
        </td>
    </tr>
    <tr>
        <td class="tdCenter">3</td>
        <td class="tdCenter">object</td>
        <td>추가 할 node data</td>
        <td></td>
    </tr>
    <tr>
        <td class="tdCenter">4</td>
        <td class="tdCenter">string</td>
        <td>기준이 될 node Id</td>
        <td>- 공백으로 생략 가능 (생략시 선택한 nodeId)</td>
    </tr>
    <tr>
        <td class="tdCenter">5</td>
        <td class="tdCenter">function</td>
        <td>node 추가 후 발생하는 callback function</td>
        <td>- 생략 가능</td>
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
<input type="button" value="addTreeNode" onclick="SBUxMethod.addTreeNode('sbTagNm1', 'sbling', {id:'1_3', text:'1_3'}, '1_2');">
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
<input type="button" value="addTreeNode" onclick="SBUxMethod.addTreeNode('sbTagNm1', 'sbling', {id:'1_3', text:'1_3'}, '1_2');">
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
<input type="button" value="addTreeNode" onclick="SBUxMethod.addTreeNode('sbTagNm2', 'sbling', {id:'1_3', text:'1_3'}, '1_2');">
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
<input type="button" value="addTreeNode" onclick="SBUxMethod.addTreeNode('sbTagNm2', 'sbling', {id:'1_3', text:'1_3'}, '1_2');">
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