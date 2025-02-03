package com.emit_data

import android.os.Handler
import android.os.Looper
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule

class NativeEventEmitterModule (reactContext :ReactApplicationContext) : ReactContextBaseJavaModule(reactContext){
    override fun getName(): String {
        return "NativeEventEmitterData"
    }
    private fun sendEvent(eventName: String, data: String) {
        reactApplicationContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, data)
    }

    @ReactMethod
    fun startEmittingData() {
        Handler(Looper.getMainLooper()).postDelayed({
            sendEvent("dataFromNativeAndroid", "Clover Infotech !")
        }, 3000)
    }
//    fun getStaticMessage(promise: Promise) {
//        val message = "Hello Pragati  From Clover Infotech"
//        promise.resolve(message)
//    }


}