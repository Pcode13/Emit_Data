package com.emit_data

import com.example.msgktm.Greeting
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class GreetingModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "GreetingModule"
    }
    @ReactMethod
    fun getGreeting(promise: Promise){
        try {
            val message = Greeting().greet()
            promise.resolve(message)
        }
        catch (e:Exception){
            promise.reject("Error",e)
        }
    }
}