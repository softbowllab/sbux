---
title:  readonly
date:   2018-12-04
categories: ["latest","input"]
order: 29
---

readonly
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
        <td colspan="3">Component에 읽기전용 속성을 지정합니다.</td>
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
        <td>해당없음</td>
        <td class="tdTitle tdBg">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">값형태</td>
        <td colspan="3">readonly</td>
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
        <td class="tdCenter">text</td>
        <td class="tdCenter">password</td>
        <td class="tdCenter">search</td>
        <td class="tdCenter">hidden</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdCenter">X</td>
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
<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text" readonly="readonly"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text" readonly="readonly"></sbux-input>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<sbux-input id="sbIdx2" name="sbTagNm2" uitype="password" readonly="readonly"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<sbux-input id="sbIdx2" name="sbTagNm2" uitype="password" readonly="readonly"></sbux-input>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-input id="sbIdx3" name="sbTagNm3" uitype="search" readonly="readonly"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<sbux-input id="sbIdx3" name="sbTagNm3" uitype="search" readonly="readonly"></sbux-input>

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
<div id="sbArea1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbInput({
            name : 'sbScriptNm1',
            uitype : 'text',
			readonly : 'readonly'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbInput({
            name : 'sbScriptNm1',
            uitype : 'text',
			readonly : 'readonly'
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2').sbInput({
            name : 'sbScriptNm2',
            uitype : 'password',
			readonly : 'readonly'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2').sbInput({
            name : 'sbScriptNm2',
            uitype : 'password',
			readonly : 'readonly'
        });
    }); 
</script>

    </div>
    <div id="exTab2_3">

▶ Example

{% highlight html %}
<div id="sbArea3"></div>
<script>
    $(document).ready(function(){
        $('#sbArea3').sbInput({
            name : 'sbScriptNm3',
            uitype : 'search',
			readonly : 'readonly'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea3"></div>
<script>
    $(document).ready(function(){
        $('#sbArea3').sbInput({
            name : 'sbScriptNm3',
            uitype : 'search',
			readonly : 'readonly'
        });
    }); 
</script>

    </div>
</div>