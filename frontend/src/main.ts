import {
  platformNativeScript,
  runNativeScriptAngularApp,
} from "@nativescript/angular";

import { AppModule } from "./app/app.module";

import { registerElement } from "@nativescript/angular";
registerElement(
  "GoogleSignInButton",
  () => require("@nativescript/google-signin").GoogleSignInButton
);

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
