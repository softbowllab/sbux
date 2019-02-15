---
title:  set
date:   2018-12-04
categories: ["latest","modal"]
order: 0
---

set
===

---

## Description

<table style="width:100%">
    <colgroup>
        <col width="10%"/>
        <col width="15%"/>
        <col width="55%"/>
        <col width="20%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg">설명</td>
        <td colspan="3">Component에 값을 설정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg" colspan="4">파라미터 정보</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">예시</td>
        <td colspan="3">SBUxMethod.set('CompName', 'value');</td>
    </tr>
    <tr>
        <td class="tdTitle tdCenter tdBg">순서</td>
        <td class="tdTitle tdCenter tdBg">타입</td>
        <td class="tdTitle tdCenter tdBg">설명</td>
        <td class="tdTitle tdCenter tdBg">비고</td>
    </tr>
    <tr>
        <td class="tdCenter">1</td>
        <td class="tdCenter">string</td>
        <td>method를 실행할 Component name</td>
        <td></td>
    </tr>
    <tr>
        <td class="tdCenter">2</td>
        <td class="tdCenter">string</td>
        <td>Component에 설정할 값</td>
        <td></td>
    </tr>
</table>
<table style="width:100%">
    <colgroup>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
        <col width="20%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg tdCenter" colspan="5">사용제한</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">uitype</td>
        <td class="tdCenter">small</td>
        <td class="tdCenter">middle</td>
        <td class="tdCenter">large</td>
        <td></td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">가능여부</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td class="tdBlue tdCenter">O</td>
        <td></td>
    </tr>
</table>

---
### Example & Preview

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1^exTab1_2^exTab1_3" title-text-array="small^middle^large">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1', 'modal Value');">
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm1'));">
<sbux-button id="idxBtn_modal" name="btn_modal" uitype="modal" text="모달 호출버튼" target-id="sbIdx1"></sbux-button>
<sbux-modal id="sbIdx1" name="sbTagNm1" uitype="small" header-title="Modal 타이틀"></sbux-modal>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm1', 'modal Value');">
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm1'));">
<sbux-button id="idxBtn_modal" name="btn_modal" uitype="modal" text="모달 호출버튼" target-id="sbIdx1"></sbux-button>
<sbux-modal id="sbIdx1" name="sbTagNm1" uitype="small" header-title="Modal 타이틀"></sbux-modal>

    </div>
    <div id="exTab1_2">

▶ Example

{% highlight html %}
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm2', 'modal Value');">
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm2'));">
<sbux-button id="idxBtn_modal2" name="btn_modal2" uitype="modal" text="모달 호출버튼" target-id="sbIdx2"></sbux-button>
<sbux-modal id="sbIdx2" name="sbTagNm2" uitype="middle" header-title="Modal 타이틀"></sbux-modal>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm2', 'modal Value');">
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm2'));">
<sbux-button id="idxBtn_moda2l" name="btn_modal2" uitype="modal" text="모달 호출버튼" target-id="sbIdx2"></sbux-button>
<sbux-modal id="sbIdx2" name="sbTagNm2" uitype="middle" header-title="Modal 타이틀"></sbux-modal>

    </div>
    <div id="exTab1_3">

▶ Example

{% highlight html %}
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm3', 'modal Value');">
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm3'));">
<sbux-button id="idxBtn_modal3" name="btn_modal3" uitype="modal" text="모달 호출버튼" target-id="sbIdx3"></sbux-button>
<sbux-modal id="sbIdx3" name="sbTagNm3" uitype="large" header-title="Modal 타이틀"></sbux-modal>
{% endhighlight %}

<br>

▶ Preview

<br>
<input type="button" value="set" onclick="SBUxMethod.set('sbTagNm3', 'modal Value');">
<input type="button" value="get" onclick="alert(SBUxMethod.get('sbTagNm3'));">
<sbux-button id="idxBtn_modal3" name="btn_modal3" uitype="modal" text="모달 호출버튼" target-id="sbIdx3"></sbux-button>
<sbux-modal id="sbIdx3" name="sbTagNm3" uitype="large" header-title="Modal 타이틀"></sbux-modal>

    </div>
</div>