import MyNav from "../../../nav-components/nav";
import { useSelector } from "react-redux";
import ProfileInfo from "../profileInfo";
import ProfileLists from "../profile-lists/profileLists";

function CurrentUserProfile() {
  const { currentUser } = useSelector((state) => state.user);
  console.log("IN CURRENT USER PROFILE")
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
      {/* <CurrentProfileInfo /> */}
      <ProfileInfo isCurUser={true} />
      {currentUser && (
        <ProfileLists
          isCurUser={true}
          key={currentUser.roles ? currentUser.roles.join() : ""}
        />
      )}
      {/* {currentUser && (
        <CurrentUserProfileLists
          key={currentUser.roles ? currentUser.roles.join() : ""}
        />
      )} */}
    </>
  );
}

export default CurrentUserProfile;