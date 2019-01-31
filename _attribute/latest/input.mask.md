---
title:  mask
date:   2018-12-04
categories: ["latest","input"]
order: 6
---

mask
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
        <td class="tdTitle tdBg">설명</td>
        <td colspan="3">Component에 특정 포맷을 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle tdBg">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">선결조건</td>
        <td>해당없음</td>
        <td class="tdTitle tdBg">연관자료</td>
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
        <td class="tdTitle tdBg tdCenter" colspan="4">속성값</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">기본값</td>
        <td>해당없음</td>
        <td class="tdTitle tdBg">자료형</td>
        <td>string, JSON Object</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">값형태</td>
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
        <td>세자리 마다 자릿수</td>
        <td>mask='{"alias": "numeric" , "autoGroup" : 3 , "groupSeparator": ","}'</td>
    </tr>
    <tr>
        <td>소수점 2째자리 숫자</td>
        <td>mask='{"alias": "decimal" , "digits": 2, "radixPoint": "."}'</td>
    </tr>
    <tr>
        <td>통화</td>
        <td>mask='{"alias": "currency" }'</td>
    </tr>
    <tr>
        <td>통화의 앞뒤 고정 문자</td>
        <td>mask="{'alias': 'currency', 'suffix' : '원' , 'prefix' :'이번달 총액은 ' ,'digits': 0 }"</td>
    </tr>
    <tr>
        <td>주민등록번호</td>
        <td>mask="999999-9999999"</td>
    </tr>
    <tr>
        <td>특정 문구 고정</td>
        <td>mask="문서번호2016-9999999"</td>
    </tr>
    <tr>
        <td>전화번호</td>
        <td>mask='{"mask": "(999) 999-9999", "clearIncomplete": true }'<br>
            * clearIncomplete 속성은 지정된 포맷의 글자가 모두 입력되지 않은 채
              Focus 가 이동되었을 경우 초기화 시키는 속성
        </td>
    </tr>
    <tr>
        <td>년도/월/일</td>
        <td>mask='{alias: "yyyy/mm/dd", "autoUnmask" : true}'<br>
            * autoUnmask 가 true 로 되어 있는 경우는 포맷 적용이 없는 상태로 
              데이터값을 받고자 할때 사용하는 속성
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
        <td class="tdCenter">text</td>
        <td class="tdCenter">password</td>
        <td class="tdCenter">search</td>
        <td class="tdCenter">hidden</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdCenter">X</td>
    </tr>
</table>

---
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3" title-text-array="text^password^search">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text" mask="문서번호2016-9999999"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<sbux-input id="sbIdx1" name="sbTagNm1" uitype="text" mask="문서번호2016-9999999"></sbux-input>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<sbux-input id="sbIdx2" name="sbTagNm2" uitype="password" mask="문서번호2016-9999999"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<sbux-input id="sbIdx2" name="sbTagNm2" uitype="password" mask="문서번호2016-9999999"></sbux-input>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<sbux-input id="sbIdx3" name="sbTagNm3" uitype="search" mask="문서번호2016-9999999"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<sbux-input id="sbIdx3" name="sbTagNm3" uitype="search" mask="문서번호2016-9999999"></sbux-input>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1^exTab2_2^exTab2_3" title-text-array="text^password^search">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbInput({
            name : 'sbScriptNm1',
            uitype : 'text',
			mask : '문서번호2016-9999999'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea1"></div>
<script>
    $(document).ready(function(){
        $('#sbArea1').sbInput({
            name : 'sbScriptNm1',
            uitype : 'text',
			mask : '문서번호2016-9999999'
        });
    }); 
</script>

    </div>
    <div id="exTab2_2">

▶ Example

{% highlight html %}
<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2').sbInput({
            name : 'sbScriptNm2',
            uitype : 'password',
			mask : '문서번호2016-9999999'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea2"></div>
<script>
    $(document).ready(function(){
        $('#sbArea2').sbInput({
            name : 'sbScriptNm2',
            uitype : 'password',
			mask : '문서번호2016-9999999'
        });
    }); 
</script>

    </div>
    <div id="exTab2_3">

▶ Example

{% highlight html %}
<div id="sbArea3"></div>
<script>
    $(document).ready(function(){
        $('#sbArea3').sbInput({
            name : 'sbScriptNm3',
            uitype : 'search',
			mask : '문서번호2016-9999999'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea3"></div>
<script>
    $(document).ready(function(){
        $('#sbArea3').sbInput({
            name : 'sbScriptNm3',
            uitype : 'search',
			mask : '문서번호2016-9999999'
        });
    }); 
</script>

    </div>
</div>