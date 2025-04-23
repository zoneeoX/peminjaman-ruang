import { useState } from "react";
import { useEditUser } from "../lib/react-query/mutations/mutations";
import { toast } from "react-toastify";

const UserEditModal = ({
  user,
  setIsModal,
}: {
  user: any;
  setIsModal: any;
}) => {
  const { email, role, id } = user;
  const { mutateAsync: editUser } = useEditUser();

  const [data, setData] = useState({
    email: email,
    role: role,
    id: id,
  });

  const handleEdit = async () => {
    try {
      const response = await editUser(data);
      toast.success("Sukses edit user");
      setIsModal(false)
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-black/20 grid place-items-center">
      <div className="bg-white w-[30rem] h-fit rounded p-6">
        <div>
          <h1 className="font-semibold text-2xl">Edit User</h1>
          <p className="text-sm opacity-50">
            Tolong gunakan ini dengan hati-hati!
          </p>
        </div>

        <form action="">
          <fieldset>
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                className="p-1 bg-gray-200 rounded"
                value={data.email}
              />
            </div>
            <div className="flex flex-col font-primary">
              <label htmlFor="">Role</label>
              <select
                name="role"
                value={data.role}
                onChange={handleInput}
                id=""
                className="bg-gray-200 p-1 h-8 rounded"
                defaultValue={role}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            <div className="flex flex-row gap-2">
              <button
                onClick={handleEdit}
                type="button"
                className="text-white mx-auto cursor-pointer bg-blue-600 hover:bg-blue-700 p-2 rounded w-full mt-4"
              >
                Edit User
              </button>
              <button
                type="button"
                onClick={() => setIsModal(false)}
                className="text-white mx-auto cursor-pointer bg-red-600 hover:bg-red-700 p-2 rounded w-full mt-4"
              >
                Cancel Edit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default UserEditModal;
