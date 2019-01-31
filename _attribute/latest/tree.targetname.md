---
title:  target-name
date:   2018-05-14
categories: ["latest","tree"]
order: 35
---

target-name
===

---

## Description

<table style="width:100%">
    <colgroup>
        <col width="15%"/>
        <col width="35%"/>
        <col width="15%"/>
        <col width="35%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg">설명</td>
        <td colspan="3">node click시 이동할 iframe name을 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle tdBg">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">선결조건</td>
        <td>해당없음</td>
        <td class="tdTitle tdBg">연관자료</td>
        <td>해당없음</td>
    </tr>
</table>
<table style="width:100%">
    <colgroup>
        <col width="15%"/>
        <col width="35%"/>
        <col width="15%"/>
        <col width="35%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg tdCenter" colspan="4">속성값</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">기본값</td>
        <td>해당없음</td>
        <td class="tdTitle tdBg">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">값형태</td>
        <td colspan="3">지정할 iframe name</td>
    </tr>
</table>
<table style="width:100%">
    <colgroup>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg tdCenter" colspan="5">사용제한</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype</td>
        <td class="tdCenter">normal</td>
        <td class="tdCenter">checkbox</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input"
         },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1" }
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}^{exTab1_3,exTab1_4}" title-text-array="normal{고정형,변동형}^checkbox{고정형,변동형}" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-tree id="sbIdx1_1" name="sbIdx1_1" uitype="normal" target-name="targetIframe">
    <tree-item text="1" link="https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input">
        <tree-item text="1_1">
            <tree-item text="1_1_1"></tree-item>
        </tree-item>
        <tree-item text="1_2">
            <tree-item text="1_2_1"></tree-item>
        </tree-item>
    </tree-item>
</sbux-tree>
<iframe id="idxfrmJson1" name="targetIframe" style="width:100%;"></iframe>
{% endhighlight %}

<br>

▶ Preview 

<sbux-tree id="sbIdx1_1" name="sbIdx1_1" uitype="normal" target-name="targetIframe">
    <tree-item text="1" link="https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input">
        <tree-item text="1_1">
            <tree-item text="1_1_1"></tree-item>
        </tree-item>
        <tree-item text="1_2">
            <tree-item text="1_2_1"></tree-item>
        </tree-item>
    </tree-item>
</sbux-tree>
<iframe id="idxfrmJson1" name="targetIframe" style="width:100%;"></iframe>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input"
         },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1" }
    ];
</script>
<sbux-tree id="sbIdx1_2" name="sbTagNm1_2" uitype="normal" jsondata-ref="treeJsonData" target-name="targetIframe2"></sbux-tree>
<iframe id="idxfrmJson2" name="targetIframe2" style="width:100%;"></iframe>
{% endhighlight %}


<br>

▶ Preview 

<sbux-tree id="sbIdx1_2" name="sbTagNm1_2" uitype="normal" jsondata-ref="treeJsonData" target-name="targetIframe2"></sbux-tree>
<iframe id="idxfrmJson2" name="targetIframe2" style="width:100%;"></iframe>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-tree id="sbIdx1_3" name="sbIdx1_3" uitype="checkbox" target-name="targetIframe3">
    <tree-item text="1" link="https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input">
        <tree-item text="1_1">
            <tree-item text="1_1_1"></tree-item>
        </tree-item>
        <tree-item text="1_2">
            <tree-item text="1_2_1"></tree-item>
        </tree-item>
    </tree-item>
</sbux-tree>
<iframe id="idxfrmJson3" name="targetIframe3" style="width:100%;"></iframe>
{% endhighlight %}

<br>

▶ Preview 

<sbux-tree id="sbIdx1_3" name="sbIdx1_3" uitype="checkbox" target-name="targetIframe3">
    <tree-item text="1" link="https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input">
        <tree-item text="1_1">
            <tree-item text="1_1_1"></tree-item>
        </tree-item>
        <tree-item text="1_2">
            <tree-item text="1_2_1"></tree-item>
        </tree-item>
    </tree-item>
</sbux-tree>
<iframe id="idxfrmJson3" name="targetIframe3" style="width:100%;"></iframe>

    </div>
    <div id="exTab1_4">

▶ Example

{% highlight html %}
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input"
         },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1" }
    ];
</script>
<sbux-tree id="sbIdx1_4" name="sbTagNm1_4" uitype="checkbox" jsondata-ref="treeJsonData" target-name="targetIframe4"></sbux-tree>
<iframe id="idxfrmJson4" name="targetIframe4" style="width:100%;"></iframe>
{% endhighlight %}


<br>

▶ Preview 

<sbux-tree id="sbIdx1_4" name="sbTagNm1_4" uitype="checkbox" jsondata-ref="treeJsonData" target-name="targetIframe4"></sbux-tree>
<iframe id="idxfrmJson4" name="targetIframe4" style="width:100%;"></iframe>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2" title-text-array="normal(변동형)^checkbox(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<iframe id="idxfrmJson5" name="targetIframe5" style="width:100%;"></iframe>
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input"
         },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1" }
    ];
    $(document).ready(function(){
        $('#sbArea2_1').sbTree({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'treeJsonData',
            targetName : 'targetIframe5'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<iframe id="idxfrmJson5" name="targetIframe5" style="width:100%;"></iframe>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbTree({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'treeJsonData',
            targetName : 'targetIframe5'
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2_2"></div>
<iframe id="idxfrmJson6" name="targetIframe6" style="width:100%;"></iframe>
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input"
         },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1" }
    ];
    $(document).ready(function(){
        $('#sbArea2_2').sbTree({
            name : 'sbScriptNm2_2',
            uitype : 'checkbox',
            jsondataRef : 'treeJsonData',
            targetName : 'targetIframe6'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_2"></div>
<iframe id="idxfrmJson6" name="targetIframe6" style="width:100%;"></iframe>
<script>
    $(document).ready(function(){
        $('#sbArea2_2').sbTree({
            name : 'sbScriptNm2_2',
            uitype : 'checkbox',
            jsondataRef : 'treeJsonData',
            targetName : 'targetIframe6'
        });
    }); 
</script>

    </div>
</div>