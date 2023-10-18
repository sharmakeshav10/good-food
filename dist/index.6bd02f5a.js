const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // console.log(parent.props.id);

//# sourceMappingURL=index.6bd02f5a.js.map
