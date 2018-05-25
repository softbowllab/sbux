---
title:  data.rows
date:   2018-05-14
categories: ["latest","data"]
order: 2
---

## data.rows
---

행 기준 다차원 배열 챠트 데이터를 지정합니다.

하나의 Series(범례,Legend)기준으로 값들은 위에서 아래(행 기준)으로 읽게되며 첫번재 배열의 값들이 각 Series 이름(라벨/Label)이 됩니다.

`#2.0.0`

* Type : string[][]

* Format
```javascript
data : {
	rows: [
		['2015', '2016', '2017'],
		[90, 120, 300],
		[40, 160, 240],
		[50, 200, 290],
		[120, 160, 230],
		[80, 130, 300],
		[90, 220, 320]
	]
}
```
