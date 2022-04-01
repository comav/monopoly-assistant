const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default wait;