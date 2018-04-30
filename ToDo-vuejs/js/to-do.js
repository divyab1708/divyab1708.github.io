function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var mainIndex=getUrlParameter("index");



var app=new Vue({
   
   el:  "#mainBox",
   data: {
      newTitle: "",
      modalShow: 0,
      modalClass: "in show",
      mainIndex: mainIndex,
      newItem: "",
      filter: "all",
      listingLength:0,
      lists: [
         { 
            index: 0,
            title: "Grocery Shopping",
            color: "yellow",
            listing:[
               {name: "Apples", complete: true, index:0},
               {name: "Rice", complete: false, index:1},
               {name: "Dal", complete: true,  index:2},
               {name: "Mangoes", complete: false, index:3},
            ],
            currentList:[]
         },
         {
             index: 1,
            title: "Movies to watch",
            color: "yellow",
            listing:[
               {name: "Avengers", complete: true, index:0},
               {name: "Xmen", complete: false, index:1},
               {name: "Harry Potter", complete: true,  index:2},
               {name: "Mangoes", complete: false, index:3},
            ]
            
         },
         {
             index: 2,
            title: "Steps to follow",
            color: "yellow",
            listing:[
               {name: "Apples", complete: true, index:0},
               {name: "Rice", complete: false, index:1},
               {name: "Dal", complete: true,  index:2},
               {name: "Mangoes", complete: false, index:3},
            ]
            
         }
      ]
   },
   methods: {
      changeStrike: function(index){
         console.log(index.complete);
         if(index.complete)
            index.complete=false;
         else
            index.complete=true;
//         if(this.lists[0].listing[index].complete)
//            this.lists[0].listing[index].complete=false;
//         else
//            this.lists[0].listing[index].complete=true;
      },
      showList: function(filt){
         if(this.mainIndex==1000){
            this.modalShow=1;
            $("#myModal").modal("show");
            return [];
         }
         
         
         else if(this.filter=="all"){
            return this.lists[this.mainIndex].listing;
         }
         else if(this.filter=="comp"){
            return this.lists[this.mainIndex].listing.filter(item => item.complete);
            
         }
         else{
            return this.lists[this.mainIndex].listing.filter(item => !item.complete);
            
         }
      },
      deleteItem: function(item){
         var index=item.index;
         for(var i=0;i < this.lists[this.mainIndex].listing.length ; i++){
            if(this.lists[this.mainIndex].listing[i].index==index){
               this.lists[this.mainIndex].listing.splice(i,1);
               break;
            }
         }
      },
      addItem: function(){
         var nit=this.newItem
         if(nit.trim()==""){
           
            return ;
         }
         var index;
         var len=this.lists[this.mainIndex].listing.length;
         if(len==0){
            index=0;
         }
         else{
            index=(this.lists[this.mainIndex].listing[len-1].index)+1;
            
         }
         
         var item={ name: this.newItem, complete: false, index: index};
         this.newItem="";
//         this.lists[this.mainIndex].listing.push(item);
         this.lists[this.mainIndex].listing.splice(this.lists[this.mainIndex].listing.length,0,item);
      this.listingLength=this.lists[this.mainIndex].listing.length;
         
         
      },
      addNewList: function(){
         if((this.newTitle).trim()==""){
            return;
         }
         var listindex=this.lists[this.lists.length-1].index;
        var newList={
           index: listindex+1,
           title: this.newTitle,
           color: "yellow",
           listing: []
        }; 
         
         this.mainIndex=this.lists.length;
         
//         this.modalShow=0;
         this.lists.push(newList);
         this.modalShow=0;
         $("#myModal").modal("hide");
         $(".modal-backdrop").remove();
         
            
      },
      goToPage: function(index){
         window.location.href="todo.html?index="+index;
      }
   },
   mounted: function(){
//      if(mainIndex==1000){
//            this.modalShow=1;
//            $("#myModal").modal("show");
//         }
//      if(this.mainIndex!=1000)
//         this.listingLength=this.lists[this.mainIndex].listing.length;
//         
//      else{
//         this.listingLength=0;
//      }
      
   }
   
})


$(document).on("click",".fa-trash",function(e){
   e.preventDefault();
})