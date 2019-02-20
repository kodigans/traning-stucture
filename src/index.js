import './style/main.less';

const range = document.getElementById('range');
const text = document.getElementById('text');
const range1 = document.getElementById('range1');
const text1 = document.getElementById('text1');
const result = document.getElementById('result');

const mediator = (function(){
    const channels = {}; 
  
    return {            
      publish(channel, ...args) {
      if(!channels[channel]){
        return;
      }            
      const subscripions = channels[channel];

      subscripions.forEach(func => {
          func.callback.apply(func.context, args);
      });
      return this;
    },
      subscribe(channel, func, context) {
        if(!channels[channel]) {
          channels[channel] = [];
        }
        channels[channel].push({callback: func, context: context});
  
        return this;
      },
      showChannel() {
          console.log(channels);
      }
    };
  })();


mediator.subscribe('relationSize', changeValue);
mediator.subscribe('relationWidth', changeValue);
mediator.subscribe('countSum', countSum);

text.addEventListener('input', () => {    
    mediator.publish('relationSize', range, text); 
    mediator.publish('countSum', document.querySelectorAll('input[type="text"]')); 
})

range.addEventListener('input', () => {    
    mediator.publish('relationSize', text, range);   
})

text1.addEventListener('input', () => {    
    mediator.publish('relationSize', range1, text1); 
    mediator.publish('countSum', document.querySelectorAll('input[type="text"]')); 
})

range1.addEventListener('input', () => {    
    mediator.publish('relationSize', text1, range1);   
})


function changeValue(changeElement, currentElement) { 
    changeElement.value = currentElement.value;    
}

function countSum(multipliers) { 
    result.value = '';   
    let currentValue = 0; 
    multipliers.forEach(elem => {currentValue += +elem.value})
    result.value = currentValue // add parametr function such as sumElementsValue
    
}