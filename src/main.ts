import {
  platformNativeScript,
  runNativeScriptAngularApp,
} from "@nativescript/angular";

import { AppModule } from "./app/app.module";
 

 

// firebase
//   .init()
//   .then(() => {
//     console.log("🔥 Firebase initialized successfully");
//     runNativeScriptAngularApp({
//       appModuleBootstrap: () =>
//         platformNativeScript().bootstrapModule(AppModule),
//     });
//   })
//   .catch((err) => {
//     console.error("🚨 Firebase init error:", err);
//     // If Firebase fails, still run the app
//     runNativeScriptAngularApp({
//       appModuleBootstrap: () =>
//         platformNativeScript().bootstrapModule(AppModule),
//     });
//   });

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
