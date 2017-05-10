(function(){
    
    var app=angular.module("gemStore",[]);
    
    app.controller("StoreController",function(){
      this.products=gems;  
    })
    
    app.controller("TabController",function(){
        this.tab=0;
        
        this.setTab=function(tab){
            this.tab=tab;
        };
        
        this.isSet=function(tab){
            
            return this.tab===tab;
        }
        
    });
    
    app.controller("ReviewsController",function(){
        this.review={};
        this.addReview=function(product){
            this.review.createdOn=Date.now();
            product.reviews.push(this.review);
            this.review={};
        }
    });
    
    var gems=[
        {
            name: 'Azurite', 
            price: 2.95, 
            canPurchase: true, 
            soldOut: false,
            image:["img/gem1.jpg","img/gem-07.jpg"],
            shine:"5",
            description: "Icing powder jelly bear claw danish lollipop. Cheesecake biscuit apple pie chocolate cake macaroon. Carrot cake pudding marshmallow cheesecake cheesecake marshmallow lollipop pastry chocolate bar. Danish candy pastry. Tart tootsie roll sesame snaps gingerbread.",
            reviews:[
                {
                    stars: 5,
                    body: "Very Nice!",
                    author: "Yoda@starWars.com",
                    createdOn: "17/08/1992"
                },
                {
                    stars: 3,
                    body: "Very Pretty!",
                    author: "Darth_Vader@starWars.com",
                    createdOn: "17/08/1992"
                }
            ]
        },
        {
            name: 'Bloodstone', 
            price: 3, 
            canPurchase: false, 
            soldOut: false,
            image:["img/gem-07.jpg","img/gem1.jpg"],
            shine:"8",
            description: " pie chocolate cake macaroon. Carrot cake pudding marshmallow cheesecake cheesecake marshmallow lollipop pastry chocolate bar. Danish candy pastry. Tart tootsie roll sesame snaps gingerbread.Icing powder jelly bear claw danish lollipop. Cheesecake biscuit apple",
            reviews:[
                {
                    stars: 5,
                    body: "Very Nice!",
                    author: "Yoda@starWars.com",
                    createdOn: "17/08/1992"
                },
                {
                    stars: 3,
                    body: "Very Pretty!",
                    author: "Darth_Vader@starWars.com",
                    createdOn: "17/08/1992"
                }
            ]
        },
        {
            name: 'Zircon', 
             price: 2.95, 
             canPurchase: true, 
             soldOut: false,
             image:["img/gem1.jpg","img/gem-07.jpg"],
             shine:"10",
            description: " macaroon. Carrot cake pudding marshmallow cheesecake cheesecake marshmallow lollipop pastry chocolate bar.Icing powder jelly bear claw danish lollipop. Cheesecake biscuit apple pie chocolate cake macaroon. Carrot cake pudding marshmallow cheesecake cheesecake marshmallow lollipop pastry chocolate bar. Danish candy pastry. Tart tootsie roll sesame snaps gingerbread.",
            reviews:[
                {
                    stars: 5,
                    body: "Very Nice!",
                    author: "Yoda@starWars.com",
                    createdOn: "17/08/1992"
                },
                {
                    stars: 3,
                    body: "Very Pretty!",
                    author: "Darth_Vader@starWars.com",
                    createdOn: "17/08/1992"
                }
            ]
        }
    
    ];
})();

