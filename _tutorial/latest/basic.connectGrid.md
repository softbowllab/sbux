---
title:  그리드와 컴포넌트들 연결
date:   2018-12-07
categories: ["latest","basic"]
order: 7
---

그리드와 컴포넌트들 연결하기
===

---

### STEP 1. 그리드 설정
<div>1. 그리드 생성시 connect-comps 속성을 설정합니다.</div>
<br>
{% highlight html %}
<sbux-sbgrid id="datagrid" name="datagrid" uitype="2.5" style="width:100%;height:300px;" jsonref="resources" connect-comps="{direction: 'both'}">
    <sbgrid-columns>
        <sbgrid-column text="학원명" width="168px" type="input" ref="academy"></sbgrid-column>
        <sbgrid-column text="설립자(성명)" width="163px" type="output" ref="name"></sbgrid-column>
        <sbgrid-column text="바로가기" width="100px" type="outputbutton" ref="link"></sbgrid-column>
    </sbgrid-columns>
</sbux-sbgrid>
{% endhighlight %}

<div>2. column ref와 component name을 같게 설정합니다. </div>
<br>
{% highlight html %}
<sbux-sbgrid id="datagrid" name="datagrid" uitype="2.5" style="width:100%;height:300px;" jsonref="resources" connect-comps="{direction: 'both'}">
    <sbgrid-columns>
        <sbgrid-column text="학원명" width="168px" type="input" ref="academy"></sbgrid-column>
        <sbgrid-column text="설립자(성명)" width="163px" type="output" ref="name"></sbgrid-column>
        <sbgrid-column text="바로가기" width="100px" type="outputbutton" ref="link"></sbgrid-column>
    </sbgrid-columns>
</sbux-sbgrid>
<sbux-input id="academy" name="academy" uitype="text"></sbux-input>
{% endhighlight %}

### STEP 2. 컴포넌트 설정
<div>1. component 생성시 grid-id 속성과 그리드의 id를 같게 설정합니다.</div>
<br>
{% highlight html %}
<sbux-input id="academy" name="academy" uitype="text" grid-id="datagrid"></sbux-input>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- 각 컴포넌트별 grid-id
    </div>
</div>