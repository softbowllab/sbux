---
title:  checkbox common
date:   2018-05-14
categories: ["latest","checkbox"]
order: -1
---

checkbox common
===

<br>
여러 항목을 check 하여 선택할 수 있는 컴포넌트 입니다.

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
        <td class="tdTitle tdBg">기본 문법</td>
        <td colspan="3">&lt;sbux-checkbox id="xxx" name="xxx" uitype="normal"&gt;&lt;/sbux-checkbox&gt;</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">필수 속성</td>
        <td colspan="3">id, name, uitype</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype 속성 값</td>
        <td colspan="3">normal</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">이벤트</td>
        <td colspan="3">onclick, ondblclick, onchange</td>
    </tr>
</table>

<table style="width:100%">
    <colgroup>
        <col width="15%"/>
        <col width="10%"/>
        <col width="15%"/>
        <col width="45%"/>
        <col width="15%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg tdCenter" colspan="5">데이터 구조 (변동형)</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg tdCenter" colspan="2">데이터 타입</td>
        <td class="tdTitle tdBg tdCenter" colspan="3">설명</td>
    </tr>
    <tr>
        <td class="tdCenter" colspan="2">JSON Data</td>
        <td class="tdCenter" colspan="3">var jsonData= [ {...}, {...}, ... ]</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg tdCenter">키</td>
        <td class="tdTitle tdBg tdCenter">필수</td>
        <td class="tdTitle tdBg tdCenter">기본값</td>
        <td class="tdTitle tdBg tdCenter">설명</td>
        <td class="tdTitle tdBg tdCenter">비고</td>
    </tr>
    <tr>
        <td>text</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-text 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>truevalue</td>
        <td class="tdCenter"></td>
        <td>true</td>
        <td>기본 속성의 jsondata-true-value 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>falsevalue</td>
        <td class="tdCenter"></td>
        <td>false</td>
        <td>기본 속성의 jsondata-false-value 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>style</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목의 css style의 key</td>
        <td class="tdCenter">키 변경 불가능</td>
    </tr>
    <tr>
        <td>checked</td>
        <td class="tdCenter"></td>
        <td>checked</td>
        <td>항목의 초기 선택 값의 key</td>
        <td class="tdCenter">키 변경 불가능</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td class="tdCenter"></td>
        <td>disabled</td>
        <td>항목 비활성 속성의 key</td>
        <td class="tdCenter">키 변경 불가능</td>
    </tr>
</table>