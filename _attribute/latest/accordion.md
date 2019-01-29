---
title:  accordion common
date:   2018-05-14
categories: ["latest","accordion"]
order: -1
---

accordion common
===

<br>
펼침/접힘 토글이 가능한 형태로 사이드 menu에 사용하는 accordion 컴포넌트 입니다.

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
        <td colspan="3">&lt;sbux-accordion id="xxx" name="xxx" uitype="normal"&gt;&lt;/sbux-accordion&gt;</td>
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
        <td colspan="3">onclick, ondblclick</td>
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
        <td>id</td>
        <td>기본 속성의 jsondata-id 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>pid</td>
        <td class="tdCenter">필수</td>
        <td>pid</td>
        <td>기본 속성의 jsondata-pid 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>order</td>
        <td class="tdCenter">필수</td>
        <td>order</td>
        <td>기본 속성의 jsondata-order 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>text</td>
        <td class="tdCenter"></td>
        <td>text</td>
        <td>기본 속성의 jsondata-text 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>targetid</td>
        <td class="tdCenter">필수</td>
        <td>targetid</td>
        <td>jsondata-target-id 값과 매칭될 key명, div id 값과 매칭</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>targetvalue</td>
        <td class="tdCenter"></td>
        <td>targetvalue</td>
        <td>jsondata-target-value 값과 매칭될 key명, accordion 클릭시  model 값으로 저장되는 value</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>placement</td>
        <td class="tdCenter"></td>
        <td>placement</td>
        <td>jsondata-glyphs-placement 값과 매칭될 key명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>expanded</td>
        <td class="tdCenter"></td>
        <td>expanded</td>
        <td>jsondata-expanded-glyphs 값과 매칭될 key명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>collapse</td>
        <td class="tdCenter"></td>
        <td>collapse</td>
        <td>jsondata-collapse-glyphs 값과 매칭될 key명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>cssstyle</td>
        <td class="tdCenter"></td>
        <td>cssstyle</td>
        <td>jsondata-css-style 값과 매칭될 key명</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>targetname</td>
        <td class="tdCenter"></td>
        <td>targetname</td>
        <td>item 에 대한 클릭시 iframe 으로 이동하기 위해, iframe 의 name 을 입력하는 속성</td>
        <td class="tdCenter">link 필요</td>
    </tr>
    <tr>
        <td>link</td>
        <td class="tdCenter"></td>
        <td>link</td>
        <td>jsondata-target-link 값과 매칭될 link 명</td>
        <td class="tdCenter">link 필요</td>
    </tr>
    <tr>
        <td>selected</td>
        <td class="tdCenter"></td>
        <td>selected</td>
        <td>로딩시 menu의 선택값</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td class="tdCenter"></td>
        <td>disabled</td>
        <td>항목 비활성 속성</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
    <tr>
        <td>tabindex</td>
        <td class="tdCenter"></td>
        <td>tabindex</td>
        <td>jsondata-tab-index 값과 매칭될 key 명</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
</table>