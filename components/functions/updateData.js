import {useContext} from "react";
import AppContext from "../AppContext";

export default async function updateData () {
  const globalVar = useContext(AppContext);
    try {
      const response = await fetch(`https://${globalVar.ip}:5502/getcardinfo?owner=${globalVar.userName}`, {
          method: 'GET'
        }
      )
        .then((response) => response.json())
        .then(res => globalVar.setCardData(res));
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
}

//idk if this is possible better ask someone later