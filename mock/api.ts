import * as mock from 'mockjs';

export default {
  'POST /user/login': {
    data: mock.mock({
      'userId|1-1000': 2,
      'hasRegistered|1': true,
    }),
  },

  'GET /window/dishRecommend': {
    data: mock.mock({
      'windowId|1-1000': 1,
      windowName: mock.Random.csentence(3, 8),
      pngSrc: mock.Random.image('150x150'),
      description: mock.Random.cparagraph(5, 50),
      'canteenName|1': ['玫瑰园', '京元', '紫荆园', '教工食堂'],
      'star|1-5.1': 1,
      dish: new Array(10).fill(1).map(() => {
        return mock.mock({
          'dishid|1-1000': 1,
          dishName: mock.Random.csentence(5),
        });
      }),
    }),
  },

  'GET /user/search': {
    data: mock.mock({
      searchlist: new Array(1).fill(1).map(() => {
        return mock.mock({
      'id|1-1000': 2,
      name: mock.Random.csentence(5),
      pngSrc: mock.Random.image(),
      desc: mock.Random.cparagraph(5, 50),
      canteen: mock.Random.csentence(5),
      'star|1-5.1': 2,
        });
      }),
      dish: new Array(1).fill(1).map(() => {
        return mock.mock({
          name: mock.Random.csentence(5),
          'id|1-1000': 1,
        });
      }),
    }),
  },

  'POST /dish/updateDishTag': {
    data: mock.mock({
      dishName: mock.Random.csentence(5),
      'tagId|1-1000': 2,
      'count|1-1000': 1,
      'markedTag|1': true,
    }),
  },

  'GET /window/list': {
    data: mock.mock({
      windowlist: new Array(1).fill(1).map(() => {
        return mock.mock({
          'windowId|1-1000': 2,
          windowName: mock.Random.csentence(5),
          pngSrc: mock.Random.image(),
          description: mock.Random.cparagraph(5, 50),
          mapSrc: mock.Random.image(),
          'canteenName|1': ['玫瑰园', '京元', '紫荆园', '教工食堂'],
          'star|1-5.1': 2,
          tags: new Array(5).fill(1).map(() => {
            return mock.Random.natural(1, 50);
          }),
          'isMarked|1': true,
          dish: new Array(10).fill(1).map(() => {
            return mock.mock({
              dishName: mock.Random.csentence(5),
              'dishId|1-1000': 1,
              'price|1-100': 1,
              'star|1-5.1': 2,
            });
          }),
        });
      }),
    }),
  },

   'GET /system/getInfo': {
     data: mock.mock({
       'tags': new Array(10).fill(1).map(() => {
         return mock.mock({
           'tagId|1-1000': 1,
           tagName: mock.Random.csentence(5),
         });
       }),
       'canteens': new Array(10).fill(1).map(() => {
         return mock.mock({
           'canteenId|1-1000': 1,
           canteenName: mock.Random.csentence(5),
         });
       }),
     })
   } ,
  'POST /user/updateInfo': {
    data: mock.mock({
      'userId|1-1000': 7,
      preferredList: new Array(10).fill(1).map(() => {
        return mock.mock({
          'tagId|1-100': 8,
          tagName: mock.Random.csentence(5),
        });
      }),
      avoidList: new Array(10).fill(1).map(() => {
        return mock.mock({
          'tagId|1-100': 8,
          tagName: mock.Random.csentence(5),
        });
      }),
    }),
  },
  'GET /user/getInfo': {
    data: mock.mock({
          preferredList: new Array(10).fill(1).map(() => {
            return mock.mock({
              'tagId|1-100': 8,
              tagName: mock.Random.csentence(5),
            });
          }),
          avoidList: new Array(10).fill(1).map(() => {
            return mock.mock({
              'tagId|1-100': 8,
              tagName: mock.Random.csentence(5),
            });
          }),
    }),
  },
  'GET /window/getMarkedWindow': {
    data: mock.mock({
          windowList: new Array(10).fill(1).map(() => {
            return mock.mock({
              'windowId|1-1000': 99,
              windowName: mock.Random.csentence(5),
              pngSrc: mock.Random.image(),
              description: mock.Random.cparagraph(5, 50),
              canteeName: mock.Random.csentence(5),
              'star|1-5.1': 2,
              dish: new Array(10).fill(1).map(() => {
                return mock.mock({
                  name: mock.Random.csentence(5),
                  'id|1-1000': 99,
                });
              }),
            });
          }),
    }),
  },
  'GET /dish/favorites': {
    data: mock.mock({
          dishList: new Array(10).fill(1).map(() => {
            return mock.mock({
              'dishId|1-1000': 99,
              dishName: mock.Random.csentence(5),
              'price|1-100': 14,
              'star|1-5.1': 2,
            });
          }),
    }),
  },
  'GET /dish/getDishInfo': {
    data: mock.mock({
      dishName: mock.Random.csentence(5),
      'price|1-100': 1,
      'userStar|-1-5.1': 2,
      'star|1-5.1': 2,
      starNum: new Array(5).fill(1).map(() => {
        return mock.Random.natural(1, 5);
      }),
      tagList: new Array(10).fill(1).map(() => {
        return mock.mock({
          'tagId|1-1000': 1,
          'tagNum|1-100': 1,
          'hasTagged|1': true,
        });
      }),
    }),
  },
  'POST /user/feedback': {},
  'POST /updateMarkedWindow': {},
  'POST /dish/updateDishStar': {
    data: mock.mock({
      }),
  },
};
