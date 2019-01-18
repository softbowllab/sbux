---
title:  move-scroll-target-id
date:   2018-05-14
categories: ["latest","tree"]
order: 14
---

move-scroll-target-id
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
        <td colspan="3">scroll이 있는 페이지에서 method를 사용하여 node를 확장할 경우 해당 node로 scroll을 이동시킬 수 있도록 스크롤 영역 id를 지정합니다.</td>
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
        <td>해당없음</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">scroll 영역 id</td>
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
    .tab-content{
        height: 300px;
    }
</style>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2" title-text-array="normal(변동형)^checkbox(변동형)" is-scrollable="false">
</sbux-tabs>
<div id="scrollArea" class="tab-content">
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
<sbux-tree id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="treeJsonData" move-scroll-target-id="scrollArea" move-scroll-node-height="50px"></sbux-tree>
{% endhighlight %}


<br>

▶ Preview 

<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1_1', '1_2_1', 'expandParents')">
<sbux-tree id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="treeJsonData" move-scroll-target-id="scrollArea" move-scroll-node-height="50px"></sbux-tree>

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
<sbux-tree id="sbIdx1_2" name="sbTagNm1_2" uitype="checkbox" jsondata-ref="treeJsonData" move-scroll-target-id="scrollArea" move-scroll-node-height="50px"></sbux-tree>
{% endhighlight %}

<br>

▶ Preview 

<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1_2', '1_2_1', 'expandParents')">
<sbux-tree id="sbIdx1_2" name="sbTagNm1_2" uitype="checkbox" jsondata-ref="treeJsonData" move-scroll-target-id="scrollArea" move-scroll-node-height="50px"></sbux-tree>

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
<div id="sbArea2_1"></div>
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
            moveScrollTargetId : 'scrollArea2',
            moveScrollTargetHeight : '100'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<input type="button" value="set" onclick="SBUxMethod.set('sbScriptNm2_1', '1_2_1', 'expandParents')">
<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbTree({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'treeJsonData',
            moveScrollTargetId : 'scrollArea2',
            moveScrollTargetHeight : '100'
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<input type="button" value="set" onclick="SBUxMethod.set('sbScriptNm2_2', '1_2_1', 'expandParents')">
<div id="sbArea2_2"></div>
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
            moveScrollTargetId : 'scrollArea2',
            moveScrollTargetHeight : '100'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<input type="button" value="set" onclick="SBUxMethod.set('sbScriptNm2_2', '1_2_1', 'expandParents')">
<div id="sbArea2_2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_2').sbTree({
            name : 'sbScriptNm2_2',
            uitype : 'checkbox',
            jsondataRef : 'treeJsonData',
            moveScrollTargetId : 'scrollArea2',
            moveScrollTargetHeight : '100'
        });
    }); 
</script>

    </div>
</div>