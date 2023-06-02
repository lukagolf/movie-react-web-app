import MyNav from "../../common-components/nav";
import ProfileInfo from "./profileInfo";
import ProfileLists from "./profile-lists/profileLists";

function Profile() {
  return (
    <>
      <MyNav />
      <ProfileInfo/>
      <ProfileLists/>
    </>
  );
}

export default Profile;
