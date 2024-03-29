import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Linking
} from "react-native";
import { Button, CheckBox,Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import ErrorMessage from "../components/ErrorMessage";
import fire from "../../fire";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label("Name")
    .required()
    .min(2, "Must have at least 2 characters"),
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(6, "Password should be at least 6 characters "),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must matched Password")
    .required("Confirm Password is required"),
  check: Yup.boolean().oneOf([true], "Please check the agreement")
});

 function Signup({ navigation }) {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState("ios-eye");
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState("ios-eye");
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);

  function goToLogin() { 
    navigation.navigate('Login')
  }

  function handlePasswordVisibility() {
    if (passwordIcon === "ios-eye") {
      setPasswordIcon("ios-eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (passwordIcon === "ios-eye-off") {
      setPasswordIcon("ios-eye");
      setPasswordVisibility(!passwordVisibility);
    }
  }

  function handleConfirmPasswordVisibility() {
    if (confirmPasswordIcon === "ios-eye") {
      setConfirmPasswordIcon("ios-eye-off");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (confirmPasswordIcon === "ios-eye-off") {
      setConfirmPasswordIcon("ios-eye");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  }

  async function handleOnSignup(values, actions) {
    const { name, email, password } = values;
  try{
   await fire.
    auth()
     .createUserWithEmailAndPassword( email, password)
     .then(async authUser => {
        await fire.database().ref().child('/users/').child(authUser.user.uid)
        .set({
          name,
          email,
        });
    })
    .catch(error => console.log(error))
      navigation.navigate('AppNavigation',{screen:'tabNav',params:{screen:'Personal'}})
    } catch (error) {
      await actions.setFieldError("general");
    } finally {
      await actions.setSubmitting(false);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} enabled behavior="padding">
      <ScrollView>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            check: false
          }}
          onSubmit={async(values, actions) => {
            await handleOnSignup(values, actions);
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isValid,
            touched,
            handleBlur,
            isSubmitting,
            setFieldValue
          }) => (
            <>
              <FormInput
                name="name"
                value={values.name}
                onChangeText={handleChange("name")}
                placeholder="Enter your full name"
                iconName="md-person"
                iconColor="#f9f2f2"
                onBlur={handleBlur("name")}
              />
              <ErrorMessage errorValue={touched.name && errors.name} />
              <FormInput
                name="email"
                value={values.email}
                onChangeText={handleChange("email")}
                placeholder="Enter email"
                autoCapitalize="none"
                iconName="ios-mail"
                iconColor="#f9f2f2"
                onBlur={handleBlur("email")}
              />
              <ErrorMessage errorValue={touched.email && errors.email} />
              <FormInput
                name="password"
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="Enter password"
                iconName="ios-lock"
                iconColor="#f9f2f2"
                onBlur={handleBlur("password")}
                secureTextEntry={passwordVisibility}
                rightIcon={
                  <TouchableOpacity onPress={handlePasswordVisibility}>
                    <Ionicons name={passwordIcon} size={28} color="grey" />
                  </TouchableOpacity>
                }
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <FormInput
                name="password"
                value={values.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                placeholder="Confirm password"
                iconName="ios-lock"
                iconColor="#f9f2f2"
                onBlur={handleBlur("confirmPassword")}
                secureTextEntry={confirmPasswordVisibility}
                rightIcon={
                  <TouchableOpacity onPress={handleConfirmPasswordVisibility}>
                    <Ionicons
                      name={confirmPasswordIcon}
                      size={28}
                      color="grey"
                    />
                  </TouchableOpacity>
                }
              />
              <ErrorMessage
                errorValue={touched.confirmPassword && errors.confirmPassword}
              />
              <CheckBox
                containerStyle={styles.checkBoxContainer}
                checkedIcon="check-box"
                iconType="material"
                textStyle={{color:'#f9f2f2',fontWeight:"200"}}
                uncheckedIcon="check-box-outline-blank"
                title="Agree to terms and conditions"
                checkedTitle="Agreed to terms and conditions"
                checked={values.check}
                onPress={() => setFieldValue("check", !values.check)}
              />
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="outline"
                  onPress={handleSubmit}
                  title="SIGNUP"
                  buttonColor="#039BE5"
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                />
              </View>
              <ErrorMessage errorValue={errors.general} />
            </>
          )}
        </Formik>
        <Button
          title="Have an account? Login"
          onPress={goToLogin}
          titleStyle={{
            color: "#F57C00",
            
            
          }}
          type="clear"
        />
      
        <Text style={{color: "#039BE5",fontStyle:"italic",fontSize:13,alignSelf:"center"}}
         onPress={()=>{Linking.openURL('https://snapinsight.net/Privacypolicy.php')}}>
          Privacypolicy
        </Text>
        <Text style={{color: "#039BE5",fontStyle:"italic",fontSize:13,alignSelf:"center"}}
         onPress={()=>{Linking.openURL('https://snapinsight.net/termsandconditions.php')}}>
         Terms and conditions
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2C35",
    marginTop: 25
  },
  logoContainer: {
    marginBottom: 15,
    alignItems: "center"
  },
  buttonContainer: {
    margin: 25
  },
  checkBoxContainer: {
    backgroundColor: "#2b2c35",
    borderColor: "#f9f2f2",
    borderRadius:30,
    borderWidth:.5,
    
  }
});

export default Signup;
