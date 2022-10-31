# GraphQLTest


*GraphQL vs SQL : SQL sits between backend and database, GraphQL sits between frontend and backend

*There can be two different operations related to data: Query and Mutation

        *GET : Query
  
        *POST, PUT, DELETE : Mutation

*No need to specify which type of mutation to be done

*GraphQL can be completely separate service from backend or it can be backend itself

*GraphQL communication to React using Apollo client

*Queries are API, not database

*Difference between GQL vs REST:

       - one endpoint for GQL: /graphqL
       
       - overfetching and underfetching:
       
       *overfetching: to build single page, different types of entities are needed. Those entities can be fetched, built a single type of object and returned in single endpoint. If only need single entity ==> still need to fetch whole objects
       
       *underfetching: having separate endpoints to fetch separate entities. to build single page, multiple API calls are needed. Performance hit
       
       ==> with REST: backend determines data to be fetched by client. Front end should be able to tell backend what it needs exactly and backend should just serve what client needs. GraphQL doesn't have that problem.***


GraphQL playground: https://www.graphqlbin.com/v2/new
Eg public end point: [https://countries.trevorblades.com] 
	code: (https://github.com/trevorblades/countries)

GraphQL has 5 different data types: String, Int, Float, Boolean, ID (by hovering in playground ==> explanation)

		type User {
			id: ID!
			name: String!
			age: Int!
			height: Float!
			isMarried: Boolean
		  	friends: [User!]
		  	videosPosted: [Video]!
		}

		type Video {
			  id: ID!
			  title: String!
			  description: String!
		}
- A return type should be defined
- ! means not nullable, if it's not specified then field is optional
- friends: [User!] means friends might not be there. If there is one friend then they can't be null/
- REST API which enables GraphQL or complete GraphQL is needed to use it
- GraphQL needs Schema: 

		type Query{
			users: [User]
			user(id: ID): User
		}

		- users: [User] means there is a query to return user list with type of User
		- user(id: ID) means there is a query to return a user with id of type ID

		type Query{
			users: [User]
			user(id: ID, name: String) : User
		}

		can be defined as
		
		type UserInput{
			id: ID
			name: String
		}

		type Query{
			users: [User]
			user(input: UserInput) : User
		}
		
	Defined schema:
	
	
		type Query {
  			country(code: ID!): Country
			languages(filter: LanguageFilterInput): [Language!]!
                        language(code: ID!): Language
		}
		
		type Country {
			  code: ID!
			  name: String!
			  native: String!
			  phone: String!
			  continent: Continent!
			  capital: String
			  currency: String
			  languages: [Language!]!
			  emoji: String!
			  emojiU: String!
			  states: [State!]!
		}
		
		type Continent {
			  code: ID!
			  name: String!
			  countries: [Country!]!
		}
		
		type Language {
			  code: ID!
			  name: String
			  native: String
			  rtl: Boolean!
		}
		
	Query: (with required fields)
	
		{
			country(code: "US"){
				code
				name
				phone
				capital
				currency
			}
		}
		
	Query (with object type field is error, need to specify required fields for object type fields)	
	Error:
	
		{
			country(code: "US"){
				code
				name
				phone
				capital
				currency
		    		continent
			}
		}
		
	Fix:
	
		{
			country(code: "US"){
				code
				name
				phone
				capital
				currency
		    		continent{
					name
				}
			}
		}
		
	Query with countries in the continent:
	
		{
			country(code: "US"){
				code
				name
				phone
				capital
				currency
		    		continent{
					name
					countries{
						name
					}
				}
			}
		}

Query to fetch language:

		{
			language(code: "en"){
				code
				name
  			}
		}
		
Query to fetch all languages: (code is optional)

		{
			languages{
				code
				name
  			}
		}

Apollo Server is one of the library to create GraphQL API
