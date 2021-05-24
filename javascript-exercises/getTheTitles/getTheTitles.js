const getTheTitles = function(books) {
    const grabTitle = books.map(x => x.title);
    return grabTitle;
}

module.exports = getTheTitles;