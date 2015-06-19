'use strict';

class CarouselService {
  constructor($http, $q, AssetMap) {
    this.$http = $http;
    this.$q = $q;
    this.AssetMap = AssetMap;
  }

  getProducts(carouselType) {

    var baseUrl = 'app/components/carousel/model/',
      url;

    switch(carouselType) {
      case 'topic':
        url = baseUrl + 'carousel-topic.json';
        break;

      case 'review':
        url = baseUrl + 'carousel-review.json';
        break;

      case 'product':
      default:

        url = baseUrl + 'carousel-product.json';
        break;
    }


    return this.$q((resolve, reject) => {
      this.$http.get(url).success((results) => {
        let data = this.AssetMap.deconstruct(carouselType, results);
        resolve(data);
      },(error) => {
       reject(error);
      });
    });

  }
}

CarouselService.$inject = ['$http', '$q', 'AssetMap'];

export default CarouselService;
