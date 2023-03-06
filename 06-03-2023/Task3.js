// The static keyword defines static methods for classes.
// Static methods are called directly on the class without creating an instance/object (mycar) of the class.

// Use of static keyword: 
// the static keyword is used for thr properties and methods which are independent to the class object.
// also used to define comparatrs of a class objects

// static members and classes are initialized at the time of compilation of program and before the program executes
class Article{
    static writer = "Himanshu"; // this is static property
    constructor(name, price){
        this.articleName = name;
        this.price = price;
    }
    // Static method
    static compare(artA, artB){
        return artA.price - artB.price; 
    }
}
let article1 = new Article("Java", 200);
console.log(Article.writer)
console.log(article1.writer);
let articles = [
    new Article("HTML", 120),
    new Article("CSS", 70),
    new Article("JavaScript", 150),
]
articles.sort(Article.compare)
console.log(articles[0]) // CSS