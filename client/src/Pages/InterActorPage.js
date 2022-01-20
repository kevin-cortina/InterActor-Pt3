import React from "react";
import SearchBar from "../component/SearchBar";
import ResultCard from "../component/ResultCard";
import SearchFilter from "../component/SearchFilter";

function interActorPage(){
    return(
        <main>
        <SearchBar></SearchBar>  
        <SearchFilter></SearchFilter>
        <ResultCard></ResultCard> 
        </main>
    )
}
export default interActorPage