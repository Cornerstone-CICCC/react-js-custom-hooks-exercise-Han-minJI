
function useTime(param: "day" | "hour") {
  const currentDate = new Date();
    if (param === "day") {
      switch(currentDate.getDay()){
        case 0:
          return "Sunday"
        case 1:
          return "Monday"
        case 2:
          return "Tuesday"
        case 3:
          return "Wednesday"
        case 4:
          return "Thursday"
        case 5:
          return "Friday"
        case 6:
          return "Saturday"
      }
    } else if (param === "hour") {
      return currentDate.getHours()
    }
}

export default useTime;
