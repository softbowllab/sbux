---
title:  title
date:   2018-05-14
categories: ["latest","title"]
order: 999
---

## title
---

차트의 제목, 위치 등을 지정합니다.


`#2.0.0`

* Type : object

* Format
```javascript
title: {
	text: "시도별 주택가격 변동률",
	position: "top-center",
	padding: {top:10, right:10, bottom:10, left:10}
}
```


### title.text

제목을 지정합니다. 공백일 경우 제목이 차트에 표현되지 않습니다.

`#2.0.0`

* Type : string


### title.position

제목 위치를 지정합니다

`#2.0.0`

* Type : string

* Values

	* top-center: `Default` 상단-가운데에 위치
	* top-right: 상단-우측에 위치
	* top-left: 상단-좌측에 위치

## title.padding
---

제목의 padding을 지정합니다.

`#2.0.0`

* Type : object

* Format
```javascript
title: {
	padding: { 
		top:10, right:10, bottom:10, left:10
	}
}
```

