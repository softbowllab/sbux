---
title:  value
date:   2018-05-14
categories: ["latest","button"]
order: 2
---

value
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
        <td colspan="3">Component model에 저장되는 value를 지정합니다.</td>
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
        <td colspan="3">model에 저장될 값</td>
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
        <td class="tdCenter">modal</td>
        <td class="tdCenter">submit</td>
        <td class="tdCenter">send</td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3^exTab1_4" title-text-array="normal^modal^submit^send" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-button id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" text="SBUx normal button" value="SBUx button"></sbux-button>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm1_1'))">
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" text="SBUx normal button" value="SBUx button"></sbux-button>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm1_1'))">

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<sbux-button id="sbIdx1_2" name="sbTagNm1_2" uitype="modal" text="SBUx modal button" value="SBUx button"></sbux-button>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm1_2'))">
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_2" name="sbTagNm1_2" uitype="modal" text="SBUx modal button" value="SBUx button"></sbux-button>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm1_2'))">

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-button id="sbIdx1_3" name="sbTagNm1_3" uitype="submit" text="SBUx submit button" value="SBUx button"></sbux-button>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm1_3'))">
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_3" name="sbTagNm1_3" uitype="submit" text="SBUx submit button" value="SBUx button"></sbux-button>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm1_3'))">

    </div>
    <div id="exTab1_4">

▶ Example

{% highlight html %}
<sbux-button id="sbIdx1_4" name="sbTagNm1_4" uitype="send" text="SBUx send button" value="SBUx button"></sbux-button>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm1_4'))">
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_4" name="sbTagNm1_4" uitype="send" text="SBUx send button" value="SBUx button"></sbux-button>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbTagNm1_4'))">

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2^exTab2_3^exTab2_4" title-text-array="normal^modal^submit^send" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbScriptNm2_1'))">
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbButton({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            text : 'SBUx normal button',
            value : 'SBUx button'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbScriptNm2_1'))">
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbButton({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            text : 'SBUx normal button',
            value : 'SBUx button'
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2_2"></div>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbScriptNm2_2'))">
<script>
    $(document).ready(function(){
        $('#sbArea2_2').sbButton({
            name : 'sbScriptNm2_2',
            uitype : 'modal',
            text : 'SBUx modal button',
            value : 'SBUx button'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_2"></div>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbScriptNm2_2'))">
<script>
    $(document).ready(function(){
        $('#sbArea2_2').sbButton({
            name : 'sbScriptNm2_2',
            uitype : 'modal',
            text : 'SBUx modal button',
            value : 'SBUx button'
        });
    }); 
</script>

    </div>
    <div id="exTab2_3">

▶ Example

{% highlight html %}
<div id="sbArea2_3"></div>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbScriptNm2_3'))">
<script>
    $(document).ready(function(){
        $('#sbArea2_3').sbButton({
            name : 'sbScriptNm2_3',
            uitype : 'submit',
            text : 'SBUx submit button',
            value : 'SBUx button'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_3"></div>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbScriptNm2_3'))">
<script>
    $(document).ready(function(){
        $('#sbArea2_3').sbButton({
            name : 'sbScriptNm2_3',
            uitype : 'submit',
            text : 'SBUx submit button',
            value : 'SBUx button'
        });
    }); 
</script>

    </div>
    <div id="exTab2_4">

▶ Example

{% highlight html %}
<div id="sbArea2_4"></div>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbScriptNm2_4'))">
<script>
    $(document).ready(function(){
        $('#sbArea2_4').sbButton({
            name : 'sbScriptNm2_4',
            uitype : 'send',
            text : 'SBUx send button',
            value : 'SBUx button'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_4"></div>
<input type="button" value="get()" onclick="alert(SBUxMethod.get('sbScriptNm2_4'))">
<script>
    $(document).ready(function(){
        $('#sbArea2_4').sbButton({
            name : 'sbScriptNm2_4',
            uitype : 'send',
            text : 'SBUx send button',
            value : 'SBUx button'
        });
    }); 
</script>

    </div>
</div>