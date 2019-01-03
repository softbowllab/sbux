---
title:  jsondata-target
date:   2018-05-14
categories: ["latest","menu"]
order: 13
---

jsondata-target
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
        <td colspan="3">
            호출한 json data에서 target에 해당하는 key값<br>
            * 변동형으로 컴포넌트를 구성할때 사용합니다
        </td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>jsondata-ref</td>
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
        <td>target</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">호출한 json data에서 target에 해당하는 key값</td>
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
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<script>
    var jsonData = [                
        { "id" : "1", "pid" : "-1", "order" : "1", "text" : "SBUx" },
        { "id" : "1_1", "pid" : "1", "order" : "1", "text" : "input", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input", "targetKey" : "_blank" },
        { "id" : "1_2", "pid" : "1", "order" : "2", "text" : "select" },
        { "id" : "2", "pid" : "-1", "order" : "2", "text" : "SBChart" },
        { "id" : "3", "pid" : "-1", "order" : "3", "text" : "SBGrid" },
        { "id" : "3_1", "pid" : "3", "order" : "1", "text" : "SBGrid 2.1" },
        { "id" : "3_2", "pid" : "3", "order" : "2", "text" : "SBGrid 2.5" }
   ];  
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="normal(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var jsonData = [                
        { "id" : "1", "pid" : "-1", "order" : "1", "text" : "SBUx" },
        { "id" : "1_1", "pid" : "1", "order" : "1", "text" : "input", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input", "target" : "_blank" },
        { "id" : "1_2", "pid" : "1", "order" : "2", "text" : "select" },
        { "id" : "2", "pid" : "-1", "order" : "2", "text" : "SBChart" },
        { "id" : "3", "pid" : "-1", "order" : "3", "text" : "SBGrid" },
        { "id" : "3_1", "pid" : "3", "order" : "1", "text" : "SBGrid 2.1" },
        { "id" : "3_2", "pid" : "3", "order" : "2", "text" : "SBGrid 2.5" }
   ];  
</script>
<sbux-menu id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="jsonData" jsondata-target="targetKey" is-fixed="false">
    <brand-item text="SoftBowl"></brand-item>
</sbux-menu>
{% endhighlight %}


<br>

▶ Preview 

<sbux-menu id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="jsonData" jsondata-target="targetKey" is-fixed="false">
    <brand-item text="SoftBowl"></brand-item>
</sbux-menu>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="normal(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<script>
    var jsonData2 = [                
        { "id" : "1", "pid" : "-1", "order" : "1", "text" : "SBUx" },
        { "id" : "1_1", "pid" : "1", "order" : "1", "text" : "input", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input", "targetKey" : "_blank" },
        { "id" : "1_2", "pid" : "1", "order" : "2", "text" : "select" },
        { "id" : "2", "pid" : "-1", "order" : "2", "text" : "SBChart" },
        { "id" : "3", "pid" : "-1", "order" : "3", "text" : "SBGrid" },
        { "id" : "3_1", "pid" : "3", "order" : "1", "text" : "SBGrid 2.1" },
        { "id" : "3_2", "pid" : "3", "order" : "2", "text" : "SBGrid 2.5" }
   ];  
    $(document).ready(function(){
        $('#sbArea2_1').sbMenu({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'jsonData2',
            jsondataTarget : 'targetKey',
            isFixed : false
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<script>
    var jsonData2 = [                
        { "id" : "1", "pid" : "-1", "order" : "1", "text" : "SBUx" },
        { "id" : "1_1", "pid" : "1", "order" : "1", "text" : "input", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input", "targetKey" : "_blank" },
        { "id" : "1_2", "pid" : "1", "order" : "2", "text" : "select" },
        { "id" : "2", "pid" : "-1", "order" : "2", "text" : "SBChart" },
        { "id" : "3", "pid" : "-1", "order" : "3", "text" : "SBGrid" },
        { "id" : "3_1", "pid" : "3", "order" : "1", "text" : "SBGrid 2.1" },
        { "id" : "3_2", "pid" : "3", "order" : "2", "text" : "SBGrid 2.5" }
   ];
    $(document).ready(function(){
        $('#sbArea2_1').sbMenu({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'jsonData2',
            jsondataTarget : 'targetKey',
            isFixed : false
        });
    });
</script>

    </div>
</div>