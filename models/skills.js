const mySkills = [
    {id: 1, skill: HTML, learned: true},
    {id: 2, skill: Javascript, learned: true},
    {id: 3, skill: JQuery, learned: true},
    {id: 4, skill: CSS, learned: true},
    {id: 5, skill: Express, learned: false}
];

module.exports = {
    getAll
};

function getAll() {
    return mySkills;
}

function getOne(id) {
    id = parseInt(id)
} 