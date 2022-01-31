import React, { useState } from "react";
// import SearchBar from "../component/SearchBar";
import ResultCard from "../component/ResultCard";
import SearchFilter from "../component/SearchFilter";
import { AppProvider } from '../assets/script/javascript';

function InterActorPage({ currentPage }){
   

    return(
        <main>
        {/* <SearchBar></SearchBar>   */}
        <SearchFilter currentPage={currentPage} />
        {/* <ResultCard/> */}
        </main>
    )
}
export default InterActorPage