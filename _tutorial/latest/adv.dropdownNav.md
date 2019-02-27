---
title:  드롭다운의 Bradcrumb 기능
date:   2018-12-10
categories: ["latest","adv"]
order: 13
---

드롭다운의 Bradcrumb 기능 활용하기
===

---

### STEP 1. dropdown 컴포넌트 생성
<div>1. 2level 이상의 자식구조를 가진 dropdown 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-dropdown id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" text="SBUx normal dropdown">
    <menu-item text="input">
        <menu-item text="text">
            <menu-item text="init"></menu-item>    
        </menu-item>
        <menu-item text="password"></menu-item>
    </menu-item>
    <menu-item text="picker"></menu-item>
    <menu-item text="radio"></menu-item>
    <menu-item text="select"></menu-item>
</sbux-dropdown>
{% endhighlight %}

### STEP 2. dropdown 컴포넌트에 show-bradcrumb-text 속성 추가
<div>1. show-bradcrumb-text 속성의 필수 속성인 is-change-text 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-dropdown id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" text="SBUx normal dropdown" is-change-text="true">
    <menu-item text="input">
        <menu-item text="text">
            <menu-item text="init"></menu-item>    
        </menu-item>
        <menu-item text="password"></menu-item>
    </menu-item>
    <menu-item text="picker"></menu-item>
    <menu-item text="radio"></menu-item>
    <menu-item text="select"></menu-item>
</sbux-dropdown>
{% endhighlight %}

<div>2. show-bradcrumb-text 속성을 추가합니다.</div>
<br>
{% highlight html %}
<sbux-dropdown id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" text="SBUx normal dropdown" is-change-text="true" show-bradcrumb-text="true">
    <menu-item text="input">
        <menu-item text="text">
            <menu-item text="init"></menu-item>    
        </menu-item>
        <menu-item text="password"></menu-item>
    </menu-item>
    <menu-item text="picker"></menu-item>
    <menu-item text="radio"></menu-item>
    <menu-item text="select"></menu-item>
</sbux-dropdown>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/dropdown.ischangetext#dropdown" target="_blank">dropdown > is-change-text</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/dropdown.showbradcrumbtext#dropdown" target="_blank">dropdown > show-bradcrumb-text</a><br>
    </div>
</div>