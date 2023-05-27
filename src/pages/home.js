import SearchBtn from "../ui-styling/buttons/searchBtn";
import ProfileBtn from "../ui-styling/buttons/profileBtn";
import EditBtn from "../ui-styling/buttons/editBtn";
import EditBtn2 from "../ui-styling/buttons/editBtn2";
import DeleteBtn from "../ui-styling/buttons/deleteBtn";
import DeleteBtn2 from "../ui-styling/buttons/deleteBtn2";
import CheckmarkBtn from "../ui-styling/buttons/checkmarkBtn";
import BackBtn from "../ui-styling/buttons/backBtn";
import BookmarkBtn from "../ui-styling/buttons/bookmarkBtn";
import NextBtn from "../ui-styling/buttons/nextBtn";

function Home() {
    return (
        // feel free to delete these icons - I just wanted to try displaying them
        <>
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
        </>
    );
}

export default Home;
