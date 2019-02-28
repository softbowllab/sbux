---
title:  grid-direction
date:   2018-12-04
categories: ["latest","common"]
order: 18
---

grid-direction
===

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
        <td class="tdTitle tdBg">설명</td>
        <td colspan="3">Component와 연결된 grid와의 데이터 수용 형태를 지정합니다.</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">적용버전</td>
        <td>2.6.0</td>
        <td class="tdTitle tdBg">필수여부</td>
        <td>선택</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">선결조건</td>
        <td>grid-id</td>
        <td class="tdTitle tdBg">연관자료</td>
        <td>해당없음</td>
    </tr>
</table>
<table style="width:100%">
    <colgroup>
        <col width="15%"/>
        <col width="35%"/>
        <col width="15%"/>
        <col width="35%"/>
    </colgroup>
    <tr>
        <td class="tdTitle tdBg tdCenter" colspan="4">속성값</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">기본값</td>
        <td>both</td>
        <td class="tdTitle tdBg">자료형</td>
        <td>string</td>
    </tr>
    <tr>
        <td class="tdTitle tdBg">값형태</td>
        <td colspan="3">receive | send | both</td>
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
        <td class="tdTitle tdBg">지원 컴포넌트</td>
        <td class="tdCenter" colspan="4">input, datepikcer, checkbox, select, textarea, listbox</td>
    </tr>
</table>

---
### Example & Preview (Tag)

<script>
    var datagrid;
    var SBGridProperties={};
    var sbgridData=[
        {name:'이현수', gender:'남', phone:'01066479768'},
        {name:'정기승', gender:'남', phone:'01022454487'},
        {name:'한수정', gender:'여', phone:'01088956544'}
    ];

    $(document).ready(function(){
        createGrid();
    });

    function createGrid(){
        SBGridProperties.parentid='SBGridArea';
        SBGridProperties.id='datagrid';
        SBGridProperties.jsonref='sbgridData';
        SBGridProperties.columns=[
            {caption:['col1'], ref:'name', width:'150px', type:'input'},
            {caption:['col2'], ref:'gender', width:'150px', type:'input'},
            {caption:['col3'], ref:'phone', width:'150px', type:'input'}
        ];
        datagrid = _SBGrid.create(SBGridProperties);
    };
</script>

<sbux-tabs id="exTab1" name="exTab1" uitype="normal" title-target-id-array="exTab1_1" title-text-array="-">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1_1">

▶ Example

{% highlight html %}
<script>
    var datagrid;
    var SBGridProperties={};
    var sbgridData=[
        {name:'이현수', gender:'남', phone:'01066479768'},
        {name:'정기승', gender:'남', phone:'01022454487'},
        {name:'한수정', gender:'여', phone:'01088956544'}
    ];

    $(document).ready(function(){
        createGrid();
    });

    function createGrid(){
        SBGridProperties.parentid='SBGridArea';
        SBGridProperties.id='datagrid';
        SBGridProperties.jsonref='sbgridData';
        SBGridProperties.columns=[
            {caption:['col1'], ref:'name', width:'150px', type:'input'},
            {caption:['col2'], ref:'gender', width:'150px', type:'input'},
            {caption:['col3'], ref:'phone', width:'150px', type:'input'}
        ];
        datagrid = _SBGrid.create(SBGridProperties);
    };
</script>
<div id="SBGridArea" style="width:460px; height:130px;"></div>
<sbux-input id="sbIdx" name="name" uitype="text" grid-id="datagrid" grid-direction="send"></sbux-input>
{% endhighlight %}

<br>

▶ Preview

<div id="SBGridArea" style="width:460px; height:130px;"></div>
<sbux-input id="sbIdx" name="name" uitype="text" grid-id="datagrid" grid-direction="send"></sbux-input>

    </div>
</div>