const searchRouter = require('./search.route');
const siteRouter = require('./site.route');

function route(app) {
    app.use("/search", searchRouter);
    app.use("/", siteRouter);
}
module.exports = route;