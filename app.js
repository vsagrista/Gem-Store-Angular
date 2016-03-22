(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
    this.products = gems;
  });
  app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(number, products) {
    	this.hideNonSelectedReviews(products);
      this.tab = number;
    }
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    }
    this.hideNonSelectedReviews = function (products) {
    	for (var i = 0; i < products.length; i++ ){
    		products[i].displayReviews = false;
    	}
    }
    this.showReviews = function(product) {
    	product.displayReviews = true;
    }
  });

  app.controller('ReviewsController', function() {
  	this.review = {stars:'', comments:'',user:''}
  	this.getProductReviews = function (products, index) {
  		return products[index].reviews;
  	}	
  	this.averageReviews = function (reviews) {
  		var reviewCount = reviews.length;
  		var totalStars = reviews.reduce(function(a, b) { return {stars: a.stars + b.stars} }).stars;
  		return Math.round(totalStars / reviewCount) + ' out of ' + reviewCount + ' reviews.';
  	}
  	this.addReview = function (stars, comments, user) {
  		
  	}
  })

  var gems = [{
    name: 'Ruby',
    price: 20,
    description: 'A beautiful gem that is also the name of a cool programming language',
    available: true,
    img: 'https://cdn2.iconfinder.com/data/icons/business-finance-material-flat-design/24/Diamond-128.png',
    displayReviews: false,
    reviews: [{
      stars: 5,
      comments: 'This is a really pretty gem',
      user: 'John Smith'
    }, {
      stars: 4,
      comments: 'Nice and shiny',
      user: 'Peter Smith'
    }, {
      stars: 4,
      comments: 'Red and nice',
      user: 'Phil Morris'
    }]
  }, {
    name: 'Diamond',
    price: 90,
    description: 'Powerful and beautiful gem, able to cut almost anything.',
    img: 'http://diamondgirlconsulting.com/wp-content/uploads/2012/09/1348837205_315.png',
    displayReviews: false,
    reviews: [{
      stars: 3,
      comments: 'Boring gem',
      user: 'Peter Peters'
    }, {
      stars: 4,
      comments: 'Great gem',
      user: 'Maria Sharapova'
    }, {
      stars: 4,
      comments: 'Red and nice',
      user: 'Phil Morris'
    }]
  }, {
    name: 'Everything Gem',
    price: 250,
    description: 'The most special, has it all!',
    img: 'https://cdn3.iconfinder.com/data/icons/finance-volume-3-1/48/145-128.png',
    displayReviews: false,
    reviews: [{
      stars: 3,
      comments: 'Boring gem',
      user: 'Peter Peters'
    }]
  }];
})();