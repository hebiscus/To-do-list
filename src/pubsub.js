export const pubsub = {
  events: {},
  subscribe: function(eventName, func) {
    //add an event with a name as new or to existing list
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(func);
  },
  unsubscribe: function(eventName, func) {
    //remove an event function by name
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(f => f !== func);
    }
  },
  publish: function(eventName, data) {
    //emit|publish|announce the event to anyone who is subscribed
    if (this.events[eventName]) {
      this.events[eventName].forEach(f => {
        f(data);
      });
    }
  }
};
