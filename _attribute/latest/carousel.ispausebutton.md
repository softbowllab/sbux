---
title:  is-pause-button
date:   2018-05-14
categories: ["latest","carousel"]
order: 8
---

is-pause-button
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
        <td colspan="3">일시정지를 컨트롤하는 button을 표시합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>circulation, auto-stream, pause="click"</td>
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
        <td>false</td>
        <td class="tdTitle">자료형</td>
        <td>boolean</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">true | false</td>
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
        <td class="tdCenter">image</td>
        <td class="tdCenter">tag</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<script>
    var carouselJsonData=[
        {imagesrc:'./../img/image1.jpg'},
        {imagesrc:'./../img/image2.jpg'},
        {imagesrc:'./../img/image3.jpg'}
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}^exTab1_3" title-text-array="image{고정형,변동형}^tag(고정형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-carousel id="sbIdx1_1" name="sbIdx1_1" uitype="image" circulation="true" auto-stream="stream" pause="click" is-pause-button="true">
    <content-item image-src="./../img/image1.jpg"></content-item>
    <content-item image-src="./../img/image2.jpg"></content-item>
    <content-item image-src="./../img/image3.jpg"></content-item>
</sbux-carousel>
{% endhighlight %}

<br>

▶ Preview 

<sbux-carousel id="sbIdx1_1" name="sbIdx1_1" uitype="image" circulation="true" auto-stream="stream" pause="click" is-pause-button="true">
    <content-item image-src="./../img/image1.jpg"></content-item>
    <content-item image-src="./../img/image2.jpg"></content-item>
    <content-item image-src="./../img/image3.jpg"></content-item>
</sbux-carousel>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var carouselJsonData=[
        {imagesrc:'./../img/image1.jpg'},
        {imagesrc:'./../img/image2.jpg'},
        {imagesrc:'./../img/image3.jpg'}
    ];
</script>
<sbux-carousel id="sbIdx1_2" name="sbTagNm1_2" uitype="image" jsondata-ref="carouselJsonData" circulation="true" auto-stream="stream" pause="click" is-pause-button="true"></sbux-carousel>
{% endhighlight %}


<br>

▶ Preview 

<sbux-carousel id="sbIdx1_2" name="sbTagNm1_2" uitype="image" jsondata-ref="carouselJsonData" circulation="true" auto-stream="stream" pause="click" is-pause-button="true"></sbux-carousel>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-carousel id="sbIdx1_3" name="sbTagNm1_3" uitype="tag" circulation="true" auto-stream="stream" pause="click" is-pause-button="true">
    <content-item><sbux-input id="couinput" name="couinput" uitype="text"></sbux-input></content-item>
    <content-item><sbux-datepicker id="coupicker" name="coupicker" uitype="inline"></sbux-datepicker></content-item>
    <content-item><sbux-button id="coubutton" name="coubutton" uitype="normal" text="버튼"></sbux-button></content-item>
</sbux-carousel>
{% endhighlight %}

<br>

▶ Preview 

<sbux-carousel id="sbIdx1_3" name="sbTagNm1_3" uitype="tag" circulation="true" auto-stream="stream" pause="click" is-pause-button="true">
    <content-item><sbux-input id="couinput" name="couinput" uitype="text"></sbux-input></content-item>
    <content-item><sbux-datepicker id="coupicker" name="coupicker" uitype="inline"></sbux-datepicker></content-item>
    <content-item><sbux-button id="coubutton" name="coubutton" uitype="normal" text="버튼"></sbux-button></content-item>
</sbux-carousel>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="image(변동형)" is-scrollable="false">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea2_1"></div>
<script>
    var carouselJsonData=[
        {imagesrc:'./../img/image1.jpg'},
        {imagesrc:'./../img/image2.jpg'},
        {imagesrc:'./../img/image3.jpg'}
    ];
    $(document).ready(function(){
        $('#sbArea2_1').sbCarousel({
            name : 'sbScriptNm2_1',
            uitype : 'image',
            jsondataRef : 'carouselJsonData',
            circulation : true,
            autoStream : 'stream',
            pause : 'click',
            isPauseButton : true
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2_1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2_1').sbCarousel({
            name : 'sbScriptNm2_1',
            uitype : 'image',
            jsondataRef : 'carouselJsonData',
            circulation : true,
            autoStream : 'stream',
            pause : 'click',
            isPauseButton : true
        });
    }); 
</script>

    </div>
</div>