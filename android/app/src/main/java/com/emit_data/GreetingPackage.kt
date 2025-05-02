package com.emit_data

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

class GreetingPackage : ReactPackage{

    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return listOf(GreetingModule(reactContext))
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*,*>> {
        return emptyList()
    }
}