---
title:  dropdown common
date:   2018-05-14
categories: ["latest","dropdown"]
order: -1
---

dropdown common
===

<br>
Tree형태의 구조에 대해 하위나 상위로 나타나는 Dropdown menu 컴포넌트 입니다.

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
        <td colspan="3">&lt;sbux-dropdown id="xxx" name="xxx" uitype="normal"&gt;&lt;/sbux-dropdown&gt;</td>
    </tr>
    <tr>
        <td class="tdTitle">필수 속성</td>
        <td colspan="3">id, name, uitype</td>
    </tr>
    <tr>
        <td class="tdTitle">uitype 속성 값</td>
        <td colspan="3">normal, button, splitbutton</td>
    </tr>
    <tr>
        <td class="tdTitle">이벤트</td>
        <td colspan="3">onclick, onchange</td>
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
        <td class="tdTitle tdBg tdCenter" colspan="5">자식 구조 (고정형)</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter" colspan="2">태그</td>
        <td class="tdTitle tdCenter" colsapn="3">설명</td>
    </tr>
    <tr>
        <td class="tdCenter" colspan="2">&lt;menu-item&gt;</td>
        <td class="tdCenter" colspan="3">dropdown 항목</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter">속성명</td>
        <td class="tdTitle tdCenter">필수</td>
        <td class="tdTitle tdCenter">기본값</td>
        <td class="tdTitle tdCenter">설명</td>
        <td class="tdTitle tdCenter">비고</td>
    </tr>
    <tr>
        <td class="tdCenter">text</td>
        <td class="tdCenter">필수</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">항목의 문구를 나타내는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">link</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">클릭 시 이동하는 링크 주소 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">divider</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">구분자를 나타내는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">disabled</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">항목 비활성 속성</td>
        <td class="tdCenter"></td>
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
        <td class="tdCenter">text</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">text</td>
        <td class="tdCenter">기본 속성의 jsondata-text 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">link</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">link</td>
        <td class="tdCenter">기본 속성의 jsondata-link 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">id</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">id</td>
        <td class="tdCenter">기본 속성의 jsondata-id 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">pid</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">pid</td>
        <td class="tdCenter">기본 속성의 jsondata-pid 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">order</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">order</td>
        <td class="tdCenter">기본 속성의 jsondata-order 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">divider</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">divider</td>
        <td class="tdCenter">항목간 분리 표시</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
    <tr>
        <td class="tdCenter">disabeld</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">disabeld</td>
        <td class="tdCenter">항목 비활성 여부</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
</table>