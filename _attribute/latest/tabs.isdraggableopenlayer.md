---
title:  is-draggable-openlayer
date:   2018-05-14
categories: ["latest","tabs"]
order: 27
---

is-draggable-openlayer
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
        <td colspan="3">tab을 drag하여 별도의 layerpopup을 open합니다.</td>
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
        <td>false</td>
        <td class="tdTitle">자료형</td>
        <td>boolean</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">true | false</td>
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
        <td class="tdCenter">inbox</td>
        <td class="tdCenter">webacc</td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdCenter">X</td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}^{exTab1_3,exTab1_4}" title-text-array="normal{고정형,변동형}^inbox{고정형,변동형}" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" title-target-id-array="tab1_1_1^tab1_1_2" title-text-array="tab1^tab2" is-draggable-openlayer="true"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_1_1">
        tab1 content
    </div>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

<br>

▶ Preview 

<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" title-target-id-array="tab1_1_1^tab1_1_2" title-text-array="tab1^tab2" is-draggable-openlayer="true"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_1_1">
        tab1 content
    </div>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var tabJsonData2 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_2_1" },                        
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_2_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_2" name="sbTagNm1_2" uitype="normal" jsondata-ref="tabJsonData2" is-draggable-openlayer="true"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_2_1">
        tab1 content
    </div>
    <div id="tab1_2_2">
        tab2 content
    </div>
</div>
{% endhighlight %}


<br>

▶ Preview 

<script>
    var tabJsonData2 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_2_1" },                        
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_2_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_2" name="sbTagNm1_2" uitype="normal" jsondata-ref="tabJsonData2" is-draggable-openlayer="true"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_2_1">
        tab1 content
    </div>
    <div id="tab1_2_2">
        tab2 content
    </div>
</div>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-tabs id="sbIdx1_3" name="sbTagNm1_3" uitype="inbox" title-target-id-array="tab1_3_1^tab1_3_2" title-text-array="tab1^tab2" is-draggable-openlayer="true"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_3_1">
        tab1 content
    </div>
    <div id="tab1_3_2">
        tab2 content
    </div>
</div>
{% endhighlight %}

<br>

▶ Preview 

<sbux-tabs id="sbIdx1_3" name="sbTagNm1_3" uitype="inbox" title-target-id-array="tab1_3_1^tab1_3_2" title-text-array="tab1^tab2" is-draggable-openlayer="true"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_3_1">
        tab1 content
    </div>
    <div id="tab1_3_2">
        tab2 content
    </div>
</div>

    </div>
    <div id="exTab1_4">

▶ Example

{% highlight html %}
<script>
    var tabJsonData4 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_4_1" },                        
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_4_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_4" name="sbTagNm1_4" uitype="inbox" jsondata-ref="tabJsonData4" is-draggable-openlayer="true"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_4_1">
        tab1 content
    </div>
    <div id="tab1_4_2">
        tab2 content
    </div>
</div>
{% endhighlight %}


<br>

▶ Preview 

<script>
    var tabJsonData4 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_4_1" },                        
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_4_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_4" name="sbTagNm1_4" uitype="inbox" jsondata-ref="tabJsonData4" is-draggable-openlayer="true"></sbux-tabs>
<div class="tab-content">
    <div id="tab1_4_1">
        tab1 content
    </div>
    <div id="tab1_4_2">
        tab2 content
    </div>
</div>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2" title-text-array="normal(변동형)^inbox(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<div class="tab-content">
    <div id="tab1_7_1">
        tab1 content
    </div>
    <div id="tab1_7_2">
        tab2 content
    </div>
</div>
<script>
    var tabJsonData7 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_7_1" },                        
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_7_2" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_1').sbTabs({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'tabJsonData7'
            isDraggableOpenlayer : true
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<div class="tab-content">
    <div id="tab2_1_1">
        tab1 content
    </div>
    <div id="tab2_1_2">
        tab2 content
    </div>
</div>
<script>
    var tabJsonData7 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab2_1_1" },                        
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab2_1_2" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_1').sbTabs({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'tabJsonData7',
            isDraggableOpenlayer : true
        });
    });  
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2_2"></div>
<div class="tab-content">
    <div id="tab2_2_1">
        tab1 content
    </div>
    <div id="tab2_2_2">
        tab2 content
    </div>
</div>
<script>
    var tabJsonData8 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab2_2_1" },                        
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab2_2_2" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_2').sbTabs({
            name : 'sbScriptNm2_2',
            uitype : 'inbox',
            jsondataRef : 'tabJsonData8',
            isDraggableOpenlayer : true
        });
    });  
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_2"></div>
<div class="tab-content">
    <div id="tab2_2_1">
        tab1 content
    </div>
    <div id="tab2_2_2">
        tab2 content
    </div>
</div>
<script>
    var tabJsonData8 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab2_2_1" },                        
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab2_2_2" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_2').sbTabs({
            name : 'sbScriptNm2_2',
            uitype : 'inbox',
            jsondataRef : 'tabJsonData8',
            isDraggableOpenlayer : true
        });
    });  
</script>

    </div>
</div>