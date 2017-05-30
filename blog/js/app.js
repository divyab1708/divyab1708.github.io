	(function(){
		var app=angular.module("myBlog",["ngRoute"]);	
		
		app.config(function($routeProvider){
			$routeProvider
			.when("/",{
			templateUrl: 'common/home.html',
			controllerAs: "homeCtrl",
			controller: "HomeController"
			})
			.when("/article",{
			templateUrl: 'common/article.html',
			controllerAs: "articleCtrl",
			controller: "ArticleDisplayController"
			})	
			.when("/blog",{
			templateUrl: 'common/article-list.html',
				controllerAs: "homeCtrl",
			controller: "HomeController"
		
			})	
			.when("/writeBlog",{
			templateUrl: 'common/writeBlog.html',
				controllerAs: "writeCtrl",
			controller: "writeBlogController"
		
			})	
			;
			
			/*$stateProvider.state("home",{
				url: "/home",
			templateUrl: 'common/home.html',
			controllerAs: "homeCtrl",
			controller: "HomeController",
				pageTitle: "Blog"
			}); */	
		});
		
		app.filter('hyphenate',function(){
		   return function(input){
			   input= input || {"name":""}; 
			   var value=input.name;
			   
			   	var op=value.replace(/ /g, '-');

			   console.log(op);
			   return op;  
		   }
	   });
		
		app.filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
		
		app.directive('hyphenate', function () {
        return {
            require: 'ngModel',
            scope: {
              blockLength: '='
            },
            link: function (scope, elm, attr, ngModelCtrl) {
                elm.bind('keypress', function(e){
                    // console.log(e.keyCode, '=============')
                    if(e.keyCode != 13 && elm[0].value.length > scope.blockLength - 1 ){
                      e.preventDefault();
                      return false;
                    }
                    function fromUser(text) {
                        if (text) {
                            var transformedInput = text.replace(/ /g, '-');
                            if (transformedInput !== text) {
                                ngModelCtrl.$setViewValue(transformedInput);
                                ngModelCtrl.$render();
                            }
                            return transformedInput;
                        }
                        return undefined;
                    }
                    ngModelCtrl.$parsers.push(fromUser);
                });
            }
        };
    });

		app.directive("containHeader",function(){
			return {
				restrict: 'A',
				templateUrl: 'common/header.html'
			};
		});

		/*app.directive("homePage",function(){
			return {
				restrict: 'E',
				templateUrl: 'common/home.html',
				controllerAs: "homeCtrl",
				controller: "HomeController"
				
			};
		});*/

		app.controller("HomeController",["$log",'$window','$scope','$location',function($log,$window,$scope,$location){
			$scope.allArticles=articles;
			this.firstArticle= articles[0];
			this.otherArticles=articles.slice(1,articles.length);
			this.memeImages=memes;
			var pointer=this;
			this.imgIndex=0;
			
			$scope.openArticle=function(index){
				$location.url('/article?id='+index);
			};
			
			$scope.galleryFunction=function(da){
				pointer.imgIndex= da;
				$log.log(da);
			};
			
			$scope.setImage=function(index){
				if(index===pointer.imgIndex)
					return true;
				else
					return false;
			};
			
			$scope.changeImage=function(position){
				if(position=="next"){
					pointer.imgIndex++;
					if(pointer.imgIndex==memes.length)
						pointer.imgIndex=0;
				}	
				else{
					pointer.imgIndex--;
					if(pointer.imgIndex==-1)
						pointer.imgIndex=memes.length-1;
				}
			};
			
		}]);
		
		app.controller("ArticleDisplayController",["$scope","$routeParams","$window","$log",function($scope,$routeParams,$window,$log){
			var Arid=$routeParams.id;
			$scope.article= articles[Arid];
			$scope.content=articles[Arid].content.split("\n");
			$scope.currentLike=0;
			//$log.log($scope.article.comments);
			
			$scope.addComment=function(){
				var commentNow=$scope.currentComment;
				commentNow.date=Date.now();
				articles[Arid].comments.push(commentNow);	
				$log.log(articles[Arid].comments);
				$scope.currentComment={};
			};
			
			$scope.setLike=function(){
				if($scope.currentLike==0){
					$scope.currentLike=1;
					articles[Arid].likes+=1;
				}
				else{
					$scope.currentLike=0;
					articles[Arid].likes-=1;
				}
			};
			
			
			
		}]);
		
		app.controller("writeBlogController",['$scope','$log',function($scope,$log){
			
			$scope.alterText=function(type){
				if(window.getSelection){
					var sel=window.getSelection();
					if(type==='bold'){
						var cont=$(sel);
						var parent=cont[0].anchorNode.parentElement.localName;
						$log.log(parent);
						var strong = document.createElement("strong");
						var range = sel.getRangeAt(0).cloneRange();
						range.surroundContents(strong);
						sel.removeAllRanges();
						sel.addRange(range);
					}
					
					else if(type==='italics'){
						var strong = document.createElement("i");
						
						var range = sel.getRangeAt(0).cloneRange();
						range.surroundContents(strong);
						sel.removeAllRanges();
						sel.addRange(range);
					}

				}
				
			};
			
			$scope.handleImg=function(input){
				if (input.files && input.files[0]) {
					var reader = new FileReader();
					var img=document.createElement("img");

					reader.onload = function (e) {
						$(img).attr('src', e.target.result);
						
						$log.log(img);
						/*document.getElementById("imgInp").appendChild(img);*/
						$("article").append(img);
					}

					reader.readAsDataURL(input.files[0]);
				}
			};
			
			$scope.addEmbed=function(){
				/*$log.log($scope.embedCode);	*/
				$("article").append($scope.embedCode);
			};
			
		}]);
		
		var articles=[
			{
				title: "Practicing The Subtle Art Of Detachment",
				coverImg: "img/dummy/img1.jpeg",
				summary: "I was talking to a rapper recently. Was asking him how he felt about people picking apart his lyrics online, and whether he felt any responsibility to explain himself.",
				content: `<div class="section-inner sectionLayout--insetColumn"><h1 name="a601" id="a601" class="graf graf--h3 graf-after--figure graf--title">Designing for communities in&nbsp;crisis</h1><p name="53eb" id="53eb" class="graf graf--p graf-after--h3"><em class="markup--em markup--p-em">How we designed the next phase of Safety Check</em></p><p name="ab3c" id="ab3c" class="graf graf--p graf-after--p">Nothing matters more to people than their safety, especially during a crisis. We built Safety Check a few years ago to make it easier for people to let their loved ones know they’re safe after a disaster and check on friends in the area. Even though communities have activated Safety Check hundreds of times across the world, we know Facebook can be doing more to help empower and connect these communities during a crisis.</p><p name="b977" id="b977" class="graf graf--p graf-after--p">As a product designer on the Social Good team at Facebook, I have the amazing opportunity to build crisis response tools for over 1.86 billion people across the world. Designing for such a large, diverse audience is an intimidating task because these tools need to work across a number of factors like languages, cultures, borders, network conditions and so on. Our team in particular faces the added challenge of ensuring that the tools we design can be used in difficult crisis environments when people are under extreme duress.</p></div>` ,
				comments:[
					{
						name: "John Doe",
						comment_text: " Awesome. I didnt know that",
						date: "17-08-1992"
					},
					{
						name: "Divya Barsode",
						comment_text: " Awesome. I didnt know that",
						date: "17-08-1992"
					}
				],
				likes: 10
			},
			{
				title: "I was talking to a rapper recently.",
				coverImg: "img/dummy/img2.jpg",
				summary: "I was talking to a rapper recently. Was asking him how he felt about people picking apart his lyrics online, and whether he felt any responsibility to explain himself.",
				content: `<div class="section-inner sectionLayout--insetColumn"><h1 name="a601" id="a601" class="graf graf--h3 graf-after--figure graf--title">Designing for communities in&nbsp;crisis</h1><p name="53eb" id="53eb" class="graf graf--p graf-after--h3"><em class="markup--em markup--p-em">How we designed the next phase of Safety Check</em></p><p name="ab3c" id="ab3c" class="graf graf--p graf-after--p">Nothing matters more to people than their safety, especially during a crisis. We built Safety Check a few years ago to make it easier for people to let their loved ones know they’re safe after a disaster and check on friends in the area. Even though communities have activated Safety Check hundreds of times across the world, we know Facebook can be doing more to help empower and connect these communities during a crisis.</p><p name="b977" id="b977" class="graf graf--p graf-after--p">As a product designer on the Social Good team at Facebook, I have the amazing opportunity to build crisis response tools for over 1.86 billion people across the world. Designing for such a large, diverse audience is an intimidating task because these tools need to work across a number of factors like languages, cultures, borders, network conditions and so on. Our team in particular faces the added challenge of ensuring that the tools we design can be used in difficult crisis environments when people are under extreme duress.</p></div>` ,
				comments:[
					{
						name: "John Doe",
						comment_text: " Awesome. I didnt know that",
						date: "17-08-1992"
					},
					{
						name: "Divya Barsode",
						comment_text: " Awesome. I didnt know that",
						date: "17-08-1992"
					}
				],
				likes: 10
			},
			{
				title: "he felt about people picking apart",
				coverImg: "img/dummy/img3.jpg",
				summary: "I was talking to a rapper recently. Was asking him how he felt about people picking apart his lyrics online, and whether he felt any responsibility to explain himself.",
				content: `<div class="section-inner sectionLayout--insetColumn"><h1 name="a601" id="a601" class="graf graf--h3 graf-after--figure graf--title">Designing for communities in&nbsp;crisis</h1><p name="53eb" id="53eb" class="graf graf--p graf-after--h3"><em class="markup--em markup--p-em">How we designed the next phase of Safety Check</em></p><p name="ab3c" id="ab3c" class="graf graf--p graf-after--p">Nothing matters more to people than their safety, especially during a crisis. We built Safety Check a few years ago to make it easier for people to let their loved ones know they’re safe after a disaster and check on friends in the area. Even though communities have activated Safety Check hundreds of times across the world, we know Facebook can be doing more to help empower and connect these communities during a crisis.</p><p name="b977" id="b977" class="graf graf--p graf-after--p">As a product designer on the Social Good team at Facebook, I have the amazing opportunity to build crisis response tools for over 1.86 billion people across the world. Designing for such a large, diverse audience is an intimidating task because these tools need to work across a number of factors like languages, cultures, borders, network conditions and so on. Our team in particular faces the added challenge of ensuring that the tools we design can be used in difficult crisis environments when people are under extreme duress.</p></div>`,
				comments:[
					{
						name: "John Doe",
						comment_text: " Awesome. I didnt know that",
						date: "17-08-1992"
					},
					{
						name: "Divya Barsode",
						comment_text: " Awesome. I didnt know that",
						date: "17-08-1992"
					}
				],
				likes: 10
			},
			{
				title: "I was talking to a rapper recently.",
				coverImg: "img/dummy/img4.jpg",
				summary: "I was talking to a rapper recently. Was asking him how he felt about people picking apart his lyrics online, and whether he felt any responsibility to explain himself.",
				content: `<div class="section-inner sectionLayout--insetColumn"><h1 name="a601" id="a601" class="graf graf--h3 graf-after--figure graf--title">Designing for communities in&nbsp;crisis</h1><p name="53eb" id="53eb" class="graf graf--p graf-after--h3"><em class="markup--em markup--p-em">How we designed the next phase of Safety Check</em></p><p name="ab3c" id="ab3c" class="graf graf--p graf-after--p">Nothing matters more to people than their safety, especially during a crisis. We built Safety Check a few years ago to make it easier for people to let their loved ones know they’re safe after a disaster and check on friends in the area. Even though communities have activated Safety Check hundreds of times across the world, we know Facebook can be doing more to help empower and connect these communities during a crisis.</p><p name="b977" id="b977" class="graf graf--p graf-after--p">As a product designer on the Social Good team at Facebook, I have the amazing opportunity to build crisis response tools for over 1.86 billion people across the world. Designing for such a large, diverse audience is an intimidating task because these tools need to work across a number of factors like languages, cultures, borders, network conditions and so on. Our team in particular faces the added challenge of ensuring that the tools we design can be used in difficult crisis environments when people are under extreme duress.</p></div>` ,
				comments:[
					{
						name: "John Doe",
						comment_text: " Awesome. I didnt know that",
						date: "17-08-1992"
					},
					{
						name: "Divya Barsode",
						comment_text: " Awesome. I didnt know that",
						date: "17-08-1992"
					}
				],
				likes: 10
			}

		];
		
		var memes=[
			{img: "img/dummy/img1.jpeg"},
			{img: "img/dummy/img4.jpg"},
			{img: "img/dummy/img2.jpg"},
			{img: "img/dummy/img3.jpg"},
			{img: "img/dummy/img1.jpeg"},
			{img: "img/dummy/img2.jpg"},
			{img: "img/dummy/img3.jpg"},
			{img: "img/dummy/img4.jpg"},
		]
		
	}) ();
