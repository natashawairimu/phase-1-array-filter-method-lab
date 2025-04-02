// Code your solution here
const drivers = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sammy", hometown: "Los Angeles" },
    { name: "Sally", hometown: "Chicago" },
    { name: "Annette", hometown: "Houston" },
    { name: "Bobby", hometown: "Denver" }
  ];
  
  function findMatching(drivers, query) {
      return drivers.filter(function(driver) {
          return driver.toLowerCase() === query.toLowerCase();
      });
  }
  
  function fuzzyMatch(drivers, query) {
      return drivers.filter(function(driver) {
          return driver.toLowerCase().startsWith(query.toLowerCase());
      });
  }
  
  function matchName(drivers, query) {
      return drivers.filter(function(driver) {
          return driver.name === query;
      });
  }
 

