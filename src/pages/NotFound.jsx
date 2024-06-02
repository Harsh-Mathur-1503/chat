import "../components/styles/NotFound.css" // Import the CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="glassy-paper">
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-message">
          Oops! The page you are looking for could not be found.
        </p>
        <a className="go-home-button" href="/">Go Home</a>
      </div>
    </div>
  );
};

export default NotFound;
