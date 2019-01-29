---
title:  tabs common
date:   2018-05-14
categories: ["latest","tabs"]
order: -1
---

tabs common
===

<br>
내용이 많은 컨텐츠를 동일한 영역에서 보여줄 때 사용하는 Tab 컴포넌트 입니다.

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
        <td class="tdTitle">기본 문법</td>
        <td colspan="3">&lt;sbux-tabs id="xxx" name="xxx" uitype="normal"&gt;&lt;/sbux-tabs&gt;</td>
    </tr>
    <tr>
        <td class="tdTitle">필수 속성</td>
        <td colspan="3">id, name, uitype, title-target-id-array, title-text-array</td>
    </tr>
    <tr>
        <td class="tdTitle">uitype 속성 값</td>
        <td colspan="3">normal, inbox, webacc</td>
    </tr>
    <tr>
        <td class="tdTitle">이벤트</td>
        <td colspan="3">onclick</td>
    </tr>
</table>

<table style="width:100%">
    <colgroup>
        <col width="20%"/>
        <col width="10%"/>
        <col width="15%"/>
        <col width="40%"/>
        <col width="15%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg tdCenter" colspan="5">데이터 구조 (변동형)</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter" colspan="2">데이터 타입</td>
        <td class="tdTitle tdCenter" colsapn="3">설명</td>
    </tr>
    <tr>
        <td class="tdCenter" colspan="2">JSON Data</td>
        <td class="tdCenter" colspan="3">var jsonData= [ {...}, {...}, ... ]</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter">키</td>
        <td class="tdTitle tdCenter">필수</td>
        <td class="tdTitle tdCenter">기본값</td>
        <td class="tdTitle tdCenter">설명</td>
        <td class="tdTitle tdCenter">비고</td>
    </tr>
    <tr>
        <td class="tdCenter">id</td>
        <td class="tdCenter">필수</td>
        <td class="tdCenter">id</td>
        <td class="tdCenter">기본 속성의 jsondata-id 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">pid</td>
        <td class="tdCenter">필수</td>
        <td class="tdCenter">pid</td>
        <td class="tdCenter">기본 속성의 jsondata-pid 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">order</td>
        <td class="tdCenter">필수</td>
        <td class="tdCenter">order</td>
        <td class="tdCenter">기본 속성의 jsondata-order 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">text</td>
        <td class="tdCenter">필수</td>
        <td class="tdCenter">text</td>
        <td class="tdCenter">기본 속성의 jsondata-text 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">targetid</td>
        <td class="tdCenter">필수</td>
        <td class="tdCenter">targetid</td>
        <td class="tdCenter">기본 속성의 jsondata-target-id 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">targetvalue</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">targetvalue</td>
        <td class="tdCenter">기본 속성의 jsondata-target-value 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">glyphs</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">glyphs</td>
        <td class="tdCenter">기본 속성의 jsondata-glyphs 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">badgecolor</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">badgecolor</td>
        <td class="tdCenter">기본 속성의 jsondata-badgecolor 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">badgetext</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">badgetext</td>
        <td class="tdCenter">기본 속성의 jsondata-badgetext 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">cssstyle</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">cssstyle</td>
        <td class="tdCenter">기본 속성의 jsondata-cssstyle 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">link</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">link</td>
        <td class="tdCenter">기본 속성의 jsondata-target-link 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">targetname</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">targetname</td>
        <td class="tdCenter">기본 속성의 jsondata-target-name 값과 매칭될 key 명</td>
        <td class="tdCenter">link 필요</td>
    </tr>
    <tr>
        <td class="tdCenter">selected</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">selected</td>
        <td class="tdCenter">초기 로딩시 탭의 선택값</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
    <tr>
        <td class="tdCenter">closeicon</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">closeicon</td>
        <td class="tdCenter">기본 속성의 jsondata-close-icon 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">contentlink</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">contentlink</td>
        <td class="tdCenter">기본 속성의 jsondata-content-link 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
</table>