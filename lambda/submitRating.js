const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
  domain: "db.eu.fauna.com",
  // NOTE: Use the correct domain for your database's Region Group.
  port: 443,
  scheme: "https"
});

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body);
  // console.log("function submit rating invoked", data);

  return client
    .query(
      q.Create(q.Collection("Rating"), {
        data: data
      })
    )
    .then(response => {
      // console.log("success", response);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      });
    })
    .catch(error => {
      // console.log("error", error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      });
    });
};
