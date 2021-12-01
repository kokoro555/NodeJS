class SearchController {

    // [Get] /search/
    index(req, res) {
        res.render('search')
    };

    // [Get] /search/show
    show(req, res) {
        res.send("Search Con Nha");
    };
};
module.exports = new SearchController;