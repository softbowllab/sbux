---
title:  callback
date:   2018-05-14
categories: ["latest","contextmenu"]
order: 4
---

callback
===

---

## Description

<table style="width:100%">
    <colgroup>
        <col width="15%"/>
        <col width="35%"/>
        <col width="15%"/>
        <col width="35%"/>
    </colgroup>
    <tr>
        <td class="tdTitle">설명</td>
        <td colspan="3">
            menu가 선택되면 호출되는 function을 지정합니다.<br>
            (sbux-input, sbux-label, sbux-picker, sbux-tree 에서만 사용가능합니다.)
        </td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>contextmenu-id (연동할 component에 설정)</td>
        <td class="tdTitle">연관자료</td>
        <td>해당없음</td>
    </tr>
</table>
<table style="width:100%">
    <colgroup>
        <col width="15%"/>
        <col width="35%"/>
        <col width="15%"/>
        <col width="35%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg" colspan="4">속성값</td>
    </tr>
    <tr>
        <td class="tdTitle">기본값</td>
        <td>해당없음</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">호출할 function명</td>
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
        <td class="tdTitle tdBg" colspan="5">사용제한</td>
    </tr>
    <tr>
        <td>uitype</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1" },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1" }
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="contextmenu" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    function contextmenuCallbackFunc(){
        alert("menu click callback");
    }
</script>
<sbux-tree id="sbIdx1_1" name="sbIdx1_1" uitype="normal" contextmenu-id="sbcontenxt1">
    <tree-item text="1">
        <tree-item text="1_1">
            <tree-item text="1_1_1"></tree-item>
        </tree-item>
        <tree-item text="1_2">
            <tree-item text="1_2_1"></tree-item>
        </tree-item>
    </tree-item>
</sbux-tree>
<sbux-contextmenu id="sbcontenxt1" name="sbcontenxt1" callback="contextmenuCallbackFunc">
    <menu-item id="context1_menu1" text="menu1">
        <menu-item id="context1_menu1_1" text="menu1_1"></menu-item>
        <menu-item id="context1_menu1_2" text="menu1_2"></menu-item>
    </menu-item>
    <menu-item id="context1_menu2" text="menu2"></menu-item>
    <menu-item id="context1_menu3" text="menu3"></menu-item>
</sbux-contextmenu>
{% endhighlight %}

<br>

▶ Preview 

<script>
    function contextmenuCallbackFunc(){
        alert("menu click callback");
    }
</script>
<sbux-tree id="sbIdx1_1" name="sbIdx1_1" uitype="normal" contextmenu-id="sbcontenxt1">
    <tree-item text="1">
        <tree-item text="1_1">
            <tree-item text="1_1_1"></tree-item>
        </tree-item>
        <tree-item text="1_2">
            <tree-item text="1_2_1"></tree-item>
        </tree-item>
    </tree-item>
</sbux-tree>
<sbux-contextmenu id="sbcontenxt1" name="sbcontenxt1" callback="contextmenuCallbackFunc">
    <menu-item id="context1_menu1" text="menu1">
        <menu-item id="context1_menu1_1" text="menu1_1"></menu-item>
        <menu-item id="context1_menu1_2" text="menu1_2"></menu-item>
    </menu-item>
    <menu-item id="context1_menu2" text="menu2"></menu-item>
    <menu-item id="context1_menu3" text="menu3"></menu-item>
</sbux-contextmenu>

    </div>
</div>