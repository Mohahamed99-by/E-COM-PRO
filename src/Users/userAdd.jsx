import axios from "axios";
import { useForm } from "react-hook-form";

function UserAdd() {
  const { register, handleSubmit } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/api/users', data);
      console.log('User added:', res.data);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('http://fancycrave.com/wp-content/uploads/2019/04/Small-Lake-Photographed-Through-Tree-Leaves.jpg')", // Replace with your image URL
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#000300] p-6 rounded-xl shadow-lg w-80 text-center bg-opacity-90 backdrop-filter backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold mb-4 text-[#00df9a]">Add User</h2>
        
        <input
          {...register('name')}
          placeholder="Name"
          required
          className="border border-gray-500 rounded-xl p-2 mb-4 w-full bg-black text-white placeholder-gray-400 hover:border-[#00df9a] focus:outline-none"
        />
        
        <input
          {...register('email')}
          placeholder="Email"
          required
          className="border border-gray-500 rounded-xl p-2 mb-4 w-full bg-black text-white placeholder-gray-400 hover:border-[#00df9a] focus:outline-none"
        />
        
        <button
          type="submit"
          className="bg-[#00df9a] text-black font-bold py-2 rounded-xl w-full hover:bg-black hover:text-[#00df9a] border hover:border-[#00df9a] transition duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default UserAdd;
