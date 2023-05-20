const element = (
  // Write your code here.
  <div className="main-container">
    <h1 class="heading">Congratulations</h1>

    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-img"
      />
      <h1 className="name">Vamshi Krishna Gadarla</h1>
      <p className="institute">Vaageswari college of Engineering Karimnagar</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="profile-img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
