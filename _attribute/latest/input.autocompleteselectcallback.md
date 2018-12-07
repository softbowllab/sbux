---
title:  autocomplete-select-callback
date:   2018-12-04
categories: ["latest","input"]
order: 12
---


autocomplete-select-callback
===

---

### Description

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
            자동 완성 선택시 호출되는 callback 함수를 지정합니다.<br>
            * 함수의 첫번째 parameter로 선택된 값을 반환합니다.
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
        <td>autocomplete-ref</td>
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
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle">값형태</td>
        <td colspan="3">호출 할 callback 함수명</td>
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
        <td class="tdBlue tdCenter">O</td>
        <td class="tdCenter">X</td>
    </tr>
</table>
---

### Example (Tag)

{% highlight html %}
<script>
    var autocompData = [
        "Asp",
        "Asp.Net",
        "BASIC",
        "C",
        "C++",
        "COBOL",
        "Fortran",
        "Java",
        "JavaScript",
        "Pascal"
    ];

    function selectcallback(arg){
        alert(arg+' 선택됨');
    }
</script>
<sbux-input id="sbIdx" name="sbTagNm" uitype="text" autocomplete-ref="autocompData" autocomplete-select-callback="selectcallback"></sbux-input>
{% endhighlight %}

### Preview
<script>
    var autocompData = [
        "Asp",
        "Asp.Net",
        "BASIC",
        "C",
        "C++",
        "COBOL",
        "Fortran",
        "Java",
        "JavaScript",
        "Pascal"
    ];
    function selectcallback(arg){
        alert(arg+' 선택됨');
    }
</script>
<sbux-input id="sbIdx" name="sbTagNm" uitype="text" autocomplete-ref="autocompData" autocomplete-select-callback="selectcallback"></sbux-input>

---
### Example (Script)

{% highlight html %}
<div id="sbArea"></div>
<script>
    var autocompData = [
        "Asp",
        "Asp.Net",
        "BASIC",
        "C",
        "C++",
        "COBOL",
        "Fortran",
        "Java",
        "JavaScript",
        "Pascal"
    ];

    function selectcallback(arg){
        alert(arg+' 선택됨');
    }

    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text',
            autocompleteRef : 'autocompData',
            autocompleteSelectCallback : 'selectcallback'
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
            autocompleteRef : 'autocompData',
            autocompleteSelectCallback : 'selectcallback'
        });
    }); 
</script>