---
title:  input-mask
date:   2018-12-04
categories: ["latest","picker"]
order: 19
---

input-mask
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
        <td colspan="3">Component의 특수한 상황에서 설정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle">선결조건</td>
        <td>해당없음</td>
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
        <td>string, JSON Object</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">아래 표 참고</td>
    </tr>
</table>
<table style="width:100%">
    <colgroup>
        <col width="25%"/>
        <col width="75%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg" >사용</td>
        <td class="tdTitle tdBg" >구문</td>
    </tr>
    <tr>
        <td>미지원 format</td>
        <td>
            input-mask='undefined'<br>
            * mask에서 지원하지 않는 date-format 사용시 undefined로 설정합니다.
        </td>
    </tr>
    <tr>
        <td>년월일 시분 표시</td>
        <td>
            input-mask='{"alias":"datetime"}'<br>
            * 제품에서 시분을 별도로 제공하지 않습니다.
        </td>
    </tr>
    <tr>
        <td>모두 입력하지 않으면 자동 clear</td>
        <td>input-mask='{"alias":"yyyy/mm/dd" "clearIncomplete":true}'</td>
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
        <td>mode</td>
        <td class="tdCenter">inline</td>
        <td class="tdCenter">popup</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdCenter">X</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example (Tag)

{% highlight html %}
<sbux-picker id="sbIdx" name="sbTagNm" uitype="date" mode="popup" input-mask='{"alias":"yyyy.mm.dd"}'></sbux-picker>
{% endhighlight %}

### Preview

<sbux-picker id="sbIdx" name="sbTagNm" uitype="date" mode="popup" input-mask='{"alias":"yyyy.mm.dd"}'></sbux-picker>

---
### Example (Script)

{% highlight html %}
<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbPicker({
            name : 'sbScriptNm',
            uitype : 'date',
			mode : 'popup',
            inputMask : '{"alias":"yyyy.mm.dd"}'
        });
    }); 
</script>
{% endhighlight %}

### Preview 

<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbPicker({
            name : 'sbScriptNm',
            uitype : 'date',
			mode : 'popup',
            inputMask : '{"alias":"yyyy.mm.dd"}'
        });
    });  
</script>