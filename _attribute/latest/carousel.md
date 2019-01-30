---
title:  carousel common
date:   2018-05-14
categories: ["latest","carousel"]
order: -1
---

carousel common
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
        <td colspan="3">&lt;sbux-carousel id="xxx" name="xxx" uitype="image"&gt;&lt;/sbux-carousel&gt;</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">필수 속성</td>
        <td colspan="3">id, name, uitype</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype 속성 값</td>
        <td colspan="3">image, tag</td>
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
        <td class="tdCenter" colspan="2">&lt;content-item&gt;</td>
        <td class="tdCenter" colspan="3">carousel 항목</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg tdCenter">속성명</td>
        <td class="tdTitle tdBg tdCenter">필수</td>
        <td class="tdTitle tdBg tdCenter">기본값</td>
        <td class="tdTitle tdBg tdCenter">설명</td>
        <td class="tdTitle tdBg tdCenter">비고</td>
    </tr>
    <tr>
        <td>image-src</td>
        <td class="tdCenter">필수</td>
        <td></td>
        <td>이미지 경로 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>image-alt</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>이미지에 적용될 alt 속성</td>
        <td class="tdCenter">image-src 속성 필요</td>
    </tr>
    <tr>
        <td>image-title</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>이미지에 적용될 title 속성</td>
        <td class="tdCenter">image-src 속성 필요</td>
    </tr>
    <tr>
        <td>link</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>클릭 시 이동하는 링크 주소 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>order</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목 순서를 지정하는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>selected</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목의 초기 선택값 지정 속성</td>
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
        <td>imagesrc</td>
        <td class="tdCenter">필수</td>
        <td></td>
        <td>기본 속성의 jsondata-order 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>imagealt</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-image-alt 값과 매칭될 key</td>
        <td class="tdCenter">imagesrc 필요</td>
    </tr>
    <tr>
        <td>imagetitle</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-image-title 값과 매칭될 key</td>
        <td class="tdCenter">imagesrc 필요</td>
    </tr>
    <tr>
        <td>link</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>jsondata-link 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>order</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>jsondata-order 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>selected</td>
        <td class="tdCenter"></td>
        <td>selected</td>
        <td>항목의 초기 선택 값의 key</td>
        <td class="tdCenter">키 변경 불가</td>
    </tr>
</table>