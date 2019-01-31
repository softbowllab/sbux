---
title:  button-color
date:   2018-05-14
categories: ["latest","dropdown"]
order: 5
---

button-color
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
        <td colspan="3">button의 색상을 지정합니다.</td>
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
        <td>default(흰색)</td>
        <td class="tdTitle tdBg">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">값형태</td>
        <td colspan="3">default | blue | green | sky | orange | red</td>
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
        <td class="tdCenter">button</td>
        <td class="tdCenter">splitbutton</td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdCenter">X</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<script>
    var jsondata = [
        {id : '1', pid : '-1', text : 'input'},
        {id : '1_1', pid : '1', text : 'text'},
        {id : '1_2', pid : '1', text : 'password'},
        {id : '1_1_1', pid : '1_1', text : 'init'},
        {id : '2', pid : '-1', text : 'picker'},
        {id : '3', pid : '-1', text : 'radio'},
        {id : '4', pid : '-1', text : 'select'}
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}^{exTab1_3,exTab1_4}" title-text-array="button{고정형,변동형}^splitbutton{고정형,변동형}" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-dropdown id="sbIdx1_1" name="sbTagNm1_1" uitype="button" text="SBUx button dropdown" button-color="sky">
    <menu-item text="input">
        <menu-item text="text">
            <menu-item text="init"></menu-item>    
        </menu-item>
        <menu-item text="password"></menu-item>
    </menu-item>
    <menu-item text="picker"></menu-item>
    <menu-item text="radio"></menu-item>
    <menu-item text="select"></menu-item>
</sbux-dropdown>
{% endhighlight %}

<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_1" name="sbTagNm1_1" uitype="button" text="SBUx button dropdown" button-color="sky">
    <menu-item text="input">
        <menu-item text="text">
            <menu-item text="init"></menu-item>    
        </menu-item>
        <menu-item text="password"></menu-item>
    </menu-item>
    <menu-item text="picker"></menu-item>
    <menu-item text="radio"></menu-item>
    <menu-item text="select"></menu-item>
</sbux-dropdown>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var jsondata = [
        {id : '1', pid : '-1', text : 'input'},
        {id : '1_1', pid : '1', text : 'text'},
        {id : '1_2', pid : '1', text : 'password'},
        {id : '1_1_1', pid : '1_1', text : 'init'},
        {id : '2', pid : '-1', text : 'picker'},
        {id : '3', pid : '-1', text : 'radio'},
        {id : '4', pid : '-1', text : 'select'}
    ];
</script>
<sbux-dropdown id="sbIdx1_2" name="sbTagNm1_2" uitype="button" jsondata-ref="jsondata" text="SBUx button dropdown" button-color="sky"></sbux-dropdown>
{% endhighlight %}


<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_2" name="sbTagNm1_2" uitype="button" jsondata-ref="jsondata" text="SBUx button dropdown" button-color="sky"></sbux-dropdown>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-dropdown id="sbIdx1_3" name="sbTagNm1_3" uitype="splitbutton" text="SBUx splitbutton dropdown" button-color="sky">
    <menu-item text="input">
        <menu-item text="text">
            <menu-item text="init"></menu-item>    
        </menu-item>
        <menu-item text="password"></menu-item>
    </menu-item>
    <menu-item text="picker"></menu-item>
    <menu-item text="radio"></menu-item>
    <menu-item text="select"></menu-item>
</sbux-dropdown>
{% endhighlight %}

<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_3" name="sbTagNm1_3" uitype="splitbutton" text="SBUx splitbutton dropdown" button-color="sky">
    <menu-item text="input">
        <menu-item text="text">
            <menu-item text="init"></menu-item>    
        </menu-item>
        <menu-item text="password"></menu-item>
    </menu-item>
    <menu-item text="picker"></menu-item>
    <menu-item text="radio"></menu-item>
    <menu-item text="select"></menu-item>
</sbux-dropdown>

    </div>
    <div id="exTab1_4">

▶ Example

{% highlight html %}
<script>
    var jsondata = [
        {id : '1', pid : '-1', text : 'input'},
        {id : '1_1', pid : '1', text : 'text'},
        {id : '1_2', pid : '1', text : 'password'},
        {id : '1_1_1', pid : '1_1', text : 'init'},
        {id : '2', pid : '-1', text : 'picker'},
        {id : '3', pid : '-1', text : 'radio'},
        {id : '4', pid : '-1', text : 'select'}
    ];
</script>
<sbux-dropdown id="sbIdx1_4" name="sbTagNm1_4" uitype="splitbutton" jsondata-ref="jsondata" text="SBUx splitbutton dropdown" button-color="sky"></sbux-dropdown>
{% endhighlight %}


<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_4" name="sbTagNm1_4" uitype="splitbutton" jsondata-ref="jsondata" text="SBUx splitbutton dropdown" button-color="sky"></sbux-dropdown>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2" title-text-array="button(변동형)^splitbutton(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<script>
    var jsondata = [
        {id : '1', pid : '-1', text : 'input'},
        {id : '1_1', pid : '1', text : 'text'},
        {id : '1_2', pid : '1', text : 'password'},
        {id : '1_1_1', pid : '1_1', text : 'init'},
        {id : '2', pid : '-1', text : 'picker'},
        {id : '3', pid : '-1', text : 'radio'},
        {id : '4', pid : '-1', text : 'select'}
    ];
    $(document).ready(function(){
        $('#sbArea2_1').sbDropdown({
            name : 'sbScriptNm2_1',
            uitype : 'button',
            jsondataRef : 'jsondata',
            text : 'SBUx button dropdown',
            buttonColor : 'sky'
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
            uitype : 'button',
            jsondataRef : 'jsondata',
            text : 'SBUx button dropdown',
            buttonColor : 'sky'
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
        {id : '1', pid : '-1', text : 'input'},
        {id : '1_1', pid : '1', text : 'text'},
        {id : '1_2', pid : '1', text : 'password'},
        {id : '1_1_1', pid : '1_1', text : 'init'},
        {id : '2', pid : '-1', text : 'picker'},
        {id : '3', pid : '-1', text : 'radio'},
        {id : '4', pid : '-1', text : 'select'}
    ];
    $(document).ready(function(){
        $('#sbArea2_2').sbDropdown({
            name : 'sbScriptNm2_2',
            uitype : 'splitbutton',
            jsondataRef : 'jsondata',
            text : 'SBUx splitbutton dropdown',
            buttonColor : 'sky'
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
            uitype : 'splitbutton',
            jsondataRef : 'jsondata',
            text : 'SBUx splitbutton dropdown',
            buttonColor : 'sky'
        });
    }); 
</script>

    </div>
</div>