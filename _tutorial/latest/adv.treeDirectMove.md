---
title:  2.24 트리와 조건에 대한 포커싱
date:   2018-12-10
categories: ["latest","adv"]
order: 24
---

2.24 트리의 특정항목으로 바로 이동시켜 포커싱하기
===

---

### STEP 1. tree 컴포넌트 생성
<div>1. tree 컴포넌트를 생성합니다.</div>
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

### STEP 2. set Method 사용
<div>1. set Method를 사용하여 tree를 펼칩니다.</div>
<br>
{% highlight html %}
<script>
    $(document).ready(function(){
        SBUxMethod.set('sbIdx1_1', '1_2_1', 'expand')
    });
</script>
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

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 메소드<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/tree.set#tree" target="_blank">tree > set</a><br>
    </div>
</div>