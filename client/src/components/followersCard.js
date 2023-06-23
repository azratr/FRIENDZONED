import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import User from "./User";
import { useSelector } from "react-redux";
import { getAllUser } from "../api/UserRequest";

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.AuthReducer.authData);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
      console.log(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="follower-card">
      <h3>People you may know</h3>

      {persons.map((person, id) => {
        if (person._id !== user.id) {
          return <User person={person} key={id} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;
