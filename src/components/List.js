import React, { useState, useEffect } from "react";
import axios from "axios";

import Details from "./Details";

const path =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(path).then((resp) => {
      setUsersList(resp.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <div className="users">
        {isLoading ? (
          <div className="loader">Load...</div>
        ) : (
          usersList.map((item) => (
            <li
              key={item.id}
              className={item.id === selectedId ? "item active_item" : "item"}
              onClick={() => item.id !== selectedId && setSelectedId(item.id)}
            >
              {item.name}
            </li>
          ))
        )}
      </div>
      {selectedId && (
        <Details info={usersList.find((user) => user.id === selectedId)} />
      )}
    </>
  );
};

export default List;
