---
title:  move-scroll-node-height
date:   2018-05-14
categories: ["latest","tree"]
order: 15
---

move-scroll-node-height
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
        <td colspan="3">scroll 이동시 한개 node의 height를 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>move-scroll-target-height</td>
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
        <td>32px</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">node의 height</td>
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
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1" },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1" }
    ];
</script>

<style>
     .scrollareaCss{
        height: 50px;
        overflow: scroll;
    }
</style>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2" title-text-array="normal(변동형)^checkbox(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1" },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1" }
    ]; 
</script>
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1_1', '1_2_1', 'expandParents')">
<div id="scrollArea1" class="scrollareaCss">
    <sbux-tree id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="treeJsonData" move-scroll-target-id="scrollArea" move-scroll-node-height="22px"></sbux-tree>
</div>
{% endhighlight %}


<br>

▶ Preview 

<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1_1', '1_2_1', 'expandParents')">
<div id="scrollArea1" class="scrollareaCss">
    <sbux-tree id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="treeJsonData" move-scroll-target-id="scrollArea1" move-scroll-node-height="22px"></sbux-tree>
</div>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1" },
        { "id":"1_1",   "pid":"1",   "order" : "1", "text" : "1_1" },
        { "id":"1_2",   "pid":"1",   "order" : "2", "text" : "1_2" },
        { "id":"1_1_1", "pid":"1_1", "order" : "1", "text" : "1_1_1" },
        { "id":"1_2_1", "pid":"1_2", "order" : "2", "text" : "1_2_1" }
    ]; 
</script>
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1_2', '1_2_1', 'expandParents')">
<div id="scrollArea2" class="scrollareaCss">
    <sbux-tree id="sbIdx1_2" name="sbTagNm1_2" uitype="checkbox" jsondata-ref="treeJsonData" move-scroll-target-id="scrollArea2" move-scroll-node-height="22px"></sbux-tree>
</div>
{% endhighlight %}

<br>

▶ Preview 

<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1_2', '1_2_1', 'expandParents')">
<div id="scrollArea2" class="scrollareaCss">
    <sbux-tree id="sbIdx1_2" name="sbTagNm1_2" uitype="checkbox" jsondata-ref="treeJsonData" move-scroll-target-id="scrollArea2" move-scroll-node-height="22px"></sbux-tree>
</div>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2" title-text-array="normal(변동형)^checkbox(변동형)" is-scrollable="false">
</sbux-tabs>
<div id="scrollArea2" class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<input type="button" value="set" onclick="SBUxMethod.set('sbScriptNm2_1', '1_2_1', 'expandParents')">
<div id="scrollArea3" class="scrollareaCss">
    <div id="sbArea2_1"></div>
</div>
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1" },
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
            moveScrollTargetId : 'scrollArea3',
            moveScrollNodeHeight : '22'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<input type="button" value="set" onclick="SBUxMethod.set('sbScriptNm2_1', '1_2_1', 'expandParents')">
<div id="scrollArea3" class="scrollareaCss">
    <div id="sbArea2_1"></div>
</div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbTree({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'treeJsonData',
            moveScrollTargetId : 'scrollArea3',
            moveScrollNodeHeight : '22'
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<input type="button" value="set" onclick="SBUxMethod.set('sbScriptNm2_2', '1_2_1', 'expandParents')">
<div id="scrollArea4" class="scrollareaCss">
    <div id="sbArea2_2"></div>
</div>
<script>
    var treeJsonData=[
        { "id":"1",     "pid":"-1",  "order" : "1", "text" : "1" },
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
            moveScrollTargetId : 'scrollArea4',
            moveScrollNodeHeight : '22'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<input type="button" value="set" onclick="SBUxMethod.set('sbScriptNm2_2', '1_2_1', 'expandParents')">
<div id="scrollArea4" class="scrollareaCss">
    <div id="sbArea2_2"></div>
</div>
<script>
    $(document).ready(function(){
        $('#sbArea2_2').sbTree({
            name : 'sbScriptNm2_2',
            uitype : 'checkbox',
            jsondataRef : 'treeJsonData',
            moveScrollTargetId : 'scrollArea4',
            moveScrollNodeHeight : '22'
        });
    }); 
</script>

    </div>
</div>