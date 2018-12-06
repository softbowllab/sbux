---
title:  id
date:   2018-12-04
categories: ["latest","common"]
order: 1
---

id
===
---

### Description
<style>
    .tdTitle {font-weight:bold}
    .tdRed {color:red}
</style>
<table style="width:100%">
    <colgroup>
        <col width="15%"/>
        <col width="35%"/>
        <col width="15%"/>
        <col width="35%"/>
    </colgroup>
    <tr>
        <td class="tdTitle">설명</td>
        <td colspan="3">Component의 고유 ID를 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td class="tdRed">필수</td>
    </tr>
    <tr>
        <td class="tdTitle">기본값</td>
        <td>없음(미입력시)</td>
        <td class="tdTitle"></td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle">연관자료</td>
        <td colspan="3"></td>
    </tr>
</table>
---
### Example (Tag)

{% highlight html %}
<sbux-input id="sbIdx" name="sbTagNm" uitype="text"></sbux-input>
{% endhighlight %}

### Preview

<sbux-input id="sbIdx" name="sbTagNm" uitype="text"></sbux-input>
---
### Example (Script)

{% highlight html %}
<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text'
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
            uitype : 'text'
        });
    }); 
</script>


