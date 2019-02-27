---
title:  트리에 붙는 컨텍스트 메뉴
date:   2018-12-10
categories: ["latest","adv"]
order: 25
---

트리에 다양한 컨텍스트 메뉴 붙이기
===

---

### STEP 1. contextmenu 연동
<div>1. contextmenu를 연동할 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-tree id="sbIdx1_1" name="sbIdx1_1" uitype="normal">
    <tree-item text="1">
        <tree-item text="1_1">
            <tree-item text="1_1_1"></tree-item>
        </tree-item>
        <tree-item text="1_2">
            <tree-item text="1_2_1"></tree-item>
        </tree-item>
    </tree-item>
</sbux-tree>
{% endhighlight %}

<div>2. contextmenu를 생성하고 컴포넌트와 연동합니다.</div>
<br>
{% highlight html %}
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
<sbux-contextmenu id="sbcontenxt1" name="sbcontenxt1">
    <menu-item id="context1_menu1" text="menu1">
        <menu-item id="context1_menu1_1" text="menu1_1"></menu-item>
        <menu-item id="context1_menu1_2" text="menu1_2"></menu-item>
    </menu-item>
    <menu-item id="context1_menu2" text="menu2"></menu-item>
    <menu-item id="context1_menu3" text="menu3"></menu-item>
</sbux-contextmenu>
{% endhighlight %}


<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/contextmenu.expandopenlevel#contextmenu" target="_blank">contextmenu > contextmenu common</a><br>
    </div>
</div>