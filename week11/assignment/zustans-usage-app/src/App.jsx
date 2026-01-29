import UserList from "./components/UserList";

/*
  App does NOT manage users.
  Zustand already does that.
*/

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      <UserList />
    </div>
  );
}

export default App;
