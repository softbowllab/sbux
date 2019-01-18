---
title:  show-tooltip-key
date:   2018-05-14
categories: ["latest","tree"]
order: 13
---

show-tooltip-key
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
        <td class="tdTitle">설명</td>
        <td colspan="3">Component 내부 node에 tooltip을 표시할때 참조하는 key값을 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>해당없음</td>
        <td class="tdTitle">연관자료</td>
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
        <td class="tdTitle tdBg" colspan="4">속성값</td>
    </tr>
    <tr>
        <td class="tdTitle">기본값</td>
        <td>text</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">tooltip에 참조할 key값</td>
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
        <td class="tdTitle tdBg" colspan="5">사용제한</td>
    </tr>
    <tr>
        <td>uitype</td>
        <td class="tdCenter">normal</td>
        <td class="tdCenter">checkbox</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
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
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1", "tooltip":"tooltip1" },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1", "tooltip":"tooltip1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2", "tooltip":"tooltip1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1", "tooltip":"tooltip1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1", "tooltip":"tooltip1_2_1" }
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2" title-text-array="normal(변동형)^checkbox(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1", "tooltip":"tooltip1" },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1", "tooltip":"tooltip1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2", "tooltip":"tooltip1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1", "tooltip":"tooltip1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1", "tooltip":"tooltip1_2_1" }
    ]; 
</script>
<sbux-tree id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="treeJsonData" show-tooltip="true" show-tooltip-key="tooltip"></sbux-tree>
{% endhighlight %}


<br>

▶ Preview 

<sbux-tree id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="treeJsonData" show-tooltip="true" show-tooltip-key="tooltip"></sbux-tree>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1", "tooltip":"tooltip1" },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1", "tooltip":"tooltip1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2", "tooltip":"tooltip1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1", "tooltip":"tooltip1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1", "tooltip":"tooltip1_2_1" }
    ]; 
</script>
<sbux-tree id="sbIdx1_2" name="sbTagNm1_2" uitype="checkbox" jsondata-ref="treeJsonData" show-tooltip="true" show-tooltip-key="tooltip"></sbux-tree>
{% endhighlight %}

<br>

▶ Preview 

<sbux-tree id="sbIdx1_2" name="sbTagNm1_2" uitype="checkbox" jsondata-ref="treeJsonData" show-tooltip="true" show-tooltip-key="tooltip"></sbux-tree>

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
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1", "tooltip":"tooltip1" },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1", "tooltip":"tooltip1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2", "tooltip":"tooltip1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1", "tooltip":"tooltip1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1", "tooltip":"tooltip1_2_1" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_1').sbTree({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'treeJsonData',
            showTooltip : true,
            showTooltipKey : 'tooltip'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbTree({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'treeJsonData',
            showTooltip : true,
            showTooltipKey : 'tooltip'
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2_2"></div>
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1", "tooltip":"tooltip1" },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1", "tooltip":"tooltip1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2", "tooltip":"tooltip1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1", "tooltip":"tooltip1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1", "tooltip":"tooltip1_2_1" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_2').sbTree({
            name : 'sbScriptNm2_2',
            uitype : 'checkbox',
            jsondataRef : 'treeJsonData',
            showTooltip : true,
            showTooltipKey : 'tooltip'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_2').sbTree({
            name : 'sbScriptNm2_2',
            uitype : 'checkbox',
            jsondataRef : 'treeJsonData',
            showTooltip : true,
            showTooltipKey : 'tooltip'
        });
    }); 
</script>

    </div>
</div>