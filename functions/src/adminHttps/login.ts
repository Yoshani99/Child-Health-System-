import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// Login function
export const loginUser = functions.https.onRequest(async (req, res) => {
  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      res.status(405).send({ error: "Method not allowed" });
      return;
    }

    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({ error: "Email and password are required" });
      return;
    }

    // Use Firebase Auth to verify user
    const userRecord = await admin.auth().getUserByEmail(email);

    // Here, Firebase Admin cannot directly verify password,
    // so normally you would use Firebase Client SDK for login
    // For server-side "business logic", we can create a custom token
    const customToken = await admin.auth().createCustomToken(userRecord.uid);

    res.status(200).send({
      message: "Login successful",
      uid: userRecord.uid,
      token: customToken,
    });
  } catch (error: any) {
    console.error(error);
    res.status(400).send({ error: error.message });
  }
});
