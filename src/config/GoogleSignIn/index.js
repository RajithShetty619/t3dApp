import { Platform } from 'react-native';

const CLIENT_ID = Platform.OS === "ios"
    ? "422452307527-am2mficgrt1dgk7t8sbmq029m2a2cnv0.apps.googleusercontent.com"
    : "422452307527-994mpjak4he06h37ovqfaluvr87kcend.apps.googleusercontent.com";

export { CLIENT_ID };