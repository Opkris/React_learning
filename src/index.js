import React from "react"
import ReactDOM from "react-dom"
import App from "../src/APP/App"

//import MyInfo from "./JS/MyInfo";
/*
    render() Render a React element into the DOM in the supplied container and return a reference to the
    component (or returns null for stateless components). ... any existing DOM elements inside are replaced
    when first called. Later calls use React's DOM diffing algorithm for efficient updates.
 */

// ReactDOM.render("What i want to render", "Where do i want to render it") // render takes in 2 parameters.
// ReactDOM.render("What i want to render", document.getElementById("root"))
/**ReactDOM.render(<h1>Hello World from index.js</h1>, document.getElementById("root"));**/
/*
    if i want to add multiple parameters in the render like a <h1> with a paragraph <p>, i need to wrap it in some
    thing that it looks like one parameter
*/

ReactDOM.render(<App/>,document.getElementById("root"));






/*
function MyApp(){

    // we dont need to wrap the return in () but its good practice
    return (
        <ul>
            <li>Boat</li>
            <li>Bike</li>
            <li>Car</li>
        </ul>)
}

ReactDOM.render(
    <MyApp/>
    ,
    document.getElementById("root"));
*/

/*
    here we need to import the function from another file. you can se how to do it above
ReactDOM.render(<MyInfo/>, document.getElementById("root"));
*/





/*
    If you want your app to work offline and load faster, you can change
    unregister() to register() below. Note this comes with some pitfalls.
    Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.register();
 */
