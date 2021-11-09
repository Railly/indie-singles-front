import { useEffect, useState } from "react";

export default function useAllUsers() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    window
      .fetch(
        "https://api-indiesingles.herokuapp.com/api/users?from=0&limit=10",
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllUsers(data);
      });
  });

  return allUsers;
}