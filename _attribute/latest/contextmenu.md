---
title:  contextmenu common
date:   2018-05-14
categories: ["latest","contextmenu"]
order: -1
---

contextmenu common
===

<br>
이미지와 태그를 슬라이드 형태로 사용하는 carousel 컴포넌트 입니다.

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
        <td colspan="3">&lt;sbux-contextmenu id="xxx" name="xxx"&gt;&lt;/sbux-contextmenu&gt;</td>
    </tr>
    <tr>
        <td class="tdTitle">필수 속성</td>
        <td colspan="3">id, name, uitype</td>
    </tr>
    <tr>
        <td class="tdTitle">uitype 속성 값</td>
        <td colspan="3">normal</td>
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
        <td class="tdTitle tdBg tdCenter" colspan="5">자식 구조 (고정형)</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter" colspan="2">태그</td>
        <td class="tdTitle tdCenter" colsapn="3">설명</td>
    </tr>
    <tr>
        <td class="tdCenter" colspan="2">&lt;menu-item&gt;</td>
        <td class="tdCenter" colspan="3">menu 항목</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter">속성명</td>
        <td class="tdTitle tdCenter">필수</td>
        <td class="tdTitle tdCenter">기본값</td>
        <td class="tdTitle tdCenter">설명</td>
        <td class="tdTitle tdCenter">비고</td>
    </tr>
    <tr>
        <td class="tdCenter">id</td>
        <td class="tdCenter">필수</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">menu를 구성하는 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">text</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">context menu 에 표시되는 문구 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">value</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">값의 전달이 필요할 때 사용되는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">glyphicon</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">text 좌측에 나타나는 아이콘 속성</td>
        <td class="tdCenter">사용자 임의의 class 입력 가능</td>
    </tr>
    <tr>
        <td class="tdCenter">accesskey</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">단축키, text 문구중 하나를 입력 context menu 가 나타난 후 선택의 실행키로 설정</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">shortcut-id</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">단축키의 selector가 되는 id</td>
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
        <td class="tdCenter">menu 비활성 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">type</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">text</td>
        <td class="tdCenter">input box 나 button 을 구성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">onclick</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">type="button" 시 클릭 이벤트 발생</td>
        <td class="tdCenter"></td>
    </tr>
</table>