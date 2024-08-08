import "./App.css";
import dog from "C:/Users/hello/Downloads/WEB DEV/REACT/myperro/my-perroo/src/dogg1.png";
import perro from "C:/Users/hello/Downloads/WEB DEV/REACT/myperro/my-perroo/src/perr1.png";

function HomePage() {
  return (
    <>
      <div className="box1 d-flex">
        <div className="dogimage">
          <img src={dog} alt="dogimage" />
        </div>
        <div className="Headingg">
          <p>
            <h1>Hey this is</h1>
            <span>
              <h1>Perro</h1>
            </span>
          </p>
        </div>
      </div>
      <div className="box2">
        <nav class="navbar navbar-expand-lg inner2 ">
          <div class="container-fluid inner">
            <form className="d-flex" role="search">
              <input
                className="form-control me-1 mainsearch"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDarkDropdown"
              aria-controls="navbarNavDarkDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <button
                    class="btn btn-dark dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src={perro} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">MY PERRO</h5>
            <p class="card-text">
              <span class="material-symbols-outlined">home</span>
              <span className="spaan">Home</span>
              <span class="material-symbols-outlined">location_on</span>
              <span>3Km</span>
            </p>
            <div className="bt">
              <button type="button" class="btn btn-primary btn-sm">
                something
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                something
              </button>
            </div>
          </div>
          <div class="card-footer">
            <form className="d-flex" role="search">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <span class="material-symbols-outlined">add_circle</span>
            </form>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={perro} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">MY PERRO</h5>
            <p class="card-text">
              <span class="material-symbols-outlined">home</span>
              <span className="spaan">Home</span>
              <span class="material-symbols-outlined">location_on</span>
              <span>3Km</span>
            </p>
            <div className="bt">
              <button type="button" class="btn btn-primary btn-sm">
                something
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                something
              </button>
            </div>
          </div>
          <div class="card-footer">
            <form className="d-flex" role="search">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <span class="material-symbols-outlined">add_circle</span>
            </form>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={perro} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">MY PERRO</h5>
            <p class="card-text">
              <span class="material-symbols-outlined">home</span>
              <span className="spaan">Home</span>
              <span class="material-symbols-outlined">location_on</span>
              <span>3Km</span>
            </p>
            <div className="bt">
              <button type="button" class="btn btn-primary btn-sm">
                something
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                something
              </button>
            </div>
          </div>
          <div class="card-footer">
            <form className="d-flex" role="search">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <span class="material-symbols-outlined">add_circle</span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
