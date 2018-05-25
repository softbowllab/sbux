---
title:  data.keys
date:   2018-05-14
categories: ["latest","data"]
order: 4
---

## data.keys
---

**TODO** JSON 데이터를 사용할 경우 이름(라벨/Label)으로 쓰일 열과 값으로 쓰일 열을 지정합니다.


`#2.0.0`

* Type : object[][]

* Format
```javascript
data : {
	keys: {
		x: "name",
		value: ["seoul","busan","daegu","kwangju","sejong","incheon"]
	},
	json: [
		{name: '2015', seoul: 90, busan: 40, daegu: 50, kwangju: 120, sejong: 80, incheon: 90},
		{name: '2016', seoul: 120, busan: 160, daegu: 200, kwangju: 160, sejong: 130, incheon: 220},
		{name: '2017', seoul: 300, busan: 240, daegu: 290, kwangju: 230, sejong: 300, incheon: 320}
	]
}
```

### data.keys.x

이름(라벨/Label)으로 쓰일 열명을 지정합니다.

* Type : string

### data.keys.value

값으로 쓰일 열들을 지정합니다.

* Type : string[]

