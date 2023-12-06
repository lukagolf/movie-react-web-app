import MyNav from "../../../nav-components/nav";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutThunk, deleteUserThunk } from "../../services/auth-thunks";
import { useNavigate } from "react-router";
import ProfileInfo from "../profileInfo";
import ProfileLists from "./profileLists";
import RedTextBtn from "../../../ui-styling/buttons/text/redTextBtn";
import ConfirmDelete from "../../../util/yesNoPopup";

function CurrentUserProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [showDeletePrompt, setDeletePrompt] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const toggleDeletePrompt = () => {
    setDeletePrompt(!showDeletePrompt);
  }

  const handleDeleteAccount = () => {
    dispatch(logoutThunk())
    dispatch(deleteUserThunk(currentUser.username))
    navigate('/home')
  }

  return (
    <>
      {
        showDeletePrompt &&
        <ConfirmDelete visible={showDeletePrompt}
                       text="Delete your account? This action cannot be undone."
                       toggleVisible={toggleDeletePrompt}
                       yesFn={handleDeleteAccount}/>
      }
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
      <div className="d-flex flex-row justify-content-center">
          <RedTextBtn text="Delete Profile" fn={toggleDeletePrompt}/>
      </div>
    </>
  );
}

export default CurrentUserProfile;