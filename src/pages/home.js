import SearchBtn from "../ui-styling/buttons/icons/searchBtn";
import ProfileBtn from "../ui-styling/buttons/icons/profileBtn";
import EditBtn2 from "../ui-styling/buttons/icons/editBtn2";
import EditBtn from "../ui-styling/buttons/icons/editBtn";
import DeleteBtn from "../ui-styling/buttons/icons/deleteBtn";
import DeleteBtn2 from "../ui-styling/buttons/icons/deleteBtn2";
import CheckmarkBtn from "../ui-styling/buttons/icons/checkmarkBtn";
import BackBtn from "../ui-styling/buttons/icons/backBtn";
import BookmarkBtn from "../ui-styling/buttons/icons/bookmarkBtn";
import NextBtn from "../ui-styling/buttons/icons/nextBtn";
import BackBar from "../ui-styling/common/backBar";
import NavBar from "../ui-styling/common/navBar";

function Home() {
  return (
    // feel free to delete these icons - I just wanted to try displaying them
    // NavBar takes in options = { homePage: false, search: true, signIn: true, profile: false, signOut: false}
    <>
      <NavBar />
      <NavBar
        options={{
          homePage: false,
          search: true,
          signIn: false,
          profile: true,
          signOut: false,
        }}
      />
      <SearchBtn />
      <ProfileBtn />
      <EditBtn />
      <EditBtn2 />
      <DeleteBtn />
      <DeleteBtn2 />
      <CheckmarkBtn />
      <BackBtn />
      <BookmarkBtn />
      <NextBtn />

      <BackBar />
    </>
  );
}

export default Home;
