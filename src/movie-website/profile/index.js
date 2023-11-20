import MyNav from "../../nav-components/nav";
import ProfileInfo from "./profileInfo";
import ProfileLists from "./profile-lists/profileLists";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser) {
    console.log("CURRENT USER IS " + JSON.stringify(currentUser))
  } else {
    console.log("No currentUser")
  }
  return (
    <>
      {currentUser ? (
        <MyNav
          options={{
            homePage: false,
            search: true,
            signIn: false,
            profile: true,
            signOut: true,
          }}
        />
      ) : (
        <MyNav />
      )}
      <ProfileInfo />
      {currentUser && <ProfileLists key={currentUser.roles ? currentUser.roles.join() : ''} />}

    </>
  );
}

export default Profile;
