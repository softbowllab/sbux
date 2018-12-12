---
title:  direction
date:   2018-05-14
categories: ["latest","checkbox"]
order: 12
---

direction
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
        <td colspan="3">
            Component가 나열되는 방향을 지정합니다.<br>
            * 변동형으로 컴포넌트를 구성할때 사용합니다.
        </td>
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
        <td>horizontal</td>
        <td class="tdTitle">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">horizontal | vertical</td>
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
<script>
    var SBUxData = [
        { text : "빨강" },
        { text : "초록" },
        { text : "파랑" }
    ];
</script>
<sbux-checkbox id="sbIdx" name="sbTagNm" uitype="normal" jsondata-ref="SBUxData" direction="vertical"></sbux-checkbox>
{% endhighlight %}

### Preview

<script>
    var SBUxData = [
        { text : "빨강" },
        { text : "초록" },
        { text : "파랑" }
    ];
</script>
<sbux-checkbox id="sbIdx" name="sbTagNm" uitype="normal" jsondata-ref="SBUxData" direction="vertical"></sbux-checkbox>

---
### Example (Script)

{% highlight html %}
<div id="sbArea"></div>
<script>
    var SBUxData = [
        { text : "빨강" },
        { text : "초록" },
        { text : "파랑" }
    ];
    $(document).ready(function(){
        $('#sbArea').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            direction : 'vertical'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea"></div>
<script>
    var SBUxData = [
        { text : "빨강" },
        { text : "초록" },
        { text : "파랑" }
    ];
    $(document).ready(function(){
        $('#sbArea').sbCheckbox({
            name : 'sbScriptNm',
            uitype : 'normal',
            jsondataRef : 'SBUxData',
            direction : 'vertical'
        });
    }); 
</script>