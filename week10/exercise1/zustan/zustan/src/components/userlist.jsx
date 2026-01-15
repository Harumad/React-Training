import UserItem from "./UserItem";
import userStore from "../Store/userStore";


function UserList() {
  const users=userStore((state)=>state.users);
  return (
    <>
      <div className="backdrop-blur-lg bg-green/30 shadow-2xl p-12 rounded-xl border border-white/20">
        <h1 className="border p-3 mb-2 font-extrabold">
          List Of Names & Emails
        </h1>

        {users.map((user) => {
          return <UserItem key={user.id} details={user} />;
        })}
        {/*  */}
      </div>
    </>
  );
}
export default UserList;
