export const pubsub = {
  events: {},
  subscribe: function(eventName, func) {
    console.log(`PUBSUB: someone just subscribed to know about ${eventName}`);
    //add an event with a name as new or to existing list
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(func);
  },
  unsubscribe: function(eventName, func) {
    console.log(`PUBSUB: someone just Unsubscribed from ${eventName}`);
    //remove an event function by name
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(f => f !== func);
    }
  },
  publish: function(eventName, data) {
    console.log(`PUBSUB: Making a broadcast about ${eventName} with ${data}`);
    //emit|publish|announce the event to anyone who is subscribed
    if (this.events[eventName]) {
      this.events[eventName].forEach(f => {
        f(data);
      });
    }
  }
};
