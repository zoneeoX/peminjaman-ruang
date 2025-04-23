import { useGetAllUsers } from "../../lib/react-query/queries/queries";
import UserCard from "../../components/UserCard";

const KelolaUsers = () => {
  const { data } = useGetAllUsers();

  return (
    <div className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data &&
        data?.map((user: any, index: number) => {
          return <UserCard user={user} key={index} />;
        })}
    </div>
  );
};

export default KelolaUsers;
