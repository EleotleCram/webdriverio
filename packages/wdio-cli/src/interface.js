import EventEmitter from 'events'

export default class WDIOCLInterface extends EventEmitter {
  /**
   * event handler that is triggered when runner sends up events
   */
  onMessage(event) {
    if(event.name === "spec") {
        console.log(event.content);
    }
  }

  sigintTrigger() {}
  reset() {}
  finalise() {}
}
