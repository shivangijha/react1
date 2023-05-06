// const heading = React.createElement("h1",{}, "React is on!!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent = React.createElement(
    "div", 
    {id:"parent"},
      [React.createElement("div",{
        id:"child1"}, 
        [React.createElement("h1",{},"im first h1 tag"),
         React.createElement("h2",{},"im first h2 tag")]),
         React.createElement("div",{
            id:"child2"}, 
            [React.createElement("h1",{},"im first h1 tag"),
             React.createElement("h2",{},"im first h2 tag")])]
         

    
);
const headershit = React.createElement(
    "div", 
    {id:"parent"},
      [React.createElement("div",{
        id:"child1"}, 
        [React.createElement("h1",{},"me so crazy first h1 tag"),
         React.createElement("h2",{},"im first h2 tag")]),
         React.createElement("div",{
            id:"child2"}, 
            [React.createElement("h1",{},"im first h1 tag"),
             React.createElement("h2",{},"im first h2 tag")])]
         

    
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const header = ReactDOM.createRoot(document.getElementById("header"));
 root.render(parent);
 header.render(headershit);