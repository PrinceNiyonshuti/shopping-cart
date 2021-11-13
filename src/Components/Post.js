import React, { useState } from "react";

const Post = () => {
  const [users, setUsers] = useState([]);

  async function addNewUser() {
    // setUsers([
    //   ...users,
    //   {
    //     id: users.length,
    //     name: "New me"
    //   }
    // ]);

    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postData = await data.json();
    setUsers(postData);
    console.log(users);
  }
  return (
    <div>
      <h3 className="font-bold text-xl mb-2">Post Data</h3>
      <div class="flex">
        <div className="w-full bg-white p-2 rounded">
          <div className="flex justify-between mx-3">
            <div>
              <button
                onClick={addNewUser}
                className="px-4 py-1 bg-yellow-600 text-white rounded font-light hover:bg-yellow-900"
              >
                Add Data to Array
              </button>
            </div>
          </div>
          <h4 className="font-bold mt-2">Added User Data</h4>
          {users.map((user) => (
            <p key={user.id}>- {user.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
