import MyNav from "../../../nav-components/nav";
import { useSelector } from "react-redux";
import CurrentProfileInfo from "./profileInfo";
import CurrentUserProfileLists from "./profileLists";

function CurrentUserProfile() {
  const { currentUser } = useSelector((state) => state.user);

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
      <CurrentProfileInfo />
      {currentUser && <CurrentUserProfileLists key={currentUser.roles ? currentUser.roles.join() : ''} />}
    </>

  )
}

export default CurrentUserProfile;