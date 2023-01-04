const {UserList, MovieList} = require("..\\FakeData");
const _ = require("lodash");

const resolvers = {
  Query:{
    // user resolvers
    users(){
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, {id: Number(id)});
      return user;
    },
    // movie resolvers
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) =>{
      const name = args.name;
      const movie = _.find(MovieList, {name})
    }
  }
};

module.exports = {resolvers};

// there should be resolvers for each query
// name also same as query
