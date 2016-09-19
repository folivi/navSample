package com.navsample;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;

import java.util.List;
import java.util.Arrays;

public class MyApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(      
            new VectorIconsPackage(), new ReactNativeI18n()
        );
    }
}
