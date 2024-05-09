//JSX files will start with a capital letter. This signals to the program that this file should be read a certain in react

const Header =()=> {

    //if we needed to add JS, it must be before the return

    return(
        <header className="header" id="header">
            <div className="container">
                <h1 className="display-1 text-capitalize">kChat in these streets</h1>
                <h2 className="fst-italic">A few blocks I've circled...</h2>
            </div>
        </header>
    )

}

export default Header
//import this to the App.js file