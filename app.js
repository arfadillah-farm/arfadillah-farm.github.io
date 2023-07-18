(() => {
  const Link = ReactRouterDOM.Link;
  const Route = ReactRouterDOM.Route;

  const app = {
    view: () => (
      <ReactRouterDOM.HashRouter>
        <Route path="/" exact component={main.view} />
      </ReactRouterDOM.HashRouter>
    ),
  };
  document.title = "Arfadillah Farm";
  ReactDOM.render(<app.view />, document.getElementById("root"));

  var loadJS = function (url, location) {
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element

    var scriptTag = document.createElement("script");
    scriptTag.src = url;

    // scriptTag.onload = implementationCode;
    // scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
  };
  loadJS("theme/html5up-phantom/assets/js/util.js", document.body);
  loadJS("theme/html5up-phantom/assets/js/main.js", document.body);
})();
