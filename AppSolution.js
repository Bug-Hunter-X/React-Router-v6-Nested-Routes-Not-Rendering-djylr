import { BrowserRouter, Routes, Route, useParams, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/*" element={<UsersLayout/>}>
          <Route path=":userId" element={<UserProfile/>}/>
          <Route index element={<UserList/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function NotFound() { return <h1>404</h1>; }

function UsersLayout(){
  let {userId} = useParams();
  return(
    <div>
      <h2>Users</h2>
      <Outlet context={{userId}} />
    </div>
  );
}

function UserProfile(){
  let {userId} = useParams();
  return(
    <div>
      <h3>User Profile {userId}</h3>
    </div>
  );
}

function UserList(){
  return(
    <div>
      <h3>User List</h3>
    </div>
  );
}
export default App;