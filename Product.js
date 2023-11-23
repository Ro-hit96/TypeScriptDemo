var Product = /** @class */ (function () {
    function Product(Pcode, Name, Price) {
        this.Pcode = Pcode;
        this.Name = Name;
        this.Price = Price;
    }
    Product.prototype.DiscountCal = function () {
        this.Discount = this.Price - (this.Price * (0.10));
    };
    Product.prototype.Display = function () {
        console.log(this.Discount);
    };
    return Product;
}());
var pro = new Product(101, "Mobile", 78000);
pro.DiscountCal();
pro.Display();
