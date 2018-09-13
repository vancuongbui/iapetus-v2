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
    