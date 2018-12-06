---
title:  id
date:   2018-12-04
categories: ["latest","common"]
order: 1
---

id
===
---

## Discription
Component의 고유 ID를 지정합니다.

`#2.0.0`

---

## Value

### id="compId"

* compId : Component의 고유 ID
* Value Type : string
* Default : X

---
## Example (Tag)

{% highlight html %}
<sbux-input id="sbIdx" name="sbTagNm" uitype="text"></sbux-input>
{% endhighlight %}

## Preview

<sbux-input id="sbIdx" name="sbTagNm" uitype="text"></sbux-input>
---
## Example (Script)

{% highlight html %}
<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text'
        });
    }); 
</script>
{% endhighlight %}

## Preview 

<div id="sbArea"></div>
<script>
    $(document).ready(function(){
        $('#sbArea').sbInput({
            name : 'sbScriptNm',
            uitype : 'text'
        });
    }); 
</script>


