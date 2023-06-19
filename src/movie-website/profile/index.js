import MyNav from "../../nav-components/nav";
import ProfileInfo from "./profileInfo";
import ProfileLists from "./profile-lists/profileLists";
import { useSelector } from "react-redux";
import BackBtn from "../../ui-styling/buttons/icons/backBtn";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      {currentUser ? (
        <MyNav
          options={{
            homePage: false,
            search: true,
            signIn: false,
            profile: false,
            signOut: true,
          }}
        />
      ) : (
        <MyNav />
      )}
      <ProfileInfo />
      <ProfileLists />
      
    </>
  );
}

export default Profile;
