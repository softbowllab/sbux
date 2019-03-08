---
title:  2.28 좌측 메뉴의 슬라이드 버튼
date:   2018-12-10
categories: ["latest","adv"]
order: 28
---

2.28 좌측 메뉴의 접고/펼치기 기능을 이용한 화면 넓게 사용하기
===

---

### STEP 1. sidemenu 컴포넌트 생성
<div>1. menu 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-sidemenu id="sbIdx1_1" name="sbIdx1_1" uitype="normal">
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

### STEP 2. show-slide-button 속성 추가
<div>1. show-slide-button 속성을 설정합니다.</div>
<br>
{% highlight html %}
<sbux-sidemenu id="sbIdx1_1" name="sbIdx1_1" uitype="normal" show-slide-button="true">
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

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/sidemenu.showslidebutton#sidemenu" target="_blank">sidemenu > show-slide-button</a><br>
    </div>
</div>