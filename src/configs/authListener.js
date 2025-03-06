import { firebaseAuth } from "./firebase"; // Firebase authentication instance import
import { onAuthStateChanged } from "firebase/auth"; // Firebase listener for authentication state changes
import { setUid, clearUser } from "../redux/userSlice"; // Redux actions for setting and clearing user data
import { fetchUserData } from "../redux/userSlice"; // Redux action to fetch user details from database

/**
 * Auth listener to track authentication state changes.
 *
 * - If a user is logged in, their UID is stored in Redux, and their full user details
 *   are fetched from Firestore or Realtime Database.
 * - If the user logs out, their data is cleared from Redux.
 *
 * @param {object} store - Redux store instance
 */
const authListener = (store) => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      // Store the user's UID in Redux state
      store.dispatch(setUid(user.uid));

      // Fetch additional user details from the database
      store.dispatch(fetchUserData(user.uid));
      localStorage.setItem("login", true);
    } else {
      // Clear user data from Redux when logged out
      store.dispatch(clearUser());
      localStorage.setItem("login", false);
    }
  });
};

export default authListener;
