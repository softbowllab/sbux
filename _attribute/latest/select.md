---
title:  select common
date:   2018-05-14
categories: ["latest","select"]
order: -1
---

select common
===

<br>
하나의 항목을 선택가능 하도록 팝업 리스트 형태로 나타낼 때 사용하는 컴포넌트 입니다.

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
        <td colspan="3">&lt;sbux-select id="xxx" name="xxx" uitype="single"&gt;&lt;/sbux-select&gt;</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">필수 속성</td>
        <td colspan="3">id, name, uitype</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype 속성 값</td>
        <td colspan="3">single, checkbox</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">이벤트</td>
        <td colspan="3">onclick, onchange</td>
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
        <td class="tdTitle tdBg tdCenter" colspan="5">자식 구조 (고정형)</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg tdCenter" colspan="2">태그</td>
        <td class="tdTitle tdBg tdCenter" colspan="3">설명</td>
    </tr>
    <tr>
        <td class="tdCenter" colspan="2">&lt;option-item&gt;</td>
        <td class="tdCenter" colspan="3">select 항목</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg tdCenter">속성명</td>
        <td class="tdTitle tdBg tdCenter">필수</td>
        <td class="tdTitle tdBg tdCenter">기본값</td>
        <td class="tdTitle tdBg tdCenter">설명</td>
        <td class="tdTitle tdBg tdCenter">비고</td>
    </tr>
    <tr>
        <td>value</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목의 value 를 나타내는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>style</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목에 적용되는 style 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>selected</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목의 초기 선택값 지정 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>sbux-selected</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>다른 컴포넌트의 model 값에 따라 선택값으로 지정되도록 하는 속성</td>
        <td class="tdCenter"></td>
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
        <td>value</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-value 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>style</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목의 css style의 key</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
    <tr>
        <td>selected</td>
        <td class="tdCenter"></td>
        <td>selected</td>
        <td>항목의 초기 선택 값의 key</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
    <tr>
        <td>sbuxselected</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>다른 컴포넌트의 model 값에 따라 선택값으로 지정되도록 하는 속성의 key</td>
        <td class="tdCenter">
            키 변경 불가<br>
            checkbox type만 사용가능
        </td>
    </tr>
    <tr>
        <td>disabled</td>
        <td class="tdCenter"></td>
        <td>disabled</td>
        <td>항목 비활성 속성의 key</td>
        <td class="tdCenter">
            키 변경 불가<br>
            checkbox type만 사용가능
        </td>
    </tr>
</table>