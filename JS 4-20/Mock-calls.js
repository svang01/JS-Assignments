// Define the users array
const users = [
    {
      id: 1, name: "Byron Storm", email: "BSV@gmail.com"},
    {
      id: 2, name: "Byron Stormy", email: "BSV2@gmail.com"},
    {
      id: 3, name: "Storm Byron", email: "VSB@gmail.com"},
  ];
  
  // Implement the fetchUserById function
  function fetchUserById(id) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let user = users.find(function(user) {
          return user.id === id;
        });
        if (user) {
          resolve(user);
        } else {
          reject("User " + id + " not found.");
        }
      }, 1000);
    });
  }
  
  // Fetch the user with ID 1
  fetchUserById(1)
    .then(function(user) {
      console.log(user);
    })
    .catch(function(error) {
      console.log(error);
    });
  
  fetchUserById(55)
    .then(function(user) {
      console.log(user);
    })
    .catch(function(error) {
      console.log(error);
    });
  