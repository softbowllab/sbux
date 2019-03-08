---
title:  2.22 트리의 특정 레벨까지 확장
date:   2018-12-10
categories: ["latest","adv"]
order: 22
---

2.22 트리의 특정 레벨들을 확장한 채로 나타내기
===

---

### STEP 1. tree 컴포넌트 생성
<div>1. tree 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
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

### STEP 2. 속성으로 펼치기
<div>1. expand-open-level로 펼칠 level을 설정합니다.</div>
<br>
{% highlight html %}
<sbux-tree id="sbIdx1" name="sbTagNm1" uitype="normal" expand-open-level="1">
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

### STEP 3. Method로 펼치기
<div>1. set Method를 사용합니다.</div>
<br>
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

<div>2. expandTreeChildNodes Method를 사용합니다.</div>
<br>
{% highlight html %}
<input type="button" value="expandTreeChildNodes" onclick="SBUxMethod.expandTreeChildNodes('sbTagNm1', '2', '1');">
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

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/tree.expandopenlevel#tree" target="_blank">tree > expand-open-level</a><br><br>
        ▶ 관련 메소드<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/tree.set#tree" target="_blank">tree > set</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/tree.expandtreechildnodes#tree" target="_blank">tree > expandTreeChildNodes</a><br>
    </div>
</div>