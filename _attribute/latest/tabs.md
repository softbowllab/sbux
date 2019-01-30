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
        <td class="tdTitle tdBg">기본 문법</td>
        <td colspan="3">&lt;sbux-tabs id="xxx" name="xxx" uitype="normal"&gt;&lt;/sbux-tabs&gt;</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">필수 속성</td>
        <td colspan="3">id, name, uitype, title-target-id-array, title-text-array</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype 속성 값</td>
        <td colspan="3">normal, inbox, webacc</td>
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
        <td>id</td>
        <td class="tdCenter">필수</td>
        <td></td>
        <td>기본 속성의 jsondata-id 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>pid</td>
        <td class="tdCenter">필수</td>
        <td></td>
        <td>기본 속성의 jsondata-pid 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>order</td>
        <td class="tdCenter">필수</td>
        <td></td>
        <td>기본 속성의 jsondata-order 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>text</td>
        <td class="tdCenter">필수</td>
        <td></td>
        <td>기본 속성의 jsondata-text 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>targetid</td>
        <td class="tdCenter">필수</td>
        <td></td>
        <td>기본 속성의 jsondata-target-id 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>targetvalue</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-target-value 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>glyphs</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-glyphs 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>badgecolor</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-badgecolor 값과 매칭될 key</td>
        <td class="tdCenter">badgetext 필요</td>
    </tr>
    <tr>
        <td>badgetext</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-badgetext 값과 매칭될 key</td>
        <td class="tdCenter">badgecolor 필요</td>
    </tr>
    <tr>
        <td>cssstyle</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-css-style 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>link</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-target-link 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>targetname</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-target-name 값과 매칭될 key</td>
        <td class="tdCenter">link 필요</td>
    </tr>
    <tr>
        <td>selected</td>
        <td class="tdCenter"></td>
        <td>selected</td>
        <td>항목의 초기 선택 값의 key</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
    <tr>
        <td>closeicon</td>
        <td class="tdCenter"></td>
        <td>false</td>
        <td>기본 속성의 jsondata-close-icon 값과 매칭될 key</td>
        <td class="tdCenter">true | false</td>
    </tr>
    <tr>
        <td>contentlink</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-content-link 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
</table>