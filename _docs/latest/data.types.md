---
title:  data.types
date:   2018-05-14
categories: ["latest","data"]
order: 12
---

## data.types
---

Series 별로 차트의 종류를 지정하여 콤바네이션 차트를 설정합니다.

"라인차트(line)","곡선라인차트(spline)","공간차트(area)", "바차트(bar)" 만 가능하며 지정되지 않은 Series 는 라인차트로 처리 됩니다.


`#2.0.0`

* Type : string[]

* Format
```javascript
data: {types: ["line", "bar"]}
```
