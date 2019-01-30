---
title:  sidemenu common
date:   2018-05-14
categories: ["latest","sidemenu"]
order: -1
---

sidemenu common
===

<br>
side menu에 사용하는 sidemenu 컴포넌트 입니다.

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
        <td colspan="3">&lt;sbux-sidemenu id="xxx" name="xxx" uitype="normal"&gt;&lt;/sbux-sidemenu&gt;</td>
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
        <td class="tdCenter" colspan="3">sidemenu 항목</td>
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
        <td>항목의 value 를 나타내는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>link</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>클릭 시 이동하는 링크 주소 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>image-src</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>이미지 경로 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>image-style</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>이미지에 적용될 스타일 속성</td>
        <td class="tdCenter">image-src 속성 필요</td>
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
        <td>style</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목에 적용되는 css style 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>class</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목에 class를 지정하는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>target-name</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목 클릭시 이동할 iframe 의 name 입력 속성</td>
        <td class="tdCenter">link 속성 필요</td>
    </tr>
    <tr>
        <td>target</td>
        <td class="tdCenter"></td>
        <td>_self</td>
        <td>항목 클릭시 이동할 target을 설정하는 속성</td>
        <td class="tdCenter">
            link 속성 필요<br>
            _blank | _self | _parent | _top
        </td>
    </tr>
    <tr>
        <td>disabled</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>항목 비활성 속성</td>
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
        <td>link</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-link 값과 매칭될 key</td>
        <td class="tdCenter"></td>
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
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-order 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>imagesrc</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-image-src 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>imagestyle</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-image-style 값과 매칭될 key</td>
        <td class="tdCenter">imagesrc 필요</td>
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
        <td>style</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-style 값과 매칭될 key</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>class</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>기본 속성의 jsondata-class 값과 매칭될 key</td>
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
        <td>target</td>
        <td class="tdCenter"></td>
        <td>_self</td>
        <td>기본 속성의 jsondata-target 값과 매칭될 key</td>
        <td class="tdCenter">
            link 필요<br>
            _blank | _self | _parent | _top
        </td>
    </tr>
</table>