import MyNav from "../../../nav-components/nav";
import { useSelector } from "react-redux";
import ProfileInfo from "../profileInfo";
import ProfileLists from "../profile-lists/profileLists";

function CurrentUserProfile() {
    const { currentUser } = useSelector((state) => state.user);
    return (
      <>
        <MyNav
          options={{
            homePage: false,
            search: true,
            signIn: false,
            profile: true,
            signOut: true,
          }}
        />
        <ProfileInfo isCurUser={true}/>
        <ProfileLists isCurUser={true} />
      </>
    );
}

export default CurrentUserProfile;