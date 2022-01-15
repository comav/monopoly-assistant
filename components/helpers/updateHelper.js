export const fetchData = async () => {
  try {
    const response = await fetch(`http://${globalVar.ip}:5502/getcardinfo?owner=${globalVar.userName}`, {
        method: 'GET'
      }
    )
      .then((response) => response.json())
      .then(res => setCardData(res));
  } catch (error) {
    console.log('THERES A PROBLEM W/ GET CARD FETCH')
    throw error;
  }
}