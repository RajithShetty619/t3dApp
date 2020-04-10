import { Platform } from 'react-native';

const CLIENT_ID = Platform.OS === "ios"
    ? "194580344610-i08esepm1iv4gpd3d3k8cf48ututv8jv.apps.googleusercontent.com"
    : "422452307527-994mpjak4he06h37ovqfaluvr87kcend.apps.googleusercontent.com";

export { CLIENT_ID };