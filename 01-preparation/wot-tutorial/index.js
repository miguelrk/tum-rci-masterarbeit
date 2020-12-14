// // A sample WoT producer ("server" mode) script of a CoffeMachine Thing

// // global W3C WoT Scripting API definitions
// import * as WoT from "wot-typescript-definitions";
// // node-wot implementation of W3C WoT Servient
import { Servient } from "@node-wot/core";
// // protocols used
import { HttpClientFactory } from "@node-wot/binding-http";
// // import { CoapServer } from "@node-wot/binding-coap";
// // import { CoapClientFactory } from "@node-wot/binding-coap";

// import { fetch } from "node-fetch";

const td = import("./td.json");

console.log(Servient, Helpers, td);

// let servient = WoT.Servient();
// servient.addClientFactory(new HttpClientFactory(null));

// console.log(servient);

// const CoffeeMachineAddress = "http://localhost:8080/CoffeeMachine";

// servient.produce(td).then((thing) => {
//   console.log(thing);
//   //   // Initialize the property values
//   //   thing.writeProperty("maintenanceNeeded", false);
//   //   // Observe the value of maintenanceNeeded property
//   //   thing.observeProperty("maintenanceNeeded", (data) => {
//   //     // Notify a "maintainer" when the value has changed
//   //     // (the notify function here simply logs a message to the console)
//   //     notify(
//   //       "admin@coffeeMachine.com",
//   //       `maintenanceNeeded property has changed, new value is: ${data}`
//   //     );
//   //   });
// });

// thing.expose();
