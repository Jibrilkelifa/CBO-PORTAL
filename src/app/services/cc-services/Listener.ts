// import * as SockJS from 'sockjs-client';
// import * as Stomp from 'webstomp-client';
// import { SanctionTableComponent } from '../../modules/cc/sanction-table/sanction-table.component';



// export class Listener {
//   private stompClient: Stomp.Client;

//   // define constructor
//   constructor(private sanctionTableComponent: SanctionTableComponent) {
//     const socket = new SockJS('/my-websocket-endpoint');
//     this.stompClient = Stomp.over(socket);

//     this.stompClient.connect({}, (frame) => {
//       this.stompClient.subscribe('/topic/data', (message) => {
//         const receivedData = JSON.parse(message.body);
//          console.log(receivedData);
//          this.sanctionTableComponent.Action(receivedData);
//       });
//     });
//   }


// }
