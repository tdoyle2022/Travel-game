import {Link} from 'react-router-dom'

export const NavBar = ()=> {
    return (
        <>
    <header>
        <h2>Travel Quiz</h2>
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="/home">Quiz</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to={'/home'}>Home</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">North America</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="">South America</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="">Africa</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="">Europe</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="">Asia</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="">Australia</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Scores
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Take a Quiz</a>
                  <a class="dropdown-item" href="#">Top Scores</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Contact Us</a>
                </div>
              </li>
              <li class="nav-item active">
                <Link to={'/login'}>Login</Link>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form action="" method="GET" class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2 search" type="text" placeholder="Search" aria-label="Search" id="search" name='q'/>
            </form>
            <span><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></span>
          </div>
        </nav>
    </header>
    </>
    )
}