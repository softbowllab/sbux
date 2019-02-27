---
title:  탭 컨텐츠를 별도 창으로(MDI)
date:   2018-12-10
categories: ["latest","adv"]
order: 20
---

탭 컨텐츠를 윈도우 창으로 별도 보기
===

---

### STEP 1. tabs 컴포넌트 생성
<div>1. iframe이 적용된 tabs 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<script>
    var tabJsonData1 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_1_1", "targetname" : "targetIframe1",
        "linkKey" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_1_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="tabJsonData1"></sbux-tabs>
<div class="tab-content">
    <iframe id="idxfrmJson1" name="targetIframe1" style="width:100%;"></iframe>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

### STEP 2. div layer로 보기
<div>1. is-draggable-openlayer 속성을 설정합니다.</div>
<br>
{% highlight html %}
<script>
    var tabJsonData1 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_1_1", "targetname" : "targetIframe1",
        "linkKey" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_1_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="tabJsonData1" is-draggable-openlayer="true"></sbux-tabs>
<div class="tab-content">
    <iframe id="idxfrmJson1" name="targetIframe1" style="width:100%;"></iframe>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

### STEP 3. 새창으로 보기
<div>1. is-draggable-openwin 속성을 설정합니다.</div>
<br>
{% highlight html %}
<script>
    var tabJsonData1 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_1_1", "targetname" : "targetIframe1",
        "linkKey" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_1_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="tabJsonData1" is-draggable-openwin="true"></sbux-tabs>
<div class="tab-content">
    <iframe id="idxfrmJson1" name="targetIframe1" style="width:100%;"></iframe>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/tabs#tabs" target="_blank">tabs > tabs common</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/tabs.jsondatatargetname#tabs" target="_blank">tabs > jsondata-target-name</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/tabs.jsondatatargetlink#tabs" target="_blank">tabs > jsondata-target-link</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/tabs.isdraggableopenlayer#tabs" target="_blank">tabs > is-draggable-openlayer</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/tabs.isdraggableopenwin#tabs" target="_blank">tabs > is-draggable-openwin</a><br>
    </div>
</div>