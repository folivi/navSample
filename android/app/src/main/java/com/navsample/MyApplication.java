package com.navsample;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.facebook.CallbackManager;

import java.util.List;
import java.util.Arrays;

import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;


public class MyApplication extends NavigationApplication {
  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

   protected static CallbackManager getCallbackManager() {
     return mCallbackManager;
   }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
            new VectorIconsPackage(),
            new ReactNativeI18n(),
            new FBSDKPackage(mCallbackManager)
        );
    }

    @Override
    public void onCreate() {
        super.onCreate();
        // Initialize the SDK before executing any other operations.
        FacebookSdk.sdkInitialize(getApplicationContext());
        // Use AppEventsLogger to log custom events.
        AppEventsLogger.activateApp(this);
    }

}
