import React from "react";
import Header from "../header";
import Main from "../main";
import MainVar from "../main2";

function App() {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <Main type='milk'/>
                <MainVar type='milk'/>
            </main>
        </>
    );
}

export default App;