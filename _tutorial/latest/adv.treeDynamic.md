---
title:  2.23 트리의 항목 클릭시 로딩
date:   2018-12-10
categories: ["latest","adv"]
order: 23
---

2.23 트리의 항목을 클릭시 불러오기
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

### STEP 2. changeChildTreeNode Method 사용
<div>1. 새로 추가할 tree data를 준비합니다.</div>
<br>
{% highlight html %}
<script>
    var innerData = [
        {"idKey":"1_3_1",	  "text":"전문위원실 1",    "value":"e1",	"pidKey":"1_3" },
        {"idKey":"1_3_1_1",   "text":"전문하위 1_1",	"value":"e1_1",	"pidKey":"1_3_1" },
        {"idKey":"1_3_1_2",   "text":"전문하위 1_2",	"value":"e1_2",	"pidKey":"1_3_1" },
        {"idKey":"1_3_1_2_1", "text":"전문하위 1_2_1",	"value":"e1_2",	"pidKey":"1_3_1_2" },
        {"idKey":"1_3_1_2_2", "text":"전문하위 1_2_2",	"value":"e1_2",	"pidKey":"1_3_1_2" },
        {"idKey":"1_3_2",	  "text":"전문위원실 2",	"value":"e2",	"pidKey":"1_3" }
    ];
</script>
{% endhighlight %}

<div>2. changeChildTreeNode Method를 사용합니다.</div>
<br>
{% highlight html %}
<script>
    var innerData = [
        {"idKey":"1_3_1",	  "text":"전문위원실 1",    "value":"e1",	"pidKey":"1_3" },
        {"idKey":"1_3_1_1",   "text":"전문하위 1_1",	"value":"e1_1",	"pidKey":"1_3_1" },
        {"idKey":"1_3_1_2",   "text":"전문하위 1_2",	"value":"e1_2",	"pidKey":"1_3_1" },
        {"idKey":"1_3_1_2_1", "text":"전문하위 1_2_1",	"value":"e1_2",	"pidKey":"1_3_1_2" },
        {"idKey":"1_3_1_2_2", "text":"전문하위 1_2_2",	"value":"e1_2",	"pidKey":"1_3_1_2" },
        {"idKey":"1_3_2",	  "text":"전문위원실 2",	"value":"e2",	"pidKey":"1_3" }
    ];
    function treeNodeChange(){
        SBUxMethod.changeChildTreeNode('sbIdx1_1', innerData , '1_2', false);
    }
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
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/method/latest/tree.changechildtreenode#tree" target="_blank">tree > changeChildTreeNode</a><br>
    </div>
</div>