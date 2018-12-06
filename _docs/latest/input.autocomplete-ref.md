---
title:  autocomplete-ref
date:   2018-12-04
categories: ["latest","input"]
order: 2
---


autocomplete-ref
===
---

### Description
<style>
    .tdTitle {font-weight:bold}
    .tdCenter {text-align: center;}
    .tdBg {background-color:#efefef}
    .tdRed {color:#dd2200}
    .tdBlue {color:#3366b2}
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
        <td colspan="3">Component 입력에 대한 자동 완성 기능의 Data를 Mapping 합니다.</td>
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
        <td class="tdTitle">데이터 유형</td>
        <td>JSON Object 변수</td>
    </tr>
    <tr>
        <td class="tdTitle">속성유형</td>
        <td colspan="3"> v 선택형 | 자유형</td>
    </tr>
    <tr>
        <td class="tdTitle">선택형</td>
        <td> A | B | C | D 중 택 1</td>
        <td class="tdTitle">자유형</td>
        <td>해당없음</td>
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
        <td class="tdCenter">text</td>
        <td class="tdCenter">password</td>
        <td class="tdCenter">search</td>
        <td class="tdCenter">hidden</td>
    </tr>
    <tr>
        <td>가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdCenter">X</td>
        <td class="tdCenter">X</td>
        <td class="tdCenter">X</td>
    </tr>
</table>
---

### Example
{% highlight html %}
<sbux-input id="inputIdx" name="inputIdx" uitype="text" autocomplete-ref="autocomplete_data"></sbux-input>
{% endhighlight %}

---
### Preview
<sbux-input id="inputIdx" name="inputIdx" uitype="text" autocomplete-ref="autocomplete_data"></sbux-input>