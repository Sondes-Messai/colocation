class Depense {
    constructor(id, idCategory, title, amount, date, frequency, created = new Date()) {
        this.id = id;
        this.idCategory = idCategory;
        this.title = title;
        this.amount = amount;
        this.date = date;
        this.frequency = frequency;
        this.created = created;
    }
}
module.exports = Depense;