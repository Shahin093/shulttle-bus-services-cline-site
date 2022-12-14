import { useState } from "react";



const SeatHook = (slot, bus) => {
    const [seats, setSeats] = useState([]);
    fetch(`http://localhost:5000/api/v1/busCollection/slots?bus_name=${bus}&&slot=${slot}`)
        .then(res => res.json())
        .then(data => console.log(data))



    return { seats };
};

export default SeatHook;