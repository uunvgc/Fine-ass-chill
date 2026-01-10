import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const onUserCreate = functions.auth.user().onCreate(async (user) => {
  try {
    await admin.firestore().collection("users").doc(user.uid).set({
      email: user.email,
      plan: "free",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log(`User profile created for ${user.email}`);
  } catch (error) {
    console.error("Error creating user profile:", error);
  }
});
