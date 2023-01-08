import React, { useState } from "react";
import Button from "../../components/Button";

const EventFunctional = () => {
  const [username, setUsername] = useState("");

  const handleOnChangeForm = (event) => {
    // console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handleOnSubmitForm = () => {
    console.log(username);
  };

  const handleItemOnClick = (event, item) => {
    console.log(event, item);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <input
        type="text"
        name="username"
        onChange={handleOnChangeForm}
        border="1"
        className="mb-4 h-10"
      />
      <Button text="submit" onClick={handleOnSubmitForm} />
      <Button
        text="Click Item"
        onClick={(event) =>
          handleItemOnClick(event, { id: 1, name: "La La Land" })
        }
      />
    </div>
  );
};

export default EventFunctional;
