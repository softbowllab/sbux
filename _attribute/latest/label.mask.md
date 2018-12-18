---
title:  mask
date:   2018-12-04
categories: ["latest","label"]
order: 2
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
        <td class="tdTitle">설명</td>
        <td colspan="3">Component에 특정 포맷을 지정합니다.</td>
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
### Example & Preview (Tag)

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="normal">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<sbux-label id="sbIdx" name="sbTagNm" uitype="normal" text="1234567" mask='{"alias": "currency" }'></sbux-label>
{% endhighlight %}

<br>

▶ Preview

<sbux-label id="sbIdx" name="sbTagNm" uitype="normal" text="1234567" mask='{"alias": "currency" }'></sbux-label>

    </div>
</div>

---
### Example & Preview (Script)

<sbux-tabs id="exTab2" name="exTab2" uitype="normal" title-target-id-array="exTab2_1" title-text-array="normal">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab2_1">

▶ Example

{% highlight html %}
<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbLabel({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : '1234567',
			mask : '{"alias": "currency"}'
        });
    }); 
</script>
{% endhighlight %}

<br>

▶ Preview 

<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbLabel({
            name : 'sbScriptNm',
            uitype : 'normal',
            text : '1234567',
			mask : '{"alias": "currency"}'
        });
    }); 
</script>

    </div>
</div>