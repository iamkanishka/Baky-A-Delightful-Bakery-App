import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "@nativescript/core";
import { GoogleSignin, User } from "@nativescript/google-signin";
import { LoginManager, AccessToken } from "@nativescript/facebook";
import { isAndroid } from "@nativescript/core";
import { Application } from "@nativescript/core";
import { AuthService } from "./../service/auth/auth.service";
import { RouterExtensions } from "@nativescript/angular";

declare var com: any;

@Component({
  selector: "app-sign-in",

  templateUrl: "./sign-in.component.html",
  styleUrl: "./sign-in.component.scss",
})
export class SignInComponent implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";
  agreeTerms: boolean = false;
  passwordHidden: boolean = true;
  constructor(
    private _page: Page,
    private router: RouterExtensions,
    private authService: AuthService 
  ) {
    this._page.actionBarHidden = true;
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }

  onSignUp() {
    console.log("Signing up with:", this.name, this.email, this.password);
    // Handle sign-up logic
  }

  onSignIn() {
    console.log("routing",);

    this.router.navigate(["/tabs/home/default"]);
  }

  onAppleSignUp() {
    console.log("Apple Sign-Up clicked");
  }

  async onGoogleSignUp() {
    console.log("Google Sign-Up clicked");
    try {
      await GoogleSignin.configure({ scopes: ["email"] });
      const user = await GoogleSignin.signIn();
      console.log("Signing in with:", user);

      const currentUser: User | null = GoogleSignin.getCurrentUser();
      console.log("currentIUser", currentUser);
      if (currentUser) {
        this.authService.getGoogleSignInUserDetailsAPI(currentUser["_accessToken"]).subscribe((res)=>{
          console.log("Google User Details",res);
        });
      } else {
        console.log("No current user found");
      }
    } catch (e) {}
  }

  async onFacebookSignUp() {
    console.log("Facebook Sign-Up clicked");

    LoginManager.init();

    try {
      const result = await LoginManager.logInWithPermissions([
        "public_profile",
      ]); // LoginResult
      console.log("Facebook Signing result", result);

      const accessToken = AccessToken.currentAccessToken();
      console.log("Facebook Signing in with:", accessToken);
    } catch (e) {
      console.log("Error", e);
    }
  }

  onTerms() {
    console.log("Terms & Conditions clicked");
    // Navigate to terms page
  }

  signout() {
    console.log("Signing out");

    GoogleSignin.signOut();
    LoginManager.logout();
  }

  ngOnInit(): void {
    if (isAndroid) {
      this.initFacebookSDK();
    }
  }

  private initFacebookSDK(): void {
    if (Application.android && Application.android.context) {
      try {
        // Manually set the Facebook App ID and Client Token
        com.facebook.FacebookSdk.setApplicationId("1039683990152259");
        com.facebook.FacebookSdk.setClientToken(
          "c1b8f72d59ed536608e2d1629d3d104b"
        );
        com.facebook.FacebookSdk.sdkInitialize(Application.android.context);
        com.facebook.appevents.AppEventsLogger.activateApp(
          Application.android.context
        );

        console.log("✅ Facebook SDK initialized successfully!");
        console.log(
          "📌 Facebook App ID:",
          com.facebook.FacebookSdk.getApplicationId()
        );
        console.log(
          "📌 Facebook Client Token:",
          com.facebook.FacebookSdk.getClientToken()
        );
      } catch (error) {
        console.error("❌ Facebook SDK Initialization Error:", error);
      }
    }
  }
}
