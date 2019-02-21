import './style/main.less';
import changeValue from "./scripts/change-form-value";
import countSum from "./scripts/count-sum";
import mediator from "./scripts/mediator";

//const mediator = new Mediator();


const range = document.getElementById('range');
const text = document.getElementById('text');
const range1 = document.getElementById('range1');
const text1 = document.getElementById('text1');

mediator.subscribe('relationSize', changeValue);
mediator.subscribe('relationWidth', changeValue);
mediator.subscribe('countSum', countSum);

text.addEventListener('input', () => {    
    mediator.publish('relationSize', range, text); 
    mediator.publish('countSum', document.querySelectorAll('input[type="text"]')); 
});

range.addEventListener('input', () => {    
    mediator.publish('relationSize', text, range);
    mediator.publish('countSum', document.querySelectorAll('input[type="text"]'));
});

text1.addEventListener('input', () => {    
    mediator.publish('relationSize', range1, text1); 
    mediator.publish('countSum', document.querySelectorAll('input[type="text"]')); 
});

range1.addEventListener('input', () => {    
    mediator.publish('relationSize', text1, range1);
    mediator.publish('countSum', document.querySelectorAll('input[type="text"]'));
});

