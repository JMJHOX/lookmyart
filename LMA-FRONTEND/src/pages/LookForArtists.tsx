import Navbar from "../components/Navbar/NavBarComponent";
import { LookPaginator } from "../components/Paginators/LookPaginator";

const LookForArtistsPage = () => {
    return (
        <div className="w-full h-full bg-[#FFFFFF] ">
            <Navbar />
            <div className="flex flex-col items-center md:items-stretch md:px-[150px]  bg-[#FFFFFF] ">
                <LookPaginator />
            </div>
        </div>
    );
};
export default LookForArtistsPage;