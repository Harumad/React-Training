import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import userStore from "./userStore";

export default function App() {
  const openModal = userStore((state) => state.openModal);

  return (
    <div>
      <h2>Contact</h2>

    
      <button onClick={openModal}>Add Contact</button>

      <UserForm />
      <UserList />
    </div>
  );
}
