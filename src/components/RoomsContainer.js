import React, { useContext } from "react";
import { RoomContext } from "../RoomContext";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
const RoomsContainer = () => {
  const { loading, sortedRooms, rooms } = useContext(RoomContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default RoomsContainer;
