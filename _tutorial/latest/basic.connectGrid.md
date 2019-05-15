---
title:  1.8 그리드와 컴포넌트들 연결
date:   2018-12-07
categories: ["latest","basic"]
order: 7
---

1.8 그리드와 컴포넌트들 연결하기
===

---

### STEP 1. 그리드 연동 (tag)
<div>1. 그리드를 생성합니다.</div>
<br>
{% highlight html %}
<script>
    var sbgridData=[
        {name:'이현수', gender:'남', phone:'01066479768'},
        {name:'정기승', gender:'남', phone:'01022454487'},
        {name:'한수정', gender:'여', phone:'01088956544'}
    ];
</script>
<sbux-sbgrid id="datagrid" name="datagrid" uitype="2.5" style="width:100%;height:300px;" jsonref="sbgridData">
    <sbgrid-columns>
        <sbgrid-column text="col1" width="150px" type="input" ref="name"></sbgrid-column>
        <sbgrid-column text="col2" width="150px" type="input" ref="gender"></sbgrid-column>
        <sbgrid-column text="col3" width="150px." type="input" ref="phone"></sbgrid-column>
    </sbgrid-columns>
</sbux-sbgrid>
{% endhighlight %}

<div>2. 연동할 column ref와 component name을 같게 설정합니다. </div>
<br>
{% highlight html %}
<script>
    var sbgridData=[
        {name:'이현수', gender:'남', phone:'01066479768'},
        {name:'정기승', gender:'남', phone:'01022454487'},
        {name:'한수정', gender:'여', phone:'01088956544'}
    ];
</script>
<sbux-sbgrid id="datagrid" name="datagrid" uitype="2.5" style="width:100%;height:300px;" jsonref="sbgridData">
    <sbgrid-columns>
        <sbgrid-column text="col1" width="150px" type="input" ref="name"></sbgrid-column>
        <sbgrid-column text="col2" width="150px" type="input" ref="gender"></sbgrid-column>
        <sbgrid-column text="col3" width="150px." type="input" ref="phone"></sbgrid-column>
    </sbgrid-columns>
</sbux-sbgrid>
<sbux-input id="sbIdx" name="name" uitype="text"></sbux-input>
{% endhighlight %}

<div>3. 컴포넌트의 grid-id 속성과 그리드의 id를 같게 설정합니다.</div>
<br>
{% highlight html %}
<script>
    var sbgridData=[
        {name:'이현수', gender:'남', phone:'01066479768'},
        {name:'정기승', gender:'남', phone:'01022454487'},
        {name:'한수정', gender:'여', phone:'01088956544'}
    ];
</script>
<sbux-sbgrid id="datagrid" name="datagrid" uitype="2.5" style="width:100%;height:300px;" jsonref="sbgridData">
    <sbgrid-columns>
        <sbgrid-column text="col1" width="150px" type="input" ref="name"></sbgrid-column>
        <sbgrid-column text="col2" width="150px" type="input" ref="gender"></sbgrid-column>
        <sbgrid-column text="col3" width="150px." type="input" ref="phone"></sbgrid-column>
    </sbgrid-columns>
</sbux-sbgrid>
<sbux-input id="sbIdx" name="name" uitype="text" grid-id="datagrid"></sbux-input>
{% endhighlight %}

### STEP 2. 그리드 연동 (script)
<div>1. 그리드를 생성합니다.</div>
<br>
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
{% endhighlight %}

<div>2. 연동할 column ref와 component name을 같게 설정합니다. </div>
<br>
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
<sbux-input id="sbIdx" name="name" uitype="text"></sbux-input>
{% endhighlight %}

<div>3. 컴포넌트의 grid-id 속성과 그리드의 id를 같게 설정합니다.</div>
<br>
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
<sbux-input id="sbIdx" name="name" uitype="text" grid-id="datagrid"></sbux-input>
{% endhighlight %}


<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/common.gridid#common" target="_blank">공통 >  grid-id</a>
    </div>
</div>