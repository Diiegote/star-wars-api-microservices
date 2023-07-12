const axios = require('axios');

module.exports = {
   list: async () => {
      const { data } = await axios("http://database:8004/Film");
      return data;
   },
   create: async (body) => {
      const { data } = await axios.post("http://database:8004/Film", body);
      return data;
   },
   listOne: async (id) => {
      const { data } = await axios(`http://database:8004/Film/${id}`);
      return data;
   },
};