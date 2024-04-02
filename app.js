
//crossorigin->attribute is used when a script on one domain is trying to fetch or interact with resources from another domain,

//crossorigin loads files requiring the CORS(cross origin resource sharing or, say take resources from another domain) method

/*
 <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
 */

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
            React.createElement("h1", {},"I'm h1 tag"),
            React.createElement("h2", {},"I'm h2 tag")
               ]           
),
    React.createElement("div",{id:"child1"},[
        React.createElement("h1", {},"I'm h1 tag"),
        React.createElement("h2", {},"I'm h2 tag")
       ]  
    )         
   ]
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));//create root where we render the element

root.render(parent);



// const heading = React.createElement(
//     "h1",
//     {id:"heading",xyz:"abc"},
//     "HELLO World from React");
// console.log(heading);


//this is a react object,  which has props in which parent:h1,children:hello wrold,and attributes

//const root = ReactDOM.createRoot(document.getElementById("root"));//create root where we render the element

//root.render(heading);
//root.render job is to take heading(react object) and convert it into <h1> tag and put it into into DOM(div)




