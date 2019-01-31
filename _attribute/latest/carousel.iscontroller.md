---
title:  is-controller
date:   2018-05-14
categories: ["latest","carousel"]
order: 2
---

is-controller
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
        <td colspan="3">슬라이드를 변경하는 controller 표시 여부를 설정합니다.</td>
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
        <td>true</td>
        <td class="tdTitle tdBg">자료형</td>
        <td>boolean</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">값형태</td>
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
        <td class="tdTitle tdBg tdCenter" colspan="5">사용제한</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype</td>
        <td class="tdCenter">image</td>
        <td class="tdCenter">tag</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
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
<sbux-carousel id="sbIdx1_1" name="sbIdx1_1" uitype="image" is-controller="false">
    <content-item image-src="./../img/image1.jpg"></content-item>
    <content-item image-src="./../img/image2.jpg"></content-item>
    <content-item image-src="./../img/image3.jpg"></content-item>
</sbux-carousel>
{% endhighlight %}

<br>

▶ Preview 

<sbux-carousel id="sbIdx1_1" name="sbIdx1_1" uitype="image" is-controller="false">
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
<sbux-carousel id="sbIdx1_2" name="sbTagNm1_2" uitype="image" jsondata-ref="carouselJsonData" is-controller="false"></sbux-carousel>
{% endhighlight %}


<br>

▶ Preview 

<sbux-carousel id="sbIdx1_2" name="sbTagNm1_2" uitype="image" jsondata-ref="carouselJsonData" is-controller="false"></sbux-carousel>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-carousel id="sbIdx1_3" name="sbTagNm1_3" uitype="tag" is-controller="false">
    <content-item><sbux-input id="couinput" name="couinput" uitype="text"></sbux-input></content-item>
    <content-item><sbux-datepicker id="coupicker" name="coupicker" uitype="inline"></sbux-datepicker></content-item>
    <content-item><sbux-button id="coubutton" name="coubutton" uitype="normal" text="버튼"></sbux-button></content-item>
</sbux-carousel>
{% endhighlight %}

<br>

▶ Preview 

<sbux-carousel id="sbIdx1_3" name="sbTagNm1_3" uitype="tag" is-controller="false">
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
            isController : false
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
            isController : false
        });
    }); 
</script>

    </div>
</div>