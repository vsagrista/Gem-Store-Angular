(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
    this.products = gems;
  });
  app.controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(number) {
      this.tab = number;
    }
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    }
  });
  app.controller('ReviewsController', function() {
  	this.averageReviews = function (reviews) {
  		var reviewCount = reviews.length;
  		var totalStars = reviews.reduce(function(a, b) { return {stars: a.stars + b.stars} }).stars;
  		return Math.round(totalStars / reviewCount);
  	}
  })
  var gems = [{
    name: 'Ruby',
    price: 20,
    description: 'A beautiful gem that is also the name of a cool programming language',
    available: true,
    img: 'http://techdire.com/wtp-content/uploads/2014/04/ruby_techdire1.png',
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
    name: 'Sapphire',
    price: 50,
    description: 'Another beautiful gem, this one found in many colors',
    img: 'http://icons.iconarchive.com/icons/aha-soft/jewelry/128/Sapphire-icon.png',
    reviews: [{
      stars: 3,
      comments: 'Boring gem',
      user: 'Peter Peters'
    }]
  }];
})();