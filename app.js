(function () {
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
	var gems = [{
	    name: 'Ruby',
	    price: 20,
	    description: 'A beautiful gem that is also the name of a cool programming language',
	    available: true,
	    img: 'http://techdire.com/wp-content/uploads/2014/04/ruby_techdire1.png'
	}, {
	    name: 'Diamond',
	    price: 90,
	    description: 'Powerful and beautiful gem, able to cut almost anything.',
	    img: 'http://diamondgirlconsulting.com/wp-content/uploads/2012/09/1348837205_315.png'
	}, {
	    name: 'Sapphire',
	    price: 50,
	    description: 'Another beautiful gem, this one found in many colors',
	    img: 'http://icons.iconarchive.com/icons/aha-soft/jewelry/128/Sapphire-icon.png'
	}];
})();
