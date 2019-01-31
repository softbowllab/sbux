---
title:  jsondata-target-name
date:   2018-05-14
categories: ["latest","tabs"]
order: 20
---

jsondata-target-name
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
        <td colspan="3">
            호출한 json data에서 target name에 해당하는 key값을 지정합니다.<br>
            * 변동형으로 컴포넌트를 구성할때 사용합니다.
        </td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle tdBg">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">선결조건</td>
        <td>jsondata-ref</td>
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
        <td>targetname</td>
        <td class="tdTitle tdBg">자료형</td>
        <td>stirng</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">값형태</td>
        <td colspan="3">호출한 json data에서 target name에 해당하는 key값</td>
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
        <td class="tdCenter">inbox</td>
        <td class="tdCenter">webacc</td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3" title-text-array="normal(변동형)^inbox(변동형)^webacc(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var tabJsonData1 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_1_1", "targetNm" : "targetIframe1", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_1_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="tabJsonData1" jsondata-target-name="targetNm" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <iframe id="idxfrmJson1" name="targetIframe1" style="width:100%;"></iframe>
    <div id="tab1_1_2">
        tab2 content
    </div>
</div>
{% endhighlight %}


<br>

▶ Preview 

<script>
    var tabJsonData1 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_1_1", "targetNm" : "targetIframe1", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_1_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="tabJsonData1" jsondata-target-name="targetNm" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <iframe id="idxfrmJson1" name="targetIframe1" style="width:100%;"></iframe>
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
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_2_1", "targetNm" : "targetIframe2", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_2_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_2" name="sbTagNm1_2" uitype="inbox" jsondata-ref="tabJsonData2" jsondata-target-name="targetNm" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <iframe id="idxfrmJson2" name="targetIframe2" style="width:100%;"></iframe>
    <div id="tab1_2_2">
        tab2 content
    </div>
</div>
{% endhighlight %}


<br>

▶ Preview 

<script>
    var tabJsonData2 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_2_1", "targetNm" : "targetIframe2", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_2_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_2" name="sbTagNm1_2" uitype="inbox" jsondata-ref="tabJsonData2" jsondata-target-name="targetNm" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <iframe id="idxfrmJson2" name="targetIframe2" style="width:100%;"></iframe>
    <div id="tab1_2_2">
        tab2 content
    </div>
</div>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<script>
    var tabJsonData3 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_3_1", "targetNm" : "targetIframe3", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_3_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_3" name="sbTagNm1_3" uitype="webacc" jsondata-ref="tabJsonData3" jsondata-target-name="targetNm" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <iframe id="idxfrmJson3" name="targetIframe3" style="width:100%;"></iframe>
    <div id="tab1_3_2">
        tab2 content
    </div>
</div>
{% endhighlight %}


<br>

▶ Preview 

<script>
    var tabJsonData3 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_3_1", "targetNm" : "targetIframe3", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_3_2" }
    ];  
</script>
<sbux-tabs id="sbIdx1_3" name="sbTagNm1_3" uitype="webacc" jsondata-ref="tabJsonData3" jsondata-target-name="targetNm" is-scrollable="false"></sbux-tabs>
<div class="tab-content">
    <iframe id="idxfrmJson3" name="targetIframe3" style="width:100%;"></iframe>
    <div id="tab1_3_2">
        tab2 content
    </div>
</div>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2^exTab2_3" title-text-array="normal(변동형)^inbox(변동형)^webacc(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<div class="tab-content">
    <iframe id="idxfrmJson4" name="targetIframe4" style="width:100%;"></iframe>
    <div id="tab1_4_2">
        tab2 content
    </div>
</div>
<script>
    var tabJsonData4 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab1_4_1", "targetNm" : "targetIframe4", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab1_4_2" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_1').sbTabs({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'tabJsonData4',
            jsondataTargetName : 'targetNm',
            isScrollable : false
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<div class="tab-content">
    <iframe id="idxfrmJson4" name="targetIframe4" style="width:100%;"></iframe>
    <div id="tab2_1_2">
        tab2 content
    </div>
</div>
<script>
    var tabJsonData4 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab2_1_1", "targetNm" : "targetIframe4", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab2_1_2" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_1').sbTabs({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'tabJsonData4',
            jsondataTargetName : 'targetNm',
            isScrollable : false
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2_2"></div>
<div class="tab-content">
    <iframe id="idxfrmJson5" name="targetIframe5" style="width:100%;"></iframe>
    <div id="tab2_2_2">
        tab2 content
    </div>
</div>
<script>
    var tabJsonData5 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab2_2_1", "targetNm" : "targetIframe5", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab2_2_2" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_2').sbTabs({
            name : 'sbScriptNm2_2',
            uitype : 'inbox',
            jsondataRef : 'tabJsonData5',
            jsondataTargetName : 'targetNm',
            isScrollable : false
        });
    });  
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_2"></div>
<div class="tab-content">
    <iframe id="idxfrmJson5" name="targetIframe5" style="width:100%;"></iframe>
    <div id="tab2_2_2">
        tab2 content
    </div>
</div>
<script>
    var tabJsonData5 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab2_2_1", "targetNm" : "targetIframe5", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab2_2_2" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_2').sbTabs({
            name : 'sbScriptNm2_2',
            uitype : 'inbox',
            jsondataRef : 'tabJsonData5',
            jsondataTargetName : 'targetNm',
            isScrollable : false
        });
    });  
</script>

    </div>
    <div id="exTab2_3">

▶ Example

{% highlight html %}
<div id="sbArea2_3"></div>
<div class="tab-content">
    <iframe id="idxfrmJson6" name="targetIframe6" style="width:100%;"></iframe>
    <div id="tab2_3_2">
        tab2 content
    </div>
</div>
<script>
    var tabJsonData6 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab2_3_1", "targetNm" : "targetIframe6", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab2_3_2" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_3').sbTabs({
            name : 'sbScriptNm2_3',
            uitype : 'webacc',
            jsondataRef : 'tabJsonData6',
            jsondataTargetName : 'targetNm',
            isScrollable : false
        });
    });  
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_3"></div>
<div class="tab-content">
    <iframe id="idxfrmJson6" name="targetIframe6" style="width:100%;"></iframe>
    <div id="tab2_3_2">
        tab2 content
    </div>
</div>
<script>
    var tabJsonData6 = [                
        { "id" : "0", "pid" : "-1", "order" : "1", "text" : "tab1", "targetid" : "tab2_3_1", "targetNm" : "targetIframe6", "link" : "https://softbowllab.github.io/sbux/attribute/latest/input.uitype#input" },
        { "id" : "1", "pid" : "-1", "order" : "2", "text" : "tab2", "targetid" : "tab2_3_2" }
    ]; 
    $(document).ready(function(){
        $('#sbArea2_3').sbTabs({
            name : 'sbScriptNm2_3',
            uitype : 'webacc',
            jsondataRef : 'tabJsonData6',
            jsondataTargetName : 'targetNm',
            isScrollable : false
        });
    });  
</script>

    </div>
</div>