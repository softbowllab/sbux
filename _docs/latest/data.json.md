---
title:  data.json
date:   2018-05-14
categories: ["latest","data"]
order: 3
---

## data.json
---

**TODO** JSON형태로 챠트 데이터를 지정합니다.

[data.columns](/data/data.columns.html) 과 동일한 방식으로 Series(범례,Legend)기준으로 Series별 값들은 좌측에서 우측(열 기준)으로 읽게되며 각 배열은 하나의 Series를 의미합니다.

이때 이름(라벨/Label)으로 쓰일 열과 값으로 쓰일 열들은 [data.keys](/data/data.keys.html) 설정을 통하여 지정합니다.


`#2.0.0`

* Type : object[]

* Format
```javascript
data : {
	json: [
		{name: '2015', seoul: 90, busan: 40, daegu: 50, kwangju: 120, sejong: 80, incheon: 90},
		{name: '2016', seoul: 120, busan: 160, daegu: 200, kwangju: 160, sejong: 130, incheon: 220},
		{name: '2017', seoul: 300, busan: 240, daegu: 290, kwangju: 230, sejong: 300, incheon: 320}
	],
	keys: {
		x: "name",
		value: ["seoul","busan","daegu","kwangju","sejong","incheon"]
	}
}
```