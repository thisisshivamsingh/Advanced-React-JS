import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter,
  MemoryRouter,
  NavLink,
  Navigate,
} from "react-router-dom";

import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";
import PostItem from "./components/postsItem";
import Users from "./components/users";
import Guests from "./components/guests";
import Admins from "./components/admins";

const App = () => {
  const user = false;

  return (
    <BrowserRouter>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">My app</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="posts" className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="users" className="nav-link">
                Users
              </Link>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="posts" element={<Posts />}></Route>
          <Route path="posts/:id" element={<PostItem />}></Route>
          {/* <Route path="profile" element={<Profile />}></Route> */}
          <Route
            path="profile"
            element={user ? <Profile /> : <Navigate replace to="/" />}
          ></Route>
          <Route path="users" element={<Users />}>
            <Route path="guests" element={<Guests />}></Route>
            <Route path="admins" element={<Admins />}></Route>
            <Route />
          </Route>
          <Route
            path="*"
            element={
              <>
                <h1>Sorry, nothing found</h1>
              </>
            }
          />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
};

export default App;
