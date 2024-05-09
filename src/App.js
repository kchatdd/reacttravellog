//this is where we will import all of our components that will build our app
//1. build the first component - in our case it is the header

//2. import the Header.js file
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

//3. compile all of the imported sections into the return of App
const App =()=> {

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )

}

//4. export the App so it can be added to index.js
export default App