---
title:  promiseProgress
date:   2018-12-04
categories: ["latest","progress"]
order: 4
---

promiseProgress
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
        <td colspan="3">처리가 많은 프로세스를 실행할때 progress bar에 대한 동기화를 합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.closeProgress('CompName', function, time);</td>
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
        <td class="tdCenter">function</td>
        <td>progress bar와 동기화할 function</td>
        <td></td>
    </tr>
    <tr>
        <td class="tdCenter">3</td>
        <td class="tdCenter">number</td>
        <td>지연시간</td>
        <td>- 생략 가능</td>
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
        <td class="tdCenter">bar</td>
        <td class="tdCenter">loading</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdCenter">X</td>
        <td></td>
        <td></td>
    </tr>
</table>

---
### Example & Preview

<script>
    function progressFunc(){
        alert('ddd');
    }
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="bar">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-progress id="sbIdx1" name="sbTagNm1" uitype="bar" show-openlayer="true" is-modal="false">
    <progress-bar>
        <bar valuenow="20"></bar>
    </progress-bar>
</sbux-progress>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="openProgress" onclick="SBUxMethod.openProgress('sbTagNm1', progressFunc, 500);">
<sbux-progress id="sbIdx1" name="sbTagNm1" uitype="bar" is-modal="false" indicator-type="stacked">
    <progress-bar>
        <bar valuenow="0"></bar>
    </progress-bar>
</sbux-progress>

    </div>
</div>