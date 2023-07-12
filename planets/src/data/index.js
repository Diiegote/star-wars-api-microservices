const axios = require('axios');

module.exports = {
   list: async () => {
      const { data } = await axios("http://database:8004/Planet");
      return data;
   },
   create: async (body) => {
      const { data } = await axios.post("http://database:8004/Planet", body);
      return data;
   },
   listOne: async (id) => {
      const { data } = await axios(`http://database:8004/Planet/${id}`);
      return data;
   }
}