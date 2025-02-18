import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firebase } from '@nativescript/firebase';

@Component({
  selector: 'app-enable-notifications',
  
  templateUrl: './enable-notifications.component.html',
  styleUrl: './enable-notifications.component.scss'
})
export class EnableNotificationsComponent {
//   constructor(private router: Router) {}

//   ngOnInit() {}

//   async requestPushNotificationPermission() {
//     try {
//       const messaging = firebase().messaging(); // Get Firebase Messaging instance
      
//       const isPermissionGranted = await messaging.hasPermission();
//       if (!isPermissionGranted) {
//         const granted = await messaging.requestPermission();
//         if (granted) {
//           console.log("Push notification permission granted!");
//           this.subscribeToNotifications();
//         } else {
//           console.log("Push notification permission denied.");
//         }
//       } else {
//         this.subscribeToNotifications();
//       }
//     } catch (error) {
//       console.error("Error requesting push notification permission:", error);
//     }
//   }

//   subscribeToNotifications() {
//     const messaging = firebase().messaging();
    
//     messaging.subscribeToTopic("allUsers").then(() => {
//       console.log("Subscribed to push notifications!");
//     }).catch(error => {
//       console.error("Subscription failed:", error);
//     });

//     messaging.getToken().then(token => {
//       console.log("FCM Token:", token);
//       // Send this token to your backend for push notification targeting
//     }).catch(error => {
//       console.error("Error fetching FCM token:", error);
//     });
//   }

//   maybeLater() {
//     this.router.navigate(['/home']);
//   }
  }
