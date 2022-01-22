import React from "react";
import SearchBar from "../component/SearchBar";

import SearchFilter from "../component/SearchFilter";
import NavBar from "../component/NavBar";
import LoginModal from "../component/LoginModals";



function InterActorPage(){
    return(
        <main> 
        <NavBar/>
        <SearchBar/>
        <SearchFilter/>        
        {/*<LoginModal/>*/}
        </main>
    )
}
export default InterActorPage