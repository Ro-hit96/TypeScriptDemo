class Product{
    Pcode : number;
    Discount : number;
    Name : number;
    Price : number;

    constructor(Pcode,Name,Price){
        this.Price = Price;
        this.Pcode = Pcode;
        this.Name = Name;
    }
    DiscountCal()
    {
       this.Discount = this.Price - (this.Price*(0.10));
    }
    Display(){
        console.log(this.Discount);
    }
}
const pro = new Product(101,"Mobile",78000);
pro.DiscountCal();
pro.Display();