import { useLazyQuery } from "@apollo/client";
import { GET_ARTISTS } from "../../queries/Artists/GetArtists";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



type Props = {};
function LookPaginator({ }: Props) {
  const [getPagination] = useLazyQuery(GET_ARTISTS);
  const [ArtistsInfo, setArtistsInfo] = useState([{}])
  const [loadingScreen, setLoadingScreen] = useState(false); // setting a flag to know the last list
  const [TotalPages, setTotalPages] = useState(0); // setting a flag to know the last list
  const [failedScreen, setFailedScreen] = useState(false); // setting a flag to know the last list
  const [wasLastList, setWasLastList] = useState(false); // setting a flag to know the last list
  const [currPage, setCurrPage] = useState(1); // storing current page number
  const [prevPage, setPrevPage] = useState(0); // storing prev page number

  useEffect(() => {
    const fetchData = async () => {
      setLoadingScreen(true);
      const response = await getPagination({
        variables: { pageSize: 15, PageNumber: currPage },
      });
      if (response.error) {
        setFailedScreen(true);
        setLoadingScreen(false);
      }

      if (!response.data.usersPermissionsUsers.data.length) {

        //console.log("artist",response.data.usersPermissionsUsers.data)
        setWasLastList(true);
        setLoadingScreen(false);
        return;
      }
      if (response.data.usersPermissionsUsers.data.length) {
        setArtistsInfo(response.data.usersPermissionsUsers.data)
        const totalPages = Math.ceil(response.data.usersPermissionsUsers.meta.pagination.total / 15);
        setTotalPages(totalPages)
        console.log("artist", response.data)

        return;
      }
      console.log(response)
      setPrevPage(currPage);


    };
    if (!wasLastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, wasLastList, prevPage]);



  const cardsData = [
    {
      id: 1,
      name: 'Persona 1',
      biography: 'Biografía de la Persona 1',
      category: 'Categoría 1',
      imageUrl: 'URL de la imagen de la Persona 1',
    },
    // Agrega los datos de las otras cinco personas aquí
  ];

  const Card = ({ person }: any) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
        <Link to={`/explore/artist/${person?.id}`}>
          <div className="bg-white rounded-lg shadow-md">
            <img src={`http://localhost:1338${person?.attributes?.profile_picture?.data?.attributes?.url}`} alt={person?.attributes?.username} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-black text-xl font-semibold mb-2">{person?.attributes?.username}</h2>
              <p className="text-black mb-4">{person?.attributes?.profile_desc}</p>
              <p className="text-black font-semibold">{person?.attributes?.country}</p>
            </div>
          </div>
        </Link>
      </div>
    );

  };
  return (

    <div>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap -mx-4">
          {ArtistsInfo && ArtistsInfo.map((person, index) => (
            <Card key={index} person={person} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className={`text-black px-4 py-2 rounded-l-md ${'bg-blue-500 hover:bg-blue-700 text-white cursor-pointer'}`}
        // disabled={isFirstPage}
        // onClick={handlePrevPage}
        >
          <p className="text-black">Anterior</p>

        </button>
        <span className=" text-black px-4 py-2 bg-gray-300">
          Página {currPage} de {TotalPages}
        </span>
        <button
          className={` px-4 py-2 rounded-r-md ${'bg-blue-500 hover:bg-blue-700 text-white cursor-pointer'}`}
        // disabled={isLastPage}
        // onClick={handleNextPage}
        >
          <p className="text-black">Siguiente</p>
        </button>
      </div>

    </div>


  );
}

export { LookPaginator };
