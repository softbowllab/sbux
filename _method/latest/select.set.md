---
title:  set
date:   2018-12-04
categories: ["latest","select"]
order: 0
---

set
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
        <td colspan="3">Component에 값을 설정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.set('CompName', 'value', {isTrigger:false});</td>
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
        <td>method를 실행할 Component name</td>
        <td></td>
    </tr>
    <tr>
        <td class="tdCenter">2</td>
        <td class="tdCenter">string | array | number</td>
        <td>Component에 설정할 값</td>
        <td>
            - checkbox type의 경우 배열형태로 한번에 값 설정 가능<br>
            - index를 통해 값을 set 할경우 index를 입력해 값 설정 가능
        </td>
    </tr>
    <tr>
        <td class="tdCenter">3</td>
        <td class="tdCenter">object</td>
        <td>setMethod 동작시 onchange 이벤트 발생 여부</td>
        <td>
            - 생략 가능<br>
            - default : true
        </td>
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
        <td class="tdCenter">single</td>
        <td class="tdCenter">checkbox</td>
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
### Example & Preview

<script>
    var SelectJsonData = [
        {'text' : 'red', 'value' : 'red'},
        {'text' : 'blue', 'value' : 'blue'},
        {'text' : 'green', 'value' : 'green'}
    ];
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2" title-text-array="single^checkbox">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var SelectJsonData = [
        {'text' : 'red', 'value' : 'red'},
        {'text' : 'blue', 'value' : 'blue'},
        {'text' : 'green', 'value' : 'green'}
    ];
</script>
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1', 'blue');">
<sbux-select id="sbIdx1" name="sbTagNm1" uitype="single" jsondata-ref="SelectJsonData"></sbux-select>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1', 'blue');">
<sbux-select id="sbIdx1" name="sbTagNm1" uitype="single" jsondata-ref="SelectJsonData"></sbux-select>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<script>
    var SelectJsonData = [
        {'text' : 'red', 'value' : 'red'},
        {'text' : 'blue', 'value' : 'blue'},
        {'text' : 'green', 'value' : 'green'}
    ];
</script>
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm2', ['blue','green']);">
<sbux-select id="sbIdx2" name="sbTagNm2" uitype="checkbox" jsondata-ref="SelectJsonData"></sbux-select>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm2', ['blue','green']);">
<sbux-select id="sbIdx2" name="sbTagNm2" uitype="checkbox" jsondata-ref="SelectJsonData"></sbux-select>

    </div>
</div>