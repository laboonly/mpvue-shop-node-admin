const { mysql } = require('../../mysql')

module.exports = async (ctx) => { 
    // 轮播图数据
    const banner = await mysql('nideshop_ad').where({
        ad_position_id: 1
    }).select();
    //类型
    const channel = await mysql('nideshop_channel').select();

    ctx.body = {
        "banner": banner,
        "channel": channel
    }
}