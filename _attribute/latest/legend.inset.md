---
title:  legend.inset
date:   2018-05-14
categories: ["latest","legend"]
order: 2
---

## legend.inset
---

차트내에 지정된 범례(legend.position="inset" 인 경우)의 위치, 형태 등을 지정합니다.

`#2.0.0`

* Type : object

* Format
```javascript
legend: {
	inset: {
		anchor:"top-left",
		x: 10,
		y: 0,
		step: 2
	}
}
```

### legend.inset.anchor

범례의 위치를 ​​결정합니다.

`#2.0.0`

* Type : string

* Values

	* top-left: `default`, 상단 좌측
	* top-right: 상단 우측
	* bottom-left: 하단 좌측
	* bottom-right: 하단 우측

### legend.inset.x

해당값 만큼 범례의 위치를 x축 방향으로 조정합니다.

`#2.0.0`

* Type : string

* Default : 0

### legend.inset.y

해당값 만큼 범례의 위치를 y축 방향으로 조정합니다.

`#2.0.0`

* Type : number

* Default : 0

### legend.inset.step

범례의 증가를 정의합니다 (예 : 5개의 범례가 있는 경우 "2" 로 지정하면 1번째 3번째 5번째 범례가 보여짐).


`#2.0.0`

* Type : number

* Default : 1

