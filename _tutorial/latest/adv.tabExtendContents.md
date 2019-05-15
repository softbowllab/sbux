---
title:  2.19 탭 내 컨텐츠를 외부 파일 연결
date:   2018-12-10
categories: ["latest","adv"]
order: 19
---

2.19 탭 내 컨텐츠를 외부 파일과 연결시키기
===

---

### STEP 1. tabs 컴포넌트 생성
<div>1. tabs 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<script>
    var tabJsonData1 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_1_1" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_1_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="tabJsonData1" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_1_1">
        tab1 content
    </div>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

### STEP 2. iframe으로 연결
<div>1. iframe을 추가하고 data에 targetname을 설정합니다.</div>
<br>
{% highlight html %}
<script>
    var tabJsonData1 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_1_1", "targetname" : "targetIframe1" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_1_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="tabJsonData1" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <iframe id="idxfrmJson1" name="targetIframe1" style="width:100%;"></iframe>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

<div>2. 연결할 페이지를 data에 link를 설정합니다.</div>
<br>
{% highlight html %}
<script>
    var tabJsonData1 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_1_1", "targetname" : "targetIframe1",
        "linkKey" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_1_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="tabJsonData1" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <iframe id="idxfrmJson1" name="targetIframe1" style="width:100%;"></iframe>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

### STEP 3. 외부 페이지를 직접 import
<div>1. import할 페이지 링크를 data contentlink에 설정합니다.</div>
<br>
{% highlight html %}
<script>
    var tabJsonData1 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_1_1",
        "contentlink" : "https://softbowllab.github.io/sbux/attribute/htmlcontent/aframe.html" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_1_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="tabJsonData1" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_1_1">
        tab1 content
    </div>
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
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/tabs.jsondatacontentlink#tabs" target="_blank">tabs > jsondata-content-link</a><br>
    </div>
</div>