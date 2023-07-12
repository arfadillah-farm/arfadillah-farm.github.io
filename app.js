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
})();
