import React from "react";
import Header from "../header";
import Main from "../main";

function App() {
    return (
        <>
            <Header />
            <main className='wrapper'>
                <Main />
            </main>
        </>
    );
}

export default App;