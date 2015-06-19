'use strict';

class AssetMap {
  constructor() {

  }

  deconstruct(dataType, data) {
    console.log('AssetMap: ', dataType);
    var _data;

    switch (dataType) {
      case 'topic':
        _data = data.payload;
        break;

      case 'product':
        _data = data.data.products;
        break;

      case 'review':
        _data = data.payload;
        break;
    }

    return _data;

  }

  static render() {
    return new AssetMap();
  }


}

// AssetMap.$inject = [];

export default AssetMap;
