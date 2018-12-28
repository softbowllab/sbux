---
title:  jsondata-order
date:   2018-05-14
categories: ["latest","dropdown"]
order: 11
---

jsondata-order
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
        <td colspan="3">호출한 json data에서 order에 해당하는 key값</td>
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
        <td>order</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">호출한 json data에서 order에 해당하는 key값</td>
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
        {id : '1', pid : '-1', text : 'input', orderKey : '2'},
        {id : '1_1', pid : '1', text : 'text', orderKey : '2'},
        {id : '1_2', pid : '1', text : 'password', orderKey : '1'},
        {id : '1_1_1', pid : '1_1', text : 'init', orderKey : '1'},
        {id : '2', pid : '-1', text : 'picker', orderKey : '3'},
        {id : '3', pid : '-1', text : 'radio', orderKey : '1'},
        {id : '4', pid : '-1', text : 'select', orderKey : '4'}
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3" title-text-array="normal(변동형)^button(변동형)^splitbutton(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var jsondata = [
        {id : '1', pid : '-1', text : 'input', orderKey : '2'},
        {id : '1_1', pid : '1', text : 'text', orderKey : '2'},
        {id : '1_2', pid : '1', text : 'password', orderKey : '1'},
        {id : '1_1_1', pid : '1_1', text : 'init', orderKey : '1'},
        {id : '2', pid : '-1', text : 'picker', orderKey : '3'},
        {id : '3', pid : '-1', text : 'radio', orderKey : '1'},
        {id : '4', pid : '-1', text : 'select', orderKey : '4'}
    ];
</script>
<sbux-dropdown id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="jsondata" text="SBUx normal dropdown" jsondata-order="orderKey"></sbux-dropdown>
{% endhighlight %}


<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" jsondata-ref="jsondata" text="SBUx normal dropdown" jsondata-order="orderKey"></sbux-dropdown>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var jsondata = [
        {id : '1', pid : '-1', text : 'input', orderKey : '2'},
        {id : '1_1', pid : '1', text : 'text', orderKey : '2'},
        {id : '1_2', pid : '1', text : 'password', orderKey : '1'},
        {id : '1_1_1', pid : '1_1', text : 'init', orderKey : '1'},
        {id : '2', pid : '-1', text : 'picker', orderKey : '3'},
        {id : '3', pid : '-1', text : 'radio', orderKey : '1'},
        {id : '4', pid : '-1', text : 'select', orderKey : '4'}
    ];
</script>
<sbux-dropdown id="sbIdx1_2" name="sbTagNm1_2" uitype="button" jsondata-ref="jsondata" text="SBUx button dropdown" jsondata-order="orderKey"></sbux-dropdown>
{% endhighlight %}


<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_2" name="sbTagNm1_2" uitype="button" jsondata-ref="jsondata" text="SBUx button dropdown" jsondata-order="orderKey"></sbux-dropdown>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<script>
    var jsondata = [
        {id : '1', pid : '-1', text : 'input', orderKey : '2'},
        {id : '1_1', pid : '1', text : 'text', orderKey : '2'},
        {id : '1_2', pid : '1', text : 'password', orderKey : '1'},
        {id : '1_1_1', pid : '1_1', text : 'init', orderKey : '1'},
        {id : '2', pid : '-1', text : 'picker', orderKey : '3'},
        {id : '3', pid : '-1', text : 'radio', orderKey : '1'},
        {id : '4', pid : '-1', text : 'select', orderKey : '4'}
    ];
</script>
<sbux-dropdown id="sbIdx1_3" name="sbTagNm1_3" uitype="splitbutton" jsondata-ref="jsondata" text="SBUx splitbutton dropdown" jsondata-order="orderKey"></sbux-dropdown>
{% endhighlight %}


<br>

▶ Preview 

<sbux-dropdown id="sbIdx1_3" name="sbTagNm1_3" uitype="splitbutton" jsondata-ref="jsondata" text="SBUx splitbutton dropdown" jsondata-order="orderKey"></sbux-dropdown>

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
        {id : '1', pid : '-1', text : 'input', orderKey : '2'},
        {id : '1_1', pid : '1', text : 'text', orderKey : '2'},
        {id : '1_2', pid : '1', text : 'password', orderKey : '1'},
        {id : '1_1_1', pid : '1_1', text : 'init', orderKey : '1'},
        {id : '2', pid : '-1', text : 'picker', orderKey : '3'},
        {id : '3', pid : '-1', text : 'radio', orderKey : '1'},
        {id : '4', pid : '-1', text : 'select', orderKey : '4'}
    ];
    $(document).ready(function(){
        $('#sbArea2_1').sbDropdown({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            jsondataRef : 'jsondata',
            text : 'SBUx normal dropdown',
            jsondataOrder : 'orderKey'
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
            text : 'SBUx normal dropdown',
            jsondataOrder : 'orderKey'
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
        {id : '1', pid : '-1', text : 'input', orderKey : '2'},
        {id : '1_1', pid : '1', text : 'text', orderKey : '2'},
        {id : '1_2', pid : '1', text : 'password', orderKey : '1'},
        {id : '1_1_1', pid : '1_1', text : 'init', orderKey : '1'},
        {id : '2', pid : '-1', text : 'picker', orderKey : '3'},
        {id : '3', pid : '-1', text : 'radio', orderKey : '1'},
        {id : '4', pid : '-1', text : 'select', orderKey : '4'}
    ];
    $(document).ready(function(){
        $('#sbArea2_2').sbDropdown({
            name : 'sbScriptNm2_2',
            uitype : 'button',
            jsondataRef : 'jsondata',
            text : 'SBUx button dropdown',
            jsondataOrder : 'orderKey'
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
            text : 'SBUx button dropdown',
            jsondataOrder : 'orderKey'
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
        {id : '1', pid : '-1', text : 'input', orderKey : '2'},
        {id : '1_1', pid : '1', text : 'text', orderKey : '2'},
        {id : '1_2', pid : '1', text : 'password', orderKey : '1'},
        {id : '1_1_1', pid : '1_1', text : 'init', orderKey : '1'},
        {id : '2', pid : '-1', text : 'picker', orderKey : '3'},
        {id : '3', pid : '-1', text : 'radio', orderKey : '1'},
        {id : '4', pid : '-1', text : 'select', orderKey : '4'}
    ];
    $(document).ready(function(){
        $('#sbArea2_3').sbDropdown({
            name : 'sbScriptNm2_3',
            uitype : 'splitbutton',
            jsondataRef : 'jsondata',
            text : 'SBUx splitbutton dropdown',
            jsondataOrder : 'orderKey'
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
            text : 'SBUx splitbutton dropdown',
            jsondataOrder : 'orderKey'
        });
    }); 
</script>

    </div>
</div>