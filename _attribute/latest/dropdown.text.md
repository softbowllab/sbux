---
title:  text
date:   2018-05-14
categories: ["latest","dropdown"]
order: 1
---

text
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
        <td colspan="3">Component에 나타나는 text를 지정합니다.</td>
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
        <td colspan="3">text로 지정할 문구</td>
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
        <td class="tdCenter">button</td>
        <td class="tdCenter">splitbutton</td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<script>
    var jsondata = [
        {id : '1', text : 'input'},
        {id : '2', text : 'picker'},
        {id : '3', text : 'radio'},
        {id : '4', text : 'select'}
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}^{exTab1_3,exTab1_4}^{exTab1_5,exTab1_6}" title-text-array="normal{고정형,변동형}^button{고정형,변동형}^splitbutton{고정형,변동형}" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-dropdown id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" text="SBUx normal dropdown">
    <menu-item>input</menu-item>
    <menu-item>picker</menu-item>
    <menu-item>radio</menu-item>
    <menu-item>select</menu-item>
</sbux-dropdown>
{% endhighlight %}

<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" text="SBUx normal dropdown">
    <menu-item>input</menu-item>
    <menu-item>picker</menu-item>
    <menu-item>radio</menu-item>
    <menu-item>select</menu-item>
</sbux-dropdown>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var jsondata = [
        {id : '1', text : 'input'},
        {id : '2', text : 'picker'},
        {id : '3', text : 'radio'},
        {id : '4', text : 'select'}
    ];
</script>
<sbux-dropdown id="sbIdx1_2" name="sbTagNm1_2" uitype="normal" jsondata-ref="jsondata" text="SBUx normal dropdown"></sbux-dropdown>
{% endhighlight %}


<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_2" name="sbTagNm1_2" uitype="normal" jsondata-ref="jsondata" text="SBUx normal dropdown"></sbux-dropdown>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-dropdown id="sbIdx1_3" name="sbTagNm1_3" uitype="button" text="SBUx button dropdown">
    <menu-item>input</menu-item>
    <menu-item>picker</menu-item>
    <menu-item>radio</menu-item>
    <menu-item>select</menu-item>
</sbux-dropdown>
{% endhighlight %}

<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_3" name="sbTagNm1_3" uitype="button" text="SBUx button dropdown">
    <menu-item>input</menu-item>
    <menu-item>picker</menu-item>
    <menu-item>radio</menu-item>
    <menu-item>select</menu-item>
</sbux-dropdown>

    </div>
    <div id="exTab1_4">

▶ Example

{% highlight html %}
<script>
    var jsondata = [
        {id : '1', text : 'input'},
        {id : '2', text : 'picker'},
        {id : '3', text : 'radio'},
        {id : '4', text : 'select'}
    ];
</script>
<sbux-dropdown id="sbIdx1_4" name="sbTagNm1_4" uitype="button" jsondata-ref="jsondata" text="SBUx button dropdown"></sbux-dropdown>
{% endhighlight %}


<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_4" name="sbTagNm1_4" uitype="button" jsondata-ref="jsondata" text="SBUx button dropdown"></sbux-dropdown>

    </div>
    <div id="exTab1_5">

▶ Example

{% highlight html %}
<sbux-dropdown id="sbIdx1_5" name="sbTagNm1_5" uitype="splitbutton" text="SBUx splitbutton dropdown">
    <menu-item>input</menu-item>
    <menu-item>picker</menu-item>
    <menu-item>radio</menu-item>
    <menu-item>select</menu-item>
</sbux-dropdown>
{% endhighlight %}

<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_5" name="sbTagNm1_5" uitype="splitbutton" text="SBUx splitbutton dropdown">
    <menu-item>input</menu-item>
    <menu-item>picker</menu-item>
    <menu-item>radio</menu-item>
    <menu-item>select</menu-item>
</sbux-dropdown>

    </div>
    <div id="exTab1_6">

▶ Example

{% highlight html %}
<script>
    var jsondata = [
        {id : '1', text : 'input'},
        {id : '2', text : 'picker'},
        {id : '3', text : 'radio'},
        {id : '4', text : 'select'}
    ];
</script>
<sbux-dropdown id="sbIdx1_6" name="sbTagNm1_6" uitype="splitbutton" jsondata-ref="jsondata" text="SBUx splitbutton dropdown"></sbux-dropdown>
{% endhighlight %}


<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_6" name="sbTagNm1_6" uitype="splitbutton" jsondata-ref="jsondata" text="SBUx splitbutton dropdown"></sbux-dropdown>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2^exTab2_3" title-text-array="normal(변동형)^button(변동형)^splitbutton(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<script>
    var jsondata = [
        {id : '1', text : 'input'},
        {id : '2', text : 'picker'},
        {id : '3', text : 'radio'},
        {id : '4', text : 'select'}
    ];
    $(document).ready(function(){
        $('#sbArea2_1').sbDropdown({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'jsondata',
            text : 'SBUx normal dropdown'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbDropdown({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'jsondata',
            text : 'SBUx normal dropdown'
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2_2"></div>
<script>
    var jsondata = [
        {id : '1', text : 'input'},
        {id : '2', text : 'picker'},
        {id : '3', text : 'radio'},
        {id : '4', text : 'select'}
    ];
    $(document).ready(function(){
        $('#sbArea2_2').sbDropdown({
            name : 'sbScriptNm2_2',
            uitype : 'button',
            jsondataRef : 'jsondata',
            text : 'SBUx button dropdown'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_2').sbDropdown({
            name : 'sbScriptNm2_2',
            uitype : 'button',
            jsondataRef : 'jsondata',
            text : 'SBUx button dropdown'
        });
    }); 
</script>

    </div>
    <div id="exTab2_3">

▶ Example

{% highlight html %}
<div id="sbArea2_3"></div>
<script>
    var jsondata = [
        {id : '1', text : 'input'},
        {id : '2', text : 'picker'},
        {id : '3', text : 'radio'},
        {id : '4', text : 'select'}
    ];
    $(document).ready(function(){
        $('#sbArea2_3').sbDropdown({
            name : 'sbScriptNm2_3',
            uitype : 'splitbutton',
            jsondataRef : 'jsondata',
            text : 'SBUx splitbutton dropdown'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_3"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_3').sbDropdown({
            name : 'sbScriptNm2_3',
            uitype : 'splitbutton',
            jsondataRef : 'jsondata',
            text : 'SBUx splitbutton dropdown'
        });
    }); 
</script>

    </div>
</div>