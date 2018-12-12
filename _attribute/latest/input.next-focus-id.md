---
title:  next-focus-id
date:   2018-12-04
categories: ["latest","input"]
order: 8
---

next-focus-id
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
        <td colspan="3">Enter 키를 입력했을때 focus를 이동할 Component를 지정합니다.</td>
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
        <td colspan="3">focus를 이동시킬 Component의 ID</td>
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
        <td class="tdCenter">text</td>
        <td class="tdCenter">password</td>
        <td class="tdCenter">search</td>
        <td class="tdCenter">hidden</td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdCenter">X</td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3" title-text-array="text^password^search">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-input id="sbIdx1_1" name="sbTagNm1_1" uitype="text" next-focus-id="sbIdx1_2"></sbux-input>
<sbux-input id="sbIdx1_2" name="sbTagNm1_2" uitype="text" next-focus-id="sbIdx1_1"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<sbux-input id="sbIdx1_1" name="sbTagNm1_1" uitype="text" next-focus-id="sbIdx1_2"></sbux-input>
<sbux-input id="sbIdx1_2" name="sbTagNm1_2" uitype="text" next-focus-id="sbIdx1_1"></sbux-input>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<sbux-input id="sbIdx2_1" name="sbTagNm2_1" uitype="password" next-focus-id="sbIdx2_2"></sbux-input>
<sbux-input id="sbIdx2_2" name="sbTagNm2_2" uitype="password" next-focus-id="sbIdx2_1"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<sbux-input id="sbIdx2_1" name="sbTagNm2_1" uitype="password" next-focus-id="sbIdx2_2"></sbux-input>
<sbux-input id="sbIdx2_2" name="sbTagNm2_2" uitype="password" next-focus-id="sbIdx2_1"></sbux-input>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-input id="sbIdx3_1" name="sbTagNm3_1" uitype="search" next-focus-id="sbIdx3_2"></sbux-input>
<sbux-input id="sbIdx3_2" name="sbTagNm3_2" uitype="search" next-focus-id="sbIdx3_1"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<sbux-input id="sbIdx3_1" name="sbTagNm3_1" uitype="search" next-focus-id="sbIdx3_2"></sbux-input>
<sbux-input id="sbIdx3_2" name="sbTagNm3_2" uitype="search" next-focus-id="sbIdx3_1"></sbux-input>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2^exTab2_3" title-text-array="text^password^search">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea1_1"></div>
<div id="sbArea1_2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1_1').sbInput({
            name : 'sbScriptNm1_1',
            uitype : 'text',
			nextFocusId : 'sbArea1_2'
        });
        $('#sbArea1_2').sbInput({
            name : 'sbScriptNm1_2',
            uitype : 'text',
			nextFocusId : 'sbArea1_1'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea1_1"></div>
<div id="sbArea1_2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1_1').sbInput({
            name : 'sbScriptNm1_1',
            uitype : 'text',
			nextFocusId : 'sbArea1_2'
        });
        $('#sbArea1_2').sbInput({
            name : 'sbScriptNm1_2',
            uitype : 'text',
			nextFocusId : 'sbArea1_1'
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<div id="sbArea2_2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbInput({
            name : 'sbScriptNm2_1',
            uitype : 'text',
			nextFocusId : 'sbArea2_2'
        });
        $('#sbArea2_2').sbInput({
            name : 'sbScriptNm2_2',
            uitype : 'text',
			nextFocusId : 'sbArea2_1'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<div id="sbArea2_2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbInput({
            name : 'sbScriptNm2_1',
            uitype : 'text',
			nextFocusId : 'sbArea2_2'
        });
        $('#sbArea2_2').sbInput({
            name : 'sbScriptNm2_2',
            uitype : 'text',
			nextFocusId : 'sbArea2_1'
        });
    }); 
</script>

    </div>
    <div id="exTab2_3">

▶ Example

{% highlight html %}
<div id="sbArea3_1"></div>
<div id="sbArea3_2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea3_1').sbInput({
            name : 'sbScriptNm3_1',
            uitype : 'text',
			nextFocusId : 'sbArea3_2'
        });
        $('#sbArea3_2').sbInput({
            name : 'sbScriptNm3_2',
            uitype : 'text',
			nextFocusId : 'sbArea3_1'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea3_1"></div>
<div id="sbArea3_2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea3_1').sbInput({
            name : 'sbScriptNm3_1',
            uitype : 'text',
			nextFocusId : 'sbArea3_2'
        });
        $('#sbArea3_2').sbInput({
            name : 'sbScriptNm3_2',
            uitype : 'text',
			nextFocusId : 'sbArea3_1'
        });
    }); 
</script>

    </div>
</div>
