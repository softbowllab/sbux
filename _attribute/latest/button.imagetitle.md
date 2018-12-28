---
title:  image-title
date:   2018-05-14
categories: ["latest","button"]
order: 10
---

image-title
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
        <td colspan="3">Component에 표시되는 image에 title을 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>image-src</td>
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
        <td colspan="3">title로 지정할 구문</td>
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
<sbux-button id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" image-src="./../img/loading.gif" image-title="Image Title"></sbux-button>
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_1" name="sbTagNm1_1" uitype="normal" image-src="./../img/loading.gif" image-title="Image Title"></sbux-button>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<sbux-button id="sbIdx1_2" name="sbTagNm1_2" uitype="modal" image-src="./../img/loading.gif" image-title="Image Title"></sbux-button>
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_2" name="sbTagNm1_2" uitype="modal" image-src="./../img/loading.gif" image-title="Image Title"></sbux-button>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-button id="sbIdx1_3" name="sbTagNm1_3" uitype="submit" image-src="./../img/loading.gif" image-title="Image Title"></sbux-button>
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_3" name="sbTagNm1_3" uitype="submit" image-src="./../img/loading.gif" image-title="Image Title"></sbux-button>

    </div>
    <div id="exTab1_4">

▶ Example

{% highlight html %}
<sbux-button id="sbIdx1_4" name="sbTagNm1_4" uitype="send" image-src="./../img/loading.gif" image-title="Image Title"></sbux-button>
{% endhighlight %}

<br>

▶ Preview 

<sbux-button id="sbIdx1_4" name="sbTagNm1_4" uitype="send" image-src="./../img/loading.gif" image-title="Image Title"></sbux-button>

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
            imageSrc : './../img/loading.gif',
            imageTitle : 'Image Title'
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
            imageSrc : './../img/loading.gif',
            imageTitle : 'Image Title'
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
            imageSrc : './../img/loading.gif',
            imageTitle : 'Image Title'
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
            imageSrc : './../img/loading.gif',
            imageTitle : 'Image Title'
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
            imageSrc : './../img/loading.gif',
            imageTitle : 'Image Title'
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
            imageSrc : './../img/loading.gif',
            imageTitle : 'Image Title'
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
            imageSrc : './../img/loading.gif',
            imageTitle : 'Image Title'
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
            imageSrc : './../img/loading.gif',
            imageTitle : 'Image Title'
        });
    }); 
</script>

    </div>
</div>