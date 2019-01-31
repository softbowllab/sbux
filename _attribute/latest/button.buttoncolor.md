---
title:  button-color
date:   2018-05-14
categories: ["latest","button"]
order: 4
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
        <td colspan="3">Component의 색상을 지정합니다.</td>
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
        <td class="tdCenter">modal</td>
        <td class="tdCenter">submit</td>
        <td class="tdCenter">send</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
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
<sbux-button id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" text="SBUx normal button" button-color="sky"></sbux-button>
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" text="SBUx normal button" button-color="sky"></sbux-button>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<sbux-button id="sbIdx1_2" name="sbTagNm1_2" uitype="modal" text="SBUx modal button" button-color="sky"></sbux-button>
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_2" name="sbTagNm1_2" uitype="modal" text="SBUx modal button" button-color="sky"></sbux-button>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-button id="sbIdx1_3" name="sbTagNm1_3" uitype="submit" text="SBUx submit button" button-color="sky"></sbux-button>
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_3" name="sbTagNm1_3" uitype="submit" text="SBUx submit button" button-color="sky"></sbux-button>

    </div>
    <div id="exTab1_4">

▶ Example

{% highlight html %}
<sbux-button id="sbIdx1_4" name="sbTagNm1_4" uitype="send" text="SBUx send button" button-color="sky"></sbux-button>
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_4" name="sbTagNm1_4" uitype="send" text="SBUx send button" button-color="sky"></sbux-button>

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
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbButton({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            text : 'SBUx normal button',
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
        $('#sbArea2_1').sbButton({
            name : 'sbScriptNm2_1',
            uitype : 'normal',
            text : 'SBUx normal button',
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
    $(document).ready(function(){
        $('#sbArea2_2').sbButton({
            name : 'sbScriptNm2_2',
            uitype : 'modal',
            text : 'SBUx modal button',
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
        $('#sbArea2_2').sbButton({
            name : 'sbScriptNm2_2',
            uitype : 'modal',
            text : 'SBUx modal button',
            buttonColor : 'sky'
        });
    }); 
</script>

    </div>
    <div id="exTab2_3">

▶ Example

{% highlight html %}
<div id="sbArea2_3"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_3').sbButton({
            name : 'sbScriptNm2_3',
            uitype : 'submit',
            text : 'SBUx submit button',
            buttonColor : 'sky'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_3"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_3').sbButton({
            name : 'sbScriptNm2_3',
            uitype : 'submit',
            text : 'SBUx submit button',
            buttonColor : 'sky'
        });
    }); 
</script>

    </div>
    <div id="exTab2_4">

▶ Example

{% highlight html %}
<div id="sbArea2_4"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_4').sbButton({
            name : 'sbScriptNm2_4',
            uitype : 'send',
            text : 'SBUx send button',
            buttonColor : 'sky'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_4"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_4').sbButton({
            name : 'sbScriptNm2_4',
            uitype : 'send',
            text : 'SBUx send button',
            buttonColor : 'sky'
        });
    }); 
</script>

    </div>
</div>