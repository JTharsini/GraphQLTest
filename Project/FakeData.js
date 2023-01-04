const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA",
    friends: [{
      id: 3,
      name: "Pedro",
      username: "pedro",
      age: 23,
      nationality: "CANADA"
    },
    {
      id: 2,
      name: "Sarah",
      username: "sarah",
      age: 19,
      nationality: "BRAZIL"
    }]
  },
  {
    id: 2,
    name: "Sarah",
    username: "sarah",
    age: 19,
    nationality: "BRAZIL",
    friends: [{
      id: 3,
      name: "Pedro",
      username: "pedro",
      age: 23,
      nationality: "CANADA"
    }]
  },
  {
    id: 3,
    name: "Pedro",
    username: "pedro",
    age: 23,
    nationality: "CANADA",
    friends:[{
        id: 2,
        name: "Sarah",
        username: "sarah",
        age: 19,
        nationality: "BRAZIL"
    }]
  }
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    year: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Intersteller",
    year: 2007,
    isInTheaters: true,
  }
];

module.exports = { UserList, MovieList};
