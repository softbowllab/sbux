---
title:  modal common
date:   2018-05-14
categories: ["latest","modal"]
order: -1
---

modal common
===

<br>
팝업창의 형태를 modal 구조로 나타내는 컴포넌트 입니다.

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
        <td colspan="3">&lt;sbux-modal id="xxx" name="xxx" uitype="small"&gt;&lt;/sbux-modal&gt;</td>
    </tr>
    <tr>
        <td class="tdTitle">필수 속성</td>
        <td colspan="3">id, name, uitype</td>
    </tr>
    <tr>
        <td class="tdTitle">uitype 속성 값</td>
        <td colspan="3">small, middle, large</td>
    </tr>
    <tr>
        <td class="tdTitle">이벤트</td>
        <td colspan="3"></td>
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
        <td class="tdCenter" colspan="2">&lt;body-html&gt;</td>
        <td class="tdCenter" colspan="3">모달창내 중단 body에 입력할 html 속성</td>
    </tr>
    <tr>
        <td class="tdCenter" colspan="2">&lt;footer-html&gt;</td>
        <td class="tdCenter" colspan="3">모달창내 하단 footer에 입력할 html 속성</td>
    </tr>
</table>