---
title:  popover-html
date:   2018-12-04
categories: ["latest","common"]
order: 17
---

popover-html
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
        <td colspan="3">Component에 표시될 popover의 내용에 HTML Tag 사용 여부를 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>popover</td>
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
        <td class="tdTitle">지원 컴포넌트</td>
        <td class="tdCenter" colspan="4">input, textarea, listbox, select, checkbox, radio, button</td>
    </tr>
</table>

---
### Example (Tag)

{% highlight html %}
<sbux-input id="sbIdx" name="sbTagNm" uitype="text" popover="SBUx <font color='red'>Tooltip</font>" popover-html="true"></sbux-input>
{% endhighlight %}

### Preview

<sbux-input id="sbIdx" name="sbTagNm" uitype="text" popover="SBUx <font color='red'>Tooltip" popover-html="true"></sbux-input>

---
### Example (Script)

{% highlight html %}
<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            popover : 'SBUx <font color="red">Tooltip</font>',
            popoverHtml : true
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            popover : 'SBUx <font color="red">Tooltip</font>',
            popoverHtml : true
        });
    }); 
</script>