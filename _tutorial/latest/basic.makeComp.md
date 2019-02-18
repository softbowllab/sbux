---
title:  컴포넌트 환경 설정
date:   2018-12-04
categories: ["latest","basic"]
order: 1
---

컴포넌트 환경 설정하기
===

---

### STEP 1. Javascript 구문, 환경변수 추가
<div>1. 아래와 같이 제품 구동을 위한 환경변수를 추가합니다.</div>
<br>
<div>(* 아래는 사용가능한 설정으로 전체를 추가할 필요는 없으며 하단에 있는 탭 중 개발/운영 시 설정을 참고하시기 바랍니다)</div>
<br>
<br>
{% highlight html %}
<script>
    // SBUxConfig 명은 고정입니다.
    var SBUxConfig = {
        // 라이센스는 영업으로 문의 바랍니다.
        License : "SUE26-XXXX-XXXXX-XXX",
        // 제품 경로
        Path : "/resources/sbux/",

        // ========================================
        // 다국어 설정
        // ----------------------------------------
        // 로케일 설정
        // ----------------------------------------
        Locale : "ko", // { ko | en | ja }
        // ----------------------------------------
        // 페이지내 데이터 형태가 아닌 파일로 설정되어 있는 경우
        // ? 에 지정된 locale 명으로 변경됩니다.
        // ----------------------------------------
        LocaleFile : "<c:url value='/resources/locale/locale_?.js' />", 
        // ========================================

        // ========================================
        // 디자인 설정
        // ----------------------------------------
        // Design 파일에 대한 호출 여부 입니다.
        // ----------------------------------------
        Design : true, 
        // ----------------------------------------
        // 커스텀으로 만든 CSS, 파일위치 기준은 상단 Path 설정입니다.
        // ----------------------------------------
        CustomCSS : "SBUxCustom_Demo.css",
        // ========================================

        // ========================================
        // 개발자 설정
        // ----------------------------------------
        // 개발자를 위한 Debug 활성 모드입니다.
        // ----------------------------------------
        Debug : true,
        // ----------------------------------------
        // 개발자 Tip 으로 나타내는 방법에 대한 설정입니다.
        // ----------------------------------------
        DeveloperTipType : "console", // { console | alert | storage | none }
        // ========================================
        
        // ========================================
        // 성능 관련 설정
        // ----------------------------------------
        // 선언한 Class 가 있는 컴포넌트를 로드합니다.
        // ----------------------------------------
        LoadIncludeClass : 'lazyLoadClass',  
        // ----------------------------------------
        // 선언한 Class 를 제외한 컴포넌트를 로드합니다.
        // ----------------------------------------
        LoadExcludeClass : 'notLoadClass', 
        // ========================================

        // ========================================
        // 사용자 변수 설정
        // ----------------------------------------
        // 받아들이는 custom 속성에 대해 정의합니다.
        // ----------------------------------------
        CustomAttrs : ['custom-attr1','custom-attr2'],
        // ========================================

        // ========================================
        // SBGrid 설정
        // ----------------------------------------
        SBGrid : {
            Theme : 'default',
            Version2_5 : true
        },
        // ========================================

        // ========================================
        // SBChart 설정
        // ----------------------------------------
        SBChart : {
            Version2_0 : true
        }
        // ========================================
    };
</script>
{% endhighlight %}

### STEP 2. Javascript 파일, 제품 추가
<div>2. 아래와 같이 제품을 추가합니다.</div>
<br>
<div>(* 사용자 환경에 맞게 경로를 변경하시기 바랍니다.*)</div>
<br>
{% highlight html %}
<script src="/resources/sbux/SBUx.js"></script>
{% endhighlight %}

<div>3. 개발 및 운영 설정</div>
<br>
<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1^exTab2" 
           title-text-array="개발시 설정^운영시 설정">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">       
{% highlight html %}
<script>
    var SBUxConfig = {
        Path : "/resources/SBUx/", 
        Debug : true,
        DeveloperTipType : "console", // { console | alert | storage | none }
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
    <div id="exTab2">
{% highlight html %}
<script>
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