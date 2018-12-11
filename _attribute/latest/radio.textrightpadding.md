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
        <td class="tdTitle">설명</td>
        <td colspan="3">Component에 지정한 text 오른쪽 간격을 설정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>text</td>
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
        <td>0px</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
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
        <td class="tdTitle tdBg" colspan="5">사용제한</td>
    </tr>
    <tr>
        <td>uitype</td>
        <td class="tdCenter">normal</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example (Tag)

{% highlight html %}
<sbux-radio id="sbIdx1" name="sbTagNm" uitype="normal" text="SBUx Radio1" text-right-padding="30px"></sbux-radio>
<sbux-radio id="sbIdx2" name="sbTagNm" uitype="normal" text="SBUx Radio2" text-right-padding="30px"></sbux-radio>
<sbux-radio id="sbIdx3" name="sbTagNm" uitype="normal" text="SBUx Radio3" text-right-padding="30px"></sbux-radio>
{% endhighlight %}

### Preview

<sbux-radio id="sbIdx1" name="sbTagNm" uitype="normal" text="SBUx Radio1" text-right-padding="30px"></sbux-radio>
<sbux-radio id="sbIdx2" name="sbTagNm" uitype="normal" text="SBUx Radio2" text-right-padding="30px"></sbux-radio>
<sbux-radio id="sbIdx3" name="sbTagNm" uitype="normal" text="SBUx Radio3" text-right-padding="30px"></sbux-radio>

---
### Example (Script)

{% highlight html %}
<div id="sbArea1"></div>
<div id="sbArea2"></div>
<div id="sbArea3"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio1',
            textRightPadding : '30px'
        });
        $('#sbArea2').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio2',
            textRightPadding : '30px'
        });
        $('#sbArea3').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio3',
            textRightPadding : '30px'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea1"></div>
<div id="sbArea2"></div>
<div id="sbArea3"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio1',
            textRightPadding : '30px'
        });
        $('#sbArea2').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio2',
            textRightPadding : '30px'
        });
        $('#sbArea3').sbRadio({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : 'SBUx Radio3',
            textRightPadding : '30px'
        });
    });  
</script>