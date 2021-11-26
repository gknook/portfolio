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
  // const caseStudy = JSON.parse(event.body);

  return client
    .query(
      q.Paginate(q.Match(q.Index("average-ratings"), "noise-meter"), {
        size: 2000
      })
    )
    .then(response => {
      const allRatings = response.data;
      // console.log(allRatings);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(allRatings)
      });
    })
    .catch(error => {
      console.log("error", error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      });
    });
};
