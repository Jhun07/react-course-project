var m = "App.js is running.";
console.log("App.js is running.");

var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is confidential.</p>
  </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
