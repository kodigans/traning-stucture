// const mediator = (function(){
//     const channels = {};
//
//     return {
//         publish(channel, ...args) {
//             if(!channels[channel]){
//                 return;
//             }
//             const subscriptions = channels[channel];
//
//             subscriptions.forEach(func => {
//                 func.callback.apply(func.context, args);
//             });
//             //return this;
//         },
//         subscribe(channel, func, context) {
//             if(!channels[channel]) {
//                 channels[channel] = [];
//             }
//             channels[channel].push({callback: func, context: context});
//             //return this;
//         },
//     };
// })();

class Mediator {
  constructor() {
    if (!Mediator.instance) {
      Mediator.instance = this;
      this.channels = {};
    }

    return Mediator.instance;
  }

  publish(channel, ...args) {
    if (!this.channels[channel]) {
      return;
    }
    const subscriptions = this.channels[channel];

    subscriptions.forEach(func => {
      func.callback.apply(func.context, args);
    });
    //return this;
  }
  subscribe(channel, func, context) {
    if (!this.channels[channel]) {
      this.channels[channel] = [];
    }
    this.channels[channel].push({ callback: func, context: context });
    //return this;
  }
}

const mediator = new Mediator();
Object.freeze(mediator);

export default mediator;
//export default Mediator;
