---
title:  2.11 텍스트에어리어 내 HTML 구문
date:   2018-12-10
categories: ["latest","adv"]
order: 11
---

2.11 텍스트에어리어 내 HTML 구문으로 다양하게 활용하기
===

---

### STEP 1. textarea 컴포넌트 생성
<div>1. textarea 컴포넌트를 생성합니다.</div>
<br>
{% highlight html %}
<sbux-textarea id="sbIdx1" name="sbName1" uitype="normal"></sbux-textarea>
{% endhighlight %}

### STEP 2. 컴포넌트에 is-content-html 속성 추가
<div>1. auto-resize 속성을 컴포넌트에 추가합니다.</div>
<br>
{% highlight html %}
<sbux-textarea id="sbIdx1" name="sbName1" uitype="normal" is-content-html="true"></sbux-textarea>
{% endhighlight %}

### STEP 3. value에 html tag 사용
<div>1. init 속성을 사용합니다.</div>
<br>
{% highlight html %}
<sbux-textarea id="sbIdx1" name="sbName1" uitype="normal" is-content-html="true" init="<i><b>SBUx</b></i>"></sbux-textarea>
{% endhighlight %}

<div>2. set Method를 사용합니다.</div>
<br>
{% highlight html %}
<script>
    $(document).ready(function(){
        SBUxMethod.set('sbName1','
        <div>
            <dl>
				<dt><img src="http://www.softbowl.co.kr/resources/img/page/ico_sbux_merit01.gif" alt="장점1"><span>웹 표준 준수</span></dt>
				<dd>Any OS, Any Browser, Any Device 지원<br>HTML5 지원, 모바일 화면 개발지원</dd>
			</dl>
			<dl>
				<dt><img src="http://www.softbowl.co.kr/resources/img/page/ico_sbux_merit02.gif" alt="장점2"><span>쉬운 개발로 편의성 증대</span></dt>
				<!-- <dd>HTML5 기반 마크 업 언어 사용<br/>AngularJS 기반의 2way data binding</dd> -->
				<dd>다양한 개발편의도구를 제공하여<br>개발편의성 증대 및 빈번한 인적 오류 방지&#8203;</dd>
			</dl>
			<dl>
				<dt><img src="http://www.softbowl.co.kr/resources/img/page/ico_sbux_merit03.gif" alt="장점3"><span>컴포넌트 유형의 화면 개발</span></dt>
				<dd>SBGrid외 다양한 UI 컴포넌트 지원<br>다양한 외부 라이브러리 연동 가능합니다.</dd>
			</dl>
			<dl>
				<dt><img src="http://www.softbowl.co.kr/resources/img/page/ico_sbux_merit04.gif" alt="장점4"><span>소스코드 웹 취약점 및 보안성 점검 완료</span></dt>
				<dd>전문기관 웹 취약점 및 보안성 점검 툴을 이용하여<br>소스코드를 점검하여 각 기관에서 믿고 사용할 수 있습니다.</dd>
			</dl>
			<dl>
				<dt><img src="http://www.softbowl.co.kr/resources/img/page/ico_sbux_merit05.gif" alt="장점5"><span>HTML5기반, 높은 가독성 보장</span></dt>
				<dd>개발 소스와 운영 소스가 동일하여<br>용이한 유지보수 환경 제공합니다.</dd>
			</dl>
			<dl>
				<dt><img src="http://www.softbowl.co.kr/resources/img/page/ico_sbux_merit06.gif" alt="장점6"><span>뛰어난 제품 안정성 및 기술지원</span></dt>
				<dd>다년간의 경험을 통해 반영된 제품 안정성 및<br>직접 찾아가는 기술지원 그리고 다양한 유형별 샘플 제공</dd>
			</dl>
		</div>');
    });
</script>
<sbux-textarea id="sbIdx1" name="sbName1" uitype="normal" is-content-html="true"></sbux-textarea>
{% endhighlight %}

<sbux-tabs id="explainTab" name="explainTab" uitype="normal" title-target-id-array="exTab1" 
           title-text-array="설명">
</sbux-tabs>
<div class="tab-content">
    <div id="exTab1">
        ▶ 관련 속성<br><br>
        &nbsp;&nbsp;- <a href="https://softbowllab.github.io/sbux/attribute/latest/textarea.iscontenthtml#textarea" target="_blank">textarea > is-content-html</a><br>
    </div>
</div>