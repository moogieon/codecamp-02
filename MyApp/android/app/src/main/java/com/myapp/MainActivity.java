package com.myapp;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
SplashScreen.show(this, R.style.SplashScreenTheme);    SplashScreen.show(this);
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
SplashScreen.show(this, R.style.SplashScreenTheme);  protected String getMainComponentName() {
    return "MyApp";
  }
}
