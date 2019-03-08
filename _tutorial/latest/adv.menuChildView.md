---
title:  2.21 메뉴 하위 구조를 한꺼번에
date:   2018-12-10
categories: ["latest","adv"]
order: 21
---

2.21 메뉴 하위 구조를 한꺼번에 보기
===

---

### STEP 1. menu 컴포넌트 생성
<div>1. menu 컴포넌트를 생성하고 trigger 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-menu id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" trigger="hover">
   <brand-item text="SoftBowl"></brand-item>
   <menu-item text="SBUx">
       <menu-item text="input"></menu-item>
       <menu-item text="select"></menu-item>
   </menu-item>
   <menu-item text="SBChart"></menu-item>
   <menu-item text="SBGrid">
        <menu-item text="SBGrid 2.1"></menu-item>
        <menu-item text="SBGrid 2.5"></menu-item>
   </menu-item>
</sbux-menu>
{% endhighlight %}

### STEP 2. 전체 메뉴 보기
<div>1. show-all-menu 속성을 설정합니다.</div>
<br>
{% highlight html %}
<sbux-menu id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" trigger="hover" show-all-menu="true">
   <brand-item text="SoftBowl"></brand-item>
   <menu-item text="SBUx">
       <menu-item text="input"></menu-item>
       <menu-item text="select"></menu-item>
   </menu-item>
   <menu-item text="SBChart"></menu-item>
   <menu-item text="SBGrid">
        <menu-item text="SBGrid 2.1"></menu-item>
        <menu-item text="SBGrid 2.5"></menu-item>
   </menu-item>
</sbux-menu>
{% endhighlight %}

### STEP 3. 자식 메뉴만 보기
<div>1. show-sub-all-menu 속성을 설정합니다.</div>
<br>
{% highlight html %}
<sbux-menu id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" trigger="hover" show-sub-all-menu="true">
   <brand-item text="SoftBowl"></brand-item>
   <menu-item text="SBUx">
       <menu-item text="input"></menu-item>
       <menu-item text="select"></menu-item>
   </menu-item>
   <menu-item text="SBChart"></menu-item>
   <menu-item text="SBGrid">
        <menu-item text="SBGrid 2.1"></menu-item>
        <menu-item text="SBGrid 2.5"></menu-item>
   </menu-item>
</sbux-menu>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/menu.trigger#menu" target="_blank">menu > trigger</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/menu.showallmenu#menu" target="_blank">menu > show-all-menu</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/menu.showsuballmenu#menu" target="_blank">menu > show-sub-all-menu</a><br>
    </div>
</div>