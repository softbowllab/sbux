---
title:  render
date:   2018-12-04
categories: ["latest","common"]
order: 8
---

render
===

---

## Description

<table style="width:100%">
    <colgroup>
        <col width="10%"/>
        <col width="15%"/>
        <col width="55%"/>
        <col width="20%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg">설명</td>
        <td colspan="3">화면이 로딩된 이후 추가된 Component를 render합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.render('selector');</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">순서</td>
        <td class="tdTitle tdCenter tdBg">타입</td>
        <td class="tdTitle tdCenter tdBg">설명</td>
        <td class="tdTitle tdCenter tdBg">비고</td>
    </tr>
    <tr>
        <td class="tdCenter">1</td>
        <td class="tdCenter">string</td>
        <td>render할 tag명 혹은 render할 tag가 포함된 tag의 selector</td>
        <td>- 생략 가능 (생략시 모든 component)</td>
    </tr>
</table>

---
### Example & Preview

<script>
    $(document).ready(function(){
        setTimeout(function(){
            $('#renderTest').append('<sbux-input id="renderInput" name="renderInput" uitype="text"></sbux-input>');
        },0);
    });
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="-">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="render" onclick="SBUxMethod.render();">
<div id="renderTest"></div>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="render" onclick="SBUxMethod.render();">
<div id="renderTest"></div>

    </div>
</div>