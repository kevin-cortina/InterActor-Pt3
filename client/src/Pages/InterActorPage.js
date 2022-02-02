import React from "react";
import SearchFilter from "../component/SearchFilter";

function InterActorPage({ currentPage, handlePageChange }){
   

    return(
        <main>
            <SearchFilter currentPage={currentPage} handlePageChange={handlePageChange} />
        </main>
    )
}
export default InterActorPage