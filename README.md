"IAPETUS Project" 

to run the app:
    - npm start

//Error Objects are not valid as a React child (found: object with keys {$$typeof, type, key, ref, props, _owner, _store}). If you meant to render a collection of children, use an array instead.
    - fix: 
    
1. Handle keyboard
    - import 
        { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
    - using: 
        <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                enabled
            ></KeyboardAvoidingView>
    -

2. Fetch API
    - Using
        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            }),
        });

3. Note for google-clound/storage
    npm install --save @goolge-clound/storage@1.7

4. Goolge Map API.
    - install instruction:
        https://github.com/react-community/react-native-maps/blob/master/docs/installation.md
    - key goolge map API: AIzaSyC2PW2woZE7r-XkEei3I5408KqDTQGjKqc
    - Setting up:
        + Dependency: note, use compile instead of implement
        + in "android/app/build.graddle"    - note: use compile
            compile project(':react-native-maps')
                compile(project(':react-native-maps')){
                exclude group: 'com.google.android.gms', module: 'play-services-base'
                exclude group: 'com.google.android.gms', module: 'play-services-maps'
            }
            compile 'com.google.android.gms:play-services-base:10.0.1'
            compile 'com.google.android.gms:play-services-maps:10.0.1'


        + got to "android/app/src/main/AndroidManifest.xml" and add the meta as 
            <meta-data
                android:name="com.google.android.geo.API_KEY"
                android:value="AIzaSyC2PW2woZE7r-XkEei3I5408KqDTQGjKqc"/>
        + Java MainApplication should have new MapsPackage() like followings
            @Override
            protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                    new VectorIconsPackage(),
                    new MapsPackage()
            );
            }
        + 
            provided "com.facebook.react:react-native:+"
            compile "com.google.android.gms:play-services-base:$googlePlayServicesVersion"
            compile "com.google.android.gms:play-services-maps:$googlePlayServicesVersion"
            compile "com.google.maps.android:android-maps-utils:$androidMapsUtilsVersion"