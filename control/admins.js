// 管理员控制路由

const adminsModel = require('../model/admins')

const router = require('koa-router')()

router.prefix('/admins')
// 获取管理员列表

router.get('/', async(ctx,next)=>{
//返回管理员的数据长度 默认 size= 10 pn =1
     let {pn =1 ,size = 10}= ctx.query
     pn = parseInt(pn)
     size =parseInt(size)
    try {
        let codeall = await adminsModel.findAll() 
        let totals = codeall.length
        let adminslist =await adminsModel.findAll(
            {
                attributes:{
                    exclude:['password']
                },
                offset:pn,
                limit:size
            }
        )
        ctx.body ={
            code:200,
            msg:'success',
            data:adminslist,
            total:totals
        }
      
    } catch (error) {
        ctx.body={
            code:400,
            msg:'mysqlerr',
            err:error
        }
    } 
})
// 添加管理员
router.post('/add',async(ctx,next)=>{
    const {username} = ctx.request.body
    try {
        // 判断管理员是否已经存在
     let adminL = await adminsModel.findAll({
         where:{
             username:username
         }
     })
     if(adminL.length){
         ctx.body ={
             code:400,
             msg:"admin is alrady exits!"
         }
     }else{
        let addadmin = await adminsModel.create(
            ctx.request.body
        )
        ctx.body={
            code:200,
            msg:'add admins successful!'
        }
     } 
        
    } catch (error) {
        
    ctx.body = {
        code:400,
        msg:'添加失败！',
        error
    }
    }
})
// 管理员登录

router.post('/login',async(ctx,next)=>{
    const {username,password} = ctx.request.body
    try {
        // 判断管理员是否已经存在
     let adminL = await adminsModel.findAll({
         where:{
             username:username
         }
     })
     if(!adminL.length){
         ctx.body ={
             code:400,
             msg:"admin is not exits!"
         }
     }else{
        if(adminL[0].password === password){
            ctx.session.userid = password
            ctx.body={
                code:200,
                msg:'add admins successful!'
            }
        }else{
            ctx.body={
                code:400,
                msg:'password error!'
            }
        }
      
     } 
        
    }catch (error) {
        
    ctx.body = {
        code:400,
        msg:'登录失败！',
        error
    }
    }
})


module.exports = router