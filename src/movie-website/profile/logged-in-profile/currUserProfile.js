import MyNav from "../../../nav-components/nav";
import ProfileInfo from "../profileInfo";
import ProfileLists from "../profile-lists/profileLists";
import { useSelector } from "react-redux";
import CurrentProfileInfo from "./profileInfo";
import CurrentUserProfileLists from "./profileLists";

function CurrentUserProfile() {
    const { currentUser } = useSelector((state) => state.user);
    console.log("CURRENT: ", currentUser);
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
          <CurrentProfileInfo/>
          <CurrentUserProfileLists/>
           </>

    )
}

export default CurrentUserProfile;