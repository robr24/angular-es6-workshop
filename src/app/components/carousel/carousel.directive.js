'use strict';

class scCarousel {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'app/components/carousel/carousel.html';
    this.transclude = true;
    // this.replace = true;
    this.controllerAs = 'vm';
    this.bindToController = {
      carouselType: '@'
    };
    this.scope = {};
  }

 /* @ngInject */
  controller(CarouselService) {

    this.carouselService = CarouselService;
    this.currentIndex = 1;
    this.carouselProducts = [];
    this.carouselSize = 0;
    this.currentIndex = 1;
    this.numToShow = 5;

    this.fetchProducts = () => {
      this.carouselService.getProducts(this.carouselType).then((results) => {
        // this.carouselProducts = results.data.payload;
        angular.forEach(results,(item) => {
          this.carouselProducts.push(item);
        });
        this.carouselSize = angular.isDefined(results.size) ? results.size : 15;
      }, (error) => {
        console.log('error');
      });
    };

    this.fetchProducts();
  }

  link(scope, element, attrs, vm) {

      var $elem = $(element),
        listItem, elSize;

      let cards = $elem.find('.cards');

      scope.next = function() {

        listItem = $elem.find('li');

        if(vm.currentIndex === 1)
        {
          var productSize = Object.keys(vm.carouselProducts).length;
          elSize = listItem.width()+parseInt(listItem.css('margin-right'));
            // scope.width = $elem.find(".card-Carousel-Holder").width();

          }

          var totalPages= vm.carouselSize /(vm.numToShow - 1);

        if(vm.currentIndex < totalPages)
           {
            var itemsOnRight = vm.carouselSize - (vm.currentIndex) * (vm.numToShow - 1)
            var offset = parseInt(cards.css('left'));
            vm.currentIndex +=1;
            if(productSize < vm.carouselSize)
            {
              console.log('need mas images');
              scope.vm.fetchProducts();
            }
            if(itemsOnRight < vm.numToShow)
              {
                scope.lastWidth= cards.width()-$elem.find(".sc-carousel").width()-parseInt(listItem.css('margin-right'));
                offset=-(scope.lastWidth);
              }

              else {
                offset -= (elSize * (vm.numToShow - 1));
              }

              cards.css("left",offset)
          }
      };

      scope.prev = function() {

        var offset;

        if(vm.currentIndex === 2)
        {
          offset = 0;
        }
        if(vm.currentIndex > 2)
        {
          offset = parseInt(cards.css('left'));

          offset += (elSize * (vm.numToShow - 1));
          vm.currentIndex--;
        }

        cards.css("left",offset);
      };

      scope.$on('destroy', () => {
        console.log('destroy');
      });
  }

  static render() {
    return new scCarousel();
  }
}

scCarousel.$inject = ['CarouselService'];

export default scCarousel;

