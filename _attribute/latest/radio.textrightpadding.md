---
title:  text-right-padding
date:   2018-05-14
categories: ["latest","radio"]
order: 4
---

text-right-padding
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
        <td colspan="3">Component에 지정한 text 오른쪽 간격을 설정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle tdBg">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">선결조건</td>
        <td>text</td>
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
        <td>0px</td>
        <td class="tdTitle tdBg">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">값형태</td>
        <td colspan="3">text의 오른쪽 간격 (단위 : px)</td>
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
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview (Tag)

<script>
    var SBUxData = [
        { text : "SBUx Radio1" },
        { text : "SBUx Radio2" },
        { text : "SBUx Radio3" }
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="{exTab1_1,exTab1_2}" title-text-array="normal{고정형,변동형}">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-radio id="sbIdx1" name="sbTagNm" uitype="normal" text="SBUx Radio1" text-right-padding="30px"></sbux-radio>
<sbux-radio id="sbIdx2" name="sbTagNm" uitype="normal" text="SBUx Radio2" text-right-padding="30px"></sbux-radio>
<sbux-radio id="sbIdx3" name="sbTagNm" uitype="normal" text="SBUx Radio3" text-right-padding="30px"></sbux-radio>
{% endhighlight %}

<br>

▶ Preview

<sbux-radio id="sbIdx1" name="sbTagNm" uitype="normal" text="SBUx Radio1" text-right-padding="30px"></sbux-radio>
<sbux-radio id="sbIdx2" name="sbTagNm" uitype="normal" text="SBUx Radio2" text-right-padding="30px"></sbux-radio>
<sbux-radio id="sbIdx3" name="sbTagNm" uitype="normal" text="SBUx Radio3" text-right-padding="30px"></sbux-radio>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var SBUxData = [
        { text : "SBUx Radio1" },
        { text : "SBUx Radio2" },
        { text : "SBUx Radio3" }
    ];
</script>
<sbux-radio id="sbIdx4" name="sbTagNm4" uitype="normal" jsondata-ref="SBUxData" text-right-padding="30px"></sbux-radio>
{% endhighlight %}

<br>

▶ Preview

<sbux-radio id="sbIdx4" name="sbTagNm4" uitype="normal" jsondata-ref="SBUxData" text-right-padding="30px"></sbux-radio>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="normal(변동형)">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea1"></div>
<script>
    var SBUxData = [
        { text : "SBUx Radio1" },
        { text : "SBUx Radio2" },
        { text : "SBUx Radio3" }
    ];
    $(document).ready(function(){
        $('#sbArea1').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            textRightPadding : '30px'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            textRightPadding : '30px'
        });
    });  
</script>

    </div>
</div>