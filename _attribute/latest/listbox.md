---
title:  listbox common
date:   2018-05-14
categories: ["latest","listbox"]
order: -1
---

listbox common
===

<br>
여러개의 항목들을 선택가능 하도록 리스트 형태로 나타낼 때 사용하는 컴포넌트 입니다.

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
        <td colspan="3">&lt;sbux-listbox id="xxx" name="xxx" uitype="single"&gt;&lt;/sbux-listbox&gt;</td>
    </tr>
    <tr>
        <td class="tdTitle">필수 속성</td>
        <td colspan="3">id, name, uitype</td>
    </tr>
    <tr>
        <td class="tdTitle">uitype 속성 값</td>
        <td colspan="3">single</td>
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
        <td class="tdCenter" colspan="2">&lt;option-item&gt;</td>
        <td class="tdCenter" colspan="3">listbox 항목</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter">속성명</td>
        <td class="tdTitle tdCenter">필수</td>
        <td class="tdTitle tdCenter">기본값</td>
        <td class="tdTitle tdCenter">설명</td>
        <td class="tdTitle tdCenter">비고</td>
    </tr>
    <tr>
        <td class="tdCenter">value</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">항목의 value 를 나타내는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">style</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">항목에 적용되는 style 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">selected</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">항목의 초기 선택값 지정 속성</td>
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
        <td class="tdCenter">value</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">value</td>
        <td class="tdCenter">기본 속성의 jsondata-value 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">style</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">style</td>
        <td class="tdCenter">css style key 명</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
    <tr>
        <td class="tdCenter">selected</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">selected</td>
        <td class="tdCenter">항목의 초기 선택값 지정 속성</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
</table>