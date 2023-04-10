
const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN,
  includes: 3
});

module.exports = function() {
  return client.getEntries({ content_type: 'trip', order: 'sys.createdAt' })
  .then(function(response) {
      const trip = response.items
      .map(function(trip) {
          trip.fields.date= new Date(trip.sys.updatedAt);
          return trip.fields;
        });
    console.log(JSON.stringify(trip, null, 4));
    return trip;
  })
  .catch(console.error);
};
