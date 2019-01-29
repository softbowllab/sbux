---
title:  tree common
date:   2018-05-14
categories: ["latest","tree"]
order: -1
---

tree common
===

<br>
전체적인 메뉴를 구성할 때 사용하는 tree 컴포넌트 입니다.

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
        <td colspan="3">&lt;sbux-tree id="xxx" name="xxx" uitype="normal"&gt;&lt;/sbux-tree&gt;</td>
    </tr>
    <tr>
        <td class="tdTitle">필수 속성</td>
        <td colspan="3">id, name, uitype</td>
    </tr>
    <tr>
        <td class="tdTitle">uitype 속성 값</td>
        <td colspan="3">normal, checkbox</td>
    </tr>
    <tr>
        <td class="tdTitle">이벤트</td>
        <td colspan="3">onclick, ondblclick, onchange</td>
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
        <td class="tdCenter" colspan="2">&lt;tree-item&gt;</td>
        <td class="tdCenter" colspan="3">tree 항목</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter">속성명</td>
        <td class="tdTitle tdCenter">필수</td>
        <td class="tdTitle tdCenter">기본값</td>
        <td class="tdTitle tdCenter">설명</td>
        <td class="tdTitle tdCenter">비고</td>
    </tr>
    <tr>
        <td class="tdCenter">link</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">클릭시 링크 경로 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">text</td>
        <td class="tdCenter">필수</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">문자열 로고 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">value</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">항목의 value 를 나타내는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">image-src</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">항목 좌측 이미지 경로 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">image-style</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">항목 좌측 이미지 스타일 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">css-style</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">텍스트에 적용되는 CSS 스타일 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td class="tdCenter">target-name</td>
        <td class="tdCenter"></td>
        <td class="tdCenter"></td>
        <td class="tdCenter">item 에 대한 클릭시 iframe 으로 이동하기 위해, iframe 의 name 을 입력하는 속성</td>
        <td class="tdCenter">link 속성 필요</td>
    </tr>
    <tr>
        <td class="tdCenter">target</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">_self</td>
        <td class="tdCenter">item 에 대한 클릭시 정해진 target 으로 이동합니다.</td>
        <td class="tdCenter">link 속성 필요</td>
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
        <td class="tdCenter">link</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">link</td>
        <td class="tdCenter">기본 속성의 jsondata-link 값과 매칭될 key 명</td>
        <td class="tdCenter"></td>
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
        <td class="tdCenter">imagesrc</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">imagesrc</td>
        <td class="tdCenter">기본 속성의 jsondata-image-src 값과 매칭될 key 명</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
    <tr>
        <td class="tdCenter">imagestyle</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">imagestyle</td>
        <td class="tdCenter">기본 속성의 jsondata-image-style 값과 매칭될 key 명</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
    <tr>
        <td class="tdCenter">cssstyle</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">cssstyle</td>
        <td class="tdCenter">텍스트에 적용되는 css style</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
    <tr>
        <td class="tdCenter">targetname</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">targetname</td>
        <td class="tdCenter">item 에 대한 클릭시 iframe 으로 이동하기 위해, iframe 의 name 을 입력하는 속성</td>
        <td class="tdCenter">link 필요</td>
    </tr>
    <tr>
        <td class="tdCenter">target</td>
        <td class="tdCenter"></td>
        <td class="tdCenter">target</td>
        <td class="tdCenter">item 에 대한 클릭시 정해진 target 으로 이동합니다.</td>
        <td class="tdCenter">link 필요</td>
    </tr>
</table>