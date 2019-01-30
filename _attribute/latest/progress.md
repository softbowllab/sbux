---
title:  progress common
date:   2018-05-14
categories: ["latest","progress"]
order: -1
---

progress common
===

<br>
진행 상태 및 진행률 등을 시각적으로 나타내는 컴포넌트 입니다.

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
        <td colspan="3">&lt;sbux-progress id="xxx" name="xxx" uitype="bar"&gt;&lt;/sbux-progress&gt;</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">필수 속성</td>
        <td colspan="3">id, name, uitype</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype 속성 값</td>
        <td colspan="3">bar, loading</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">이벤트</td>
        <td colspan="3"></td>
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
        <td class="tdCenter" colspan="2">&lt;progress-bar&gt;</td>
        <td class="tdCenter" colspan="3">bar 타입일 경우에 사용되는 스타일 지정 값을 설정</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg tdCenter">속성명</td>
        <td class="tdTitle tdBg tdCenter">필수</td>
        <td class="tdTitle tdBg tdCenter">기본값</td>
        <td class="tdTitle tdBg tdCenter">설명</td>
        <td class="tdTitle tdBg tdCenter">비고</td>
    </tr>
    <tr>
        <td>striped</td>
        <td class="tdCenter"></td>
        <td>false</td>
        <td>bar 배경색에 stripe를 지정하는 속성</td>
        <td class="tdCenter">true | false</td>
    </tr>
    <tr>
        <td>show-motion</td>
        <td class="tdCenter"></td>
        <td>false</td>
        <td>bar 배경 애니메이션을 지정하는 속성</td>
        <td class="tdCenter">true | false</td>
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
        <td class="tdTitle tdBg tdCenter" colspan="5">&lt;progress-bar&gt; 자식 구조 (고정형)</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg tdCenter" colspan="2">태그</td>
        <td class="tdTitle tdBg tdCenter" colspan="3">설명</td>
    </tr>
    <tr>
        <td class="tdCenter" colspan="2">&lt;bar&gt;</td>
        <td class="tdCenter" colspan="3">현재 값에 대한 설정</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg tdCenter">속성명</td>
        <td class="tdTitle tdBg tdCenter">필수</td>
        <td class="tdTitle tdBg tdCenter">기본값</td>
        <td class="tdTitle tdBg tdCenter">설명</td>
        <td class="tdTitle tdBg tdCenter">비고</td>
    </tr>
    <tr>
        <td>valuenow</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>현재 값을 표시하는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>body-color</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>bar 배경색 설정 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>img-class</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>bar 배경을 css로 설정 할 경우 사용자 정의 class를 설정하는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>img-src</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>bar 배경을 이미지로 설정 할 경우 이미지 경로를 설정하는 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>label</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>label 표시 속성</td>
        <td class="tdCenter"></td>
    </tr>
    <tr>
        <td>label-style</td>
        <td class="tdCenter"></td>
        <td></td>
        <td>label style 속성</td>
        <td class="tdCenter"></td>
    </tr>
</table>