const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  //I believe this is a mistake in the seeds! Product_id: 1 is "plain T-shirts", and tag_id: 8 is pop culture. This doesn't match. 
  // {
  //   product_id: 1,
  //   tag_id: 8,
  // },
  {
    product_id: 2,
    tag_id: 6,
  },
  //I believe this is also a mistake in the seeds! product_id: 3 is "Branded Baseball Hat", and tag_id: 1 is "Rock Music". This doesn't match. 
  // {
  //   product_id: 3,
  //   tag_id: 1,
  // },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
