---
title:  data.columns
date:   2018-05-14
categories: ["latest","data"]
order: 1
---

## data.columns
---

열 기준 다차원 배열 챠트 데이터를 지정합니다.

하나의 Series(범례/Legend)기준으로 Series별 값들은 좌측에서 우측(열 기준)으로 읽게되며 배열의 첫번째 값이 Series 이름(라벨/Label)이 됩니다.

`#2.0.0`

* Type : string[][]

* Format
```javascript
data : {
	columns: [
		['2015', 90, 40, 50, 120, 80, 90],
		['2016', 120, 160, 200, 160, 130, 220],
		['2017', 300, 240, 290, 230, 300, 320]
	]
}
```