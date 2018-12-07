---
title:  grid
date:   2018-05-14
categories: ["latest","grid"]
order: 999
---

## grid
---

차트의 그리드를 설정 합니다.

x,y축이 존재하지 않는 원(pie), 도넛(donut) 차트는 해당 사항이 없습니다.

`#2.0.0`

* Type : object

* Format
```javascript
grid: {
	x: { 
		show:true
	},
	y: { 
		show:false
	}
}
```


### grid.x.show

x축 그리드를 show/hidden 처리합니다.

`#2.0.0`

* Type : boolean

* Default : true

### grid.y.show

y축 그리드를 show/hidden 처리합니다.

`#2.0.0`

* Type : boolean

* Default : true
