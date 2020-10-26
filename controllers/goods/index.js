const {
    mysql
  } = require('../../mysql');

/**
 * 商品详情页数据
 * 
 */

 async function detailAction(ctx) {
    //ctx.query 获取get请求的参数对象的形式
    const goodsId = ctx.query.id;
    const openId = ctx.query.openId;

    //商品信息
    const info = await mysql('nideshop_goods').where({
        'id': goodsId
    }).select();

    //商品相关图片
    const gallery = await mysql('nideshop_goods_gallery').where({
        goods_id: goodsId
    }).limit(4).select();

    //品牌
    let brand = [];
    if (info[0].brand_id) {
        brand = await mysql('nideshop_brand').where({
        id: info[0].brand_id
        }).select();
    }

    ctx.body = {
        "info": info[0] || [],
        "gallery": gallery,
        "brand": brand
    }
 }


async function goodsList() {

}

 module.exports = {
    detailAction,
    goodsList
  }