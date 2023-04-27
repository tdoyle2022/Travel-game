import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/countries/${search}`);
      setSearch('');
    }
  };
    return (
        <>
    <header>
        <h2>Travel Quiz</h2>
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="/home"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active" style={{ marginRight: '1rem' }}>
                <Link to={'/home'}>Home</Link>
              </li>
              <li class="nav-item active" style={{ marginRight: '1rem' }}>
                <Link to={'/login'}>Login</Link>
              </li>
              <li class="nav-item active" style={{ marginRight: '1rem' }}>
                <Link to={'/countrieslist'}>Countries</Link>
              </li>
              <li class="nav-item active" style={{ marginRight: '1rem' }}>
                <Link to={'/capitalslist'}>Capitals</Link>
              </li>
              <li class="nav-item active" style={{ marginRight: '1rem' }}>
                <Link to={'/scorelist'}>Scores</Link>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" href="#"></a>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
              <div className="d-flex">
                <input
                  className="form-control mr-sm-2 search"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  id="search"
                  name="q"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </nav>
    </header>
    </>
    )
}