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
        <td class="tdTitle tdBg">기본 문법</td>
        <td colspan="3">&lt;sbux-contextmenu id="xxx" name="xxx"&gt;&lt;/sbux-contextmenu&gt;</td>
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
        <td colspan="3">onclick</td>
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
        <td class="tdCenter" colspan="2">&lt;menu-item&gt;</td>
        <td class="tdCenter" colspan="3">menu 항목</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg tdCenter">속성명</td>
        <td class="tdTitle tdBg tdCenter">필수</td>
        <td class="tdTitle tdBg tdCenter">기본값</td>
        <td class="tdTitle tdBg tdCenter">설명</td>
        <td class="tdTitle tdBg tdCenter">비고</td>
    </tr>
    <tr>
        <td>id</td>
        <td class="tdCenter">필수</td>
        <td></td>
        <td>항목의 id를 지정하는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>text</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목의 문구를 나타내는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>value</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목의 value를 나타내는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>glyphicon</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목에 나타나는 아이콘을 지정하는 속성</td>
        <td class="tdCenter">사용자 임의의 class 입력 가능</td>
    </tr>
    <tr>
        <td>accesskey</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>text 문구중 한글자를 단축키로 설정하는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>shortcut-id</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>단축키의 selector가 되는 id를 지정하는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>divider</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목 구분자를 나타내는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>disabled</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목 비활성 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>type</td>
        <td class="tdCenter"></td>
        <td>text</td>
        <td>항목의 타입을 설정하는 속성</td>
        <td class="tdCenter">text | button</td>
    </tr>
    <tr>
        <td>onclick</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>type="button" 시 클릭 이벤트 속성</td>
        <td class="tdCenter"></td>
    </tr>
</table>