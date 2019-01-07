---
title:  컴포넌트 환경 설정하기
date:   2018-12-04
categories: ["latest","basic"]
order: 1
---

컴포넌트 환경 설정하기
===

---

### STEP 1. Javascript 구문, 환경변수 추가
<div>1. 아래와 같이 제품 구동을 위한 환경변수를 추가합니다.</div>

{% highlight html %}
<script >
        var SBUxConfig = {
            License : "SUE26-XXXX-XXXXX-XXX",
            Path : "/resources/sbux/",
            Locale : "ko", // { ko | en | ja }
            LocaleFile : "LocalTest.js",

            Theme : "bootstrap", // { none | bootstrap }
            CustomCSS : "SBUxCustom_Demo.css",
            DefaultSetFile : "SBUxDefault.js",

            Debug : true,
            DeveloperTipType : "none", // { console | alert | storage | none }
            SystemLogType : "console", // { console | storage | none}

            Design : true, // css 를 호출, false 시 css 호출하지 않음.
            LoadingType : "holding",  // none | holding(default) | progress
            LoadIncludeClass : 'lazyLoadClass',  // 선언한 Class 가 있는 컴포넌트만 우선 로드
            LoadExcludeClass : 'notLoadClass', // 선언한 Class 를 제외한 컴포넌트 로드
            CustomAttrs : ['custom-attr1','custom-attr2'],  // 받아들이는 custom 속성에 대한 정의

            SBGrid : {
                Theme : 'default',
                DefaultSetFile : 'SBGridDefault.js',
                Version2_5 : true
            },
            SBChart : {
                Version2_0 : true
            }
        };
</script>
{% endhighlight %}

### STEP 2. Javascript 파일, 제품 추가
<div>2. 아래와 같이 제품을 추가합니다.</div>

{% highlight html %}
<script src="/resources/sbux/SBUx.js" type="text/javascript"></script>
{% endhighlight %}

<div>3. 설명</div>
<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1^exTab2^exTab3" 
           title-text-array="설명^개발시 설정^운영시 설정">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        <div>입력 가능한 설정들 (* : 필수 입력사항)</div>
        <table style="width:100%">
            <colgroup>
                <col style="width:15%"/>
                <col style="width:85%"/>
            </colgroup>
            <tr>
                <td class="tdTitle">환경 변수명</td>
                <td >var SBUxConfig - 변수명은 변경할 수 없습니다.</td>
            </tr>
            <tr>
                <td class="tdTitle">환경 변수명</td>
                <td >var SBUxConfig - 변수명은 변경할 수 없습니다.</td>
            </tr>
            <tr>
                <td class="tdTitle">Path<span style="color:#dd2200">(*)</span></td>
                <td >SBUx.js 파일의 위치 전까지 경로를 설정합니다.</td>
            </tr>
            <tr>
                <td class="tdTitle">선결조건</td>
                <td>해당없음</td>
            </tr>
        </table>
    </div>
    <div id="exTab2">
        <div>개발시 설정</div>        
        {% highlight html %}
        <script type="text/javascript">
                var SBUxConfig = {
                    Path : "/resources/SBUx/", 
                    Debug : true,
                    DeveloperTipType : "console", // { console | alert | storage | none }
                    SystemLogType : "none", // { console | storage | none}
                    SBGrid : {
                        Version2_5 : true
                    },
                    SBChart : {
                        Version2_0 : true
                    }
                };
        </script>
        {% endhighlight %}
    </div>
    <div id="exTab3">
        <div>운영시 설정</div>
        {% highlight html %}
        <script type="text/javascript">
                var SBUxConfig = {
                    Path : "/resources/SBUx/",  
                    SBGrid : {
                        Version2_5 : true
                    },
                    SBChart : {
                        Version2_0 : true
                    }
                };
        </script>
        {% endhighlight %}
    </div>

</div>