import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// Signup function
export const signupUser = functions.https.onRequest(async (req, res) => {
  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      res.status(405).send({ error: "Method not allowed" });
      return;
    }

    const { email, password, displayName } = req.body;

    if (!email || !password) {
      res.status(400).send({ error: "Email and password are required" });
      return;
    }

    // Create user in Firebase Auth
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: displayName || "",
    });

    // Generate a custom token for immediate login
    const customToken = await admin.auth().createCustomToken(userRecord.uid);

    res.status(201).send({
      message: "Signup successful",
      uid: userRecord.uid,
      token: customToken,
    });
  } catch (error: any) {
    console.error(error);
    res.status(400).send({ error: error.message });
  }
});
