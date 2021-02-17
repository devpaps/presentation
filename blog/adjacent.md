---
title: 'insertAdjacentHTML()'
date: 11 Oktober 2020
dateTime: 2020-10-11
description: 'Ett snabbt och enkelt sätt för webbläsaren att analysera HTML'
image: '../images/adjacent-opt.jpg'
---

<!-- markdownlint-disable MD033 -->

![sdff](../images/adjacent-opt.jpg)

## Här får du ett snabbt tips av mig som jag använder väldigt ofta

När jag jobbar med Javascript och ska exempelvis göra något som ska skrivas ut i HTML så använder jag
för det första <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" class="link-border">Template literals</a>.

```javascript
const showtext = `
    <div id="list">
   <h1 class="title">Mina besökta länder</h1>
     ${x}
   <div class="visited">
    <a href="#" id="visitedButton">Städer jag besökt</a>
   </div>
 </div>
 console.log('hej');
`;

const app = document.getElementById('app');
div.insertAdjacentHTML('afterbegin', showText);
```

Nu betyder det här att
