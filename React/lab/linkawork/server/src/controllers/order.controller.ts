class Order {
  //reorder a model
  reorder(model, order, id) {
    return new Promise((resolve, reject) =>
      model
        .findOne({
          where: { id }
        })
        .then(async response => {
          if (response.order == order) resolve();

          let order_array = [[{ order }, { where: { id } }]];

          await model
            .findAll({
              where: { order: null },
              order: [
                ["order", "ASC"],
                ["id", "ASC"]
              ]
            })
            .then(async response => {
              let max = await model.max("order", { test_id: response.test_id });
              max = max || 0
              response.map((item, key) => {
                model.update(
                  { order: max + key + 1 },
                  { where: { id: item.id } }
                );
              });
            });

          if (!response.order || response.order > order)
            await model
              .findAll({
                where: { test_id: response.test_id },
                offset: order - 1,
                limit: response.order && response.order - order,
                order: [
                  ["order", "ASC"],
                  ["id", "ASC"]
                ]
              })
              .then(response => {
                response.map(item => {
                  order_array = [
                    ...order_array,
                    [
                      {
                        order: item.order + 1
                      },
                      { where: { id: item.id } }
                    ]
                  ];
                });
              });

          if (response.order < order)
            await model
              .findAll({
                where: { test_id: response.test_id },
                offset: response.order,
                limit: order - response.order,
                order: [
                  ["order", "ASC"],
                  ["id", "ASC"]
                ]
              })
              .then(response => {
                response.map(item => {
                  order_array = [
                    ...order_array,
                    [{ order: item.order - 1 }, { where: { id: item.id } }]
                  ];
                });
              });
          await order_array.map(item => model.update(item[0], item[1]));
          resolve();
        })
    );
  }
}

export default Order;
