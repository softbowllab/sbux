---
title:  어코디언 내 다양한 컨텐츠
date:   2018-12-10
categories: ["latest","adv"]
order: 26
---

어코디언에 다양한 컨텐츠 넣기
===

---

### STEP 1. accordion 컴포넌트 생성
<div>1. 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-accordion id="sbIdx1_1" name="sbIdx1_1" uitype="normal" title-target-id-array="acc1_1^acc1_2" title-text-array="acc1_1^acc1_2"></sbux-accordion>
<div id="acc1_1">
   acc contents 1
</div>
<div id="acc1_2">
   acc contents 2
</div>
{% endhighlight %}

### STEP 2. 다양한 content 추가
<div>1. html tag를 입력합니다.</div>
<br>
{% highlight html %}
<sbux-accordion id="sbIdx1_1" name="sbIdx1_1" uitype="normal" title-target-id-array="acc1_1^acc1_2" title-text-array="acc1_1^acc1_2"></sbux-accordion>
<div id="acc1_1">
    <ul>
        <li>list1</li>
        <li>list2</li>
    </ul>
</div>
<div id="acc1_2">
    <p>accordion</p>
</div>
{% endhighlight %}

<div>2. iframe으로 외부 content를 호출합니다. (고정형)</div>
<br>
{% highlight html %}
<sbux-accordion id="sbIdx1_1" name="sbIdx1_1" uitype="normal" title-target-id-array="acc1_1^acc1_2"
                title-text-array="acc1_1^acc1_2"
                title-frame-name-array="targetIframe1^targetIframe2"
                title-frame-link-array="https://softbowllab.github.io/sbux^https://softbowllab.github.io/sbgrid"></sbux-accordion>
<div id="acc1_1">
    <iframe id="idxfrmJson1" name="targetIframe1" style="width:100%;"></iframe>
</div>
<div id="acc1_2">
    <iframe id="idxfrmJson2" name="targetIframe2" style="width:100%;"></iframe>
</div>
{% endhighlight %}

<div>3. iframe으로 외부 content를 호출합니다. (변동형)</div>
<br>
{% highlight html %}
<script>
    var accJsonData=[
        { "id": "0", "pid": "-1", "order": "1", "targetid": "acc1_1", "text": "acc1_1", "link":"https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input", "targetname":"targetIframe" },
        { "id": "1", "pid": "-1", "order": "2", "targetid": "acc1_2", "text": "acc1_2" }
    ];
</script>
<sbux-accordion id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="accJsonData"></sbux-accordion>
<div id="acc1_1">
    <iframe id="idxfrmJson1" name="targetIframe" style="width:100%;"></iframe>
</div>
<div id="acc1_2">
    acc contents 2
</div>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/accordion#accordion" target="_blank">accordion > accordion common</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/accordion.titleframenamearray#accordion" target="_blank">accordion > title-frame-name-array</a><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/accordion.titleframelinkarray#accordion" target="_blank">accordion > title-frame-link-array</a><br>
    </div>
</div>