---
title:  index
date:   2018-05-14
categories: ["latest"]
order: 0
---

## SBChart v2.0 API
---

### global

크기, Padding, 색패턴을 정의할 수 있는 옵션 입니다.

{% assign cate = "global" %}
{% assign pages = site.docs | where: "categories", page.categories[0] | where: "categories", cate | sort: "order"%}
{% for item in pages %}
* [{{ item.title }}]({{ site.baseurl }}{{site.path}}{{ item.url }})
{% endfor %}


### data

대상 데이터 및 챠트 종류 등 데이터 관련 옵션입니다.

{% assign cate = "data" %}
{% assign pages = site.docs | where: "categories", page.categories[0] | where: "categories", cate | sort: "order"%}
{% for item in pages %}
* [{{ item.title }}]({{ site.baseurl }}{{site.path}}{{ item.url }})
{% endfor %}


### grid

Grid 설정 옵션 입니다.

{% assign cate = "grid" %}
{% assign pages = site.docs | where: "categories", page.categories[0] | where: "categories", cate | sort: "order"%}
{% for item in pages %}
* [{{ item.title }}]({{ site.baseurl }}{{site.path}}{{ item.url }})
{% endfor %}


### title

타이틀의 위치, 모양에 대한 옵션입니다.

{% assign cate = "title" %}
{% assign pages = site.docs | where: "categories", page.categories[0] | where: "categories", cate | sort: "order"%}
{% for item in pages %}
* [{{ item.title }}]({{ site.baseurl }}{{site.path}}{{ item.url }})
{% endfor %}


### legend

범례의 위치, 모양에 대한  옵션입니다.

{% assign cate = "legend" %}
{% assign pages = site.docs | where: "categories", page.categories[0] | where: "categories", cate | sort: "order"%}
{% for item in pages %}
* [{{ item.title }}]({{ site.baseurl }}{{site.path}}{{ item.url }})
{% endfor %}


### axes

x,y 축 관련 옵션입니다.

{% assign cate = "axes" %}
{% assign pages = site.docs | where: "categories", page.categories[0] | where: "categories", cate | sort: "order"%}
{% for item in pages %}
* [{{ item.title }}]({{ site.baseurl }}{{site.path}}{{ item.url }})
{% endfor %}
