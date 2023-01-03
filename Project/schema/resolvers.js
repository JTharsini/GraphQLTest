const {UserList} = require("..\\FakeData");

const resolvers = {
  Query:{
    users(){
      return UserList;
    }
  }
};

module.exports = {resolvers};

// there should be resolvers for each query
// name also same as query
