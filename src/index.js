import ReactDOM from "react-dom";
import App from "./App";

window.render_browse = (
  elementId,
  history,
  host,
  { restaurantsPath, basename }
) => {
  ReactDOM.render(
    <App
      history={history}
      restaurantsPath={restaurantsPath}
      basename={basename}
      key="browse-app"
    />,
    document.getElementById(elementId)
  );
};

window.unmount_browse = (elementId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(elementId));
};

if (document.getElementById("browse-container") === null) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
