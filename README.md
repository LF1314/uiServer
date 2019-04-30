

# uiServer

> koa2 框架


数据库采用 mysql

操作数据 采用 sequlize 

### 权限控制


>采用 koa-session
具体配置如下：

```javascript
// 配置session
const SESIONCONFIG ={
  key: 'koa:sessinCookie', /** (string) cookie key (default is koa:sess) */
  maxAge: 24*3600,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false,
}
app.use(session(SESIONCONFIG,app))


```

### 跨域配置

>客户端访问服务需要跨域由于采用的koa 框架 这里使用的是koa2-cors

具体配置如下：

```javascript
app.use(cors({
  origin: function (ctx) {
          return "*"; // 允许来自所有域名请求
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
```



``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3030
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```




























