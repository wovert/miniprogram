# Restfull API

## 技术栈

- node
- express
- mysql
- postman(接口调试软件)
- sequelize(数据库映射模型)
- sequelize-auto(自动生成数据库映射模型)
- apidoc（注释语法生成 webApi）
- jwt(加密生成token)
- formidable(文件上传)
- winston 和express-winston(记录日志)
- crypto/md5(加密用户密码)

### 安装 node

> node7.6.0+(es6的语法支持)

### 创建项目并安装包

```sh
$ koa2 server && cd server
$ npm install
```

### 安装 [sequelize官网](https://sequelize.readthedocs.io/en/v3)

> Sequelize是一个基于promise的关系型数据库ORM框架，这个库完全采用JavaScript开发并且能够用在Node.JS环境中，易于使用，支持多SQL方言(dialect)，。它当前支持MySQL,、MariaDB、SQLite、PostgreSQL、Sql Server 数据库

[github中文](https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/querying.md)

```sh
$ npm install --save sequelize
```

### 安装 MySQL

如果报错安装mysql2

```sh
$ npm install --save mysql
```

### 配置数据库连接

```js
var Sequelize =  require('sequelize');
var sequelize = new Sequelize('database', 'name', 'password', {
  host: 'localhost',  // 数据库域名
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
module.exports = sequelize
```

### 配置和数据库映射的模型

``` js
var Sequelize = require('sequelize') // 引入sequelize模块
var db = require('../config/db')  // 引入数据库
/*
* 定义表的映射模型
* https://sequelize.readthedocs.io/en/v3/docs/models-definition/
*
*/
module.exports = db.define('user', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  id_card: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}
```

## 根据模型，进行增删改查操作

```js
var User = require('./models/user')
// 查询单个
User2.find({where:{id:1}})
.then(function (res) {
   console.log(JSON.stringify(res))
})
.catch(function (ex) {
   console.log(ex)
})

// 查询所有
User.findAll({where:{sex:1},attributes:['id','username']}) // 包含id和username
   .then(function (res) {
      console.log(JSON.stringify(res))
   })
   .catch(function (ex) {
      console.log(ex)
   })

// 分页查询所有，有条件    注意offset,linit数据类型必须为number
var param = {
  'offset': 1,   // 从第几个开始查询  Number(pageSize*pageNow)
  'limit': 10,   //每次查询多少个 size
    attributes:{exclude:['password']},//exclude不包含
  where: { sex:1 }
}
User.findAndCountAll(param)
  .then(function (res) {
    console.log(JSON.stringify(res))
  })
  .catch(function (ex) {
    console.log(ex)
  })

// 添加
var user = {
  username: 'wo shi 1111111',
  password: '12312321321312312321313',
  id_card: '11011011101110110'
}
User.create(user)
  .then(function (res) {
    console.log(JSON.stringify(res))
  })
  .catch(function (ex) {
    console.log(ex)
  })

// 修改
User.update({username:'abcdefg'},{where:{id:1}})
  .then(function (res) {
    console.log(JSON.stringify(res))  //更改成功返回 [1],失败返回[0]  
  })
  .catch(function (ex) {   
    //如果数据库里没有id这个属性名，才会进入到catch
      console.log(ex)  
  })

// 删除
User.destroy({where:{id:102}})
  .then(function (res) {
    console.log(JSON.stringify(res))
  })
  .catch(function (ex) {
    console.log(ex)
  })
```

### [sequelize-auto](https://github.com/sequelize/sequelize-auto) 

> 利用sequelize-auto对照数据库自动生成相应的models，使用sequelize-auto对照数据库自动生成相应的models减少了对数据库进行增删改查时的sql语句的编写。上面的模型如果很多的话，一个一个操作会很麻烦。利用插件可以减少工作量。

```sh
$ npm install sequelize-auto --save
```

### 编写自动生成模型

```js
var SequelizeAuto = require('sequelize-auto')
// database数据库名称   name 用户  password密码
var auto = new SequelizeAuto('database', 'name', 'password', { 
  host: 'localhost',   //数据库地址
  dialect: 'mysql',  
  directory: './schema',  //生成的模块放到的目录
  port: '3306',  //数据库端口
  additional: {
      timestamps: false
  }
})
auto.run(function (err) {
    if (err) throw err;
    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});
```

将数据库的表结构导出到 schema 文件夹

`sequelize-auto -o "./schema" -d terran -h 127.0.0.1 -u root -p 3306 -x root -e mysq`


### 在生成的 models 目录下，创建一个 index.js 将这些自动生成的数据库模型输入

```js
var Sequelize =  require('sequelize');

/* 创建数据库连接 */
var sequelize = new Sequelize("miniprogram", "root", "root",{
  host: "127.0.0.1",
  dialect: "mysql",
  underscored: true
})
/* 数据库模型名称配置及路径 */
const models = [
  {
    "name": "ApplyInfo",
    "path": "./tb_apply_info.js"
  },
  {
    "name": "Branch",
    "path": "./tb_branch.js"
  },
  {
    "name": "Carousel",
    "path": "./tb_carousel.js"
  }
]
/* 数据库模型输出 */
models.forEach(item => {
  module.exports[item.name] = require(item.path)(sequelize,Sequelize);
})
```

这样自己写比较麻烦，可以写一个自动生成 index.js 的createdModelsExport.js

代码里边直接将数据库链接的 db.js 的代码也放里边。

config/createdModelsExport.js
```js

var fs=require('fs')  //引入文件读写模块
let files=fs.readdirSync('./moduels')  //读取所有的生成模块文件
let models = []
files.forEach(item=>{
    if(item!='index.js') {  //除了这个index.js
        /**下面这段代码结果是将： tb_user.js  转换为name为 User  **/
      let names = item.split('.')[0].split('_')  
        let name = ''
        for(let i=1;i<names.length;i++) {
          name+=names[i].substring(0,1).toUpperCase() + names[i].substring(1)
        }
        models.push({name: name, path:"./"+item})
    } 
})
/**视情况未定**/
const template=`
var Sequelize =  require('sequelize');
/* 创建数据库连接 */
var sequelize = new Sequelize("dbname","username","password",{
    host:"127.0.0.1",
    dialect:"mysql",
    underscored:true
})
/* 数据库模型名称配置及路径 */
const models=${JSON.stringify(models,null,4)}
/* 数据库模型输出 */
models.forEach(item=>{
    module.exports[item.name]=require(item.path)(sequelize,Sequelize);
})
`
fs.writeFile('./index.js',template,function(){
    console.log('success')
})
```

## [apidoc官网](http://apidocjs.com/)

> apidoc根据可以注释的代码生成web api文档

```sh
$ npm install apidoc –g
$ vim apidoc.json
  {
    "name": " api文档", // name
    "version": "0.0.0",  // 版本号
    "description": "黄淮党建api文档，版本号：0.0.0", // 描述
    "title": "黄淮党建api文档", // 标题
    "url": "localhost://3000/api" // url前缀地址
  }
```

编写需要导出的注释代码

```js
module.exports = [
    /**
     * @api {get} /login 登录
     * @apiName GetUser
     * @apiGroup User
     *
     * @apiParam {string} phone 用户的手机号码.
     * @apiParam {string} password 用户的登录密码.
     *
     * @apiSuccess {String} code 登录成功返回信息.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
 *       "phone": "17638583859",
 *       "password": "1234565"
 *     }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 500 server error
     *     {
 *       "error": "server error"
 *     }
     */
]
```

运行生成api网页

- 命令: `apidoc –i  ./myapp  -o  ./apidoc`
- 说明：
  - `-i myapp`   myapp 注释文件所在的父目录
  - `-o apidoc` apidoc导出到哪个文件夹（自动生成）

打开生成的apidoc里边的index.html看一下效果

## jwt

> Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（(RFC 7519).该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。

```sh
安装
$ npm install jwt-simple --save

导出设置token、验证token、以及统一返回格式方法
$ vim controllers/until.js

用户登录控制器里调用上面定义的加密方法，给用户返回token
$ vim controllers/user.js

要验证是否登陆的路由里，判断用户是否登录（即是请求头里是否包含token信息）比如，user分组里，对userlist的查询请求
$ vim routes/index.js

```

## crypto

> crypto模块的目的是为了提供通用的加密和哈希算法。用纯JavaScript代码实现这些功能不是不可能，但速度会非常慢。Nodejs用C/C++实现这些算法后，通过cypto这个模块暴露为JavaScript接口，这样用起来方便，运行速度也快

## [formidable](https://www.npmjs.com/package/formidable)

> 用于解析表单数据的Node.js模块，特别是文件上传。官网：

## [winston](https://www.npmjs.com/package/winston) 和 [express-winston](https://www.npmjs.com/package/express-winston)

> Winston是Node.js最流行的日志框架之一，设计为一个简单通用的日志库，支持多传输（在Winston中，一个传输实质上代表储存设备，也就是数据最终保存在哪里），每个Winston实例都可以对不同级别的日志配置不同的传输。
> express-winston为您的express.js应用程序的请求和错误记录提供了中间件。

安装：`npm install winston express-winston --save-dev`

创建存放成功和失败日志的文件夹。

## [supervisor](https://www.npmjs.com/package/supervisor)

> 实时监控我们服务端代码的变化，如果使用了这个工具，不需要每次修改完服端的代码之后的重启。我们使用全局安装即可：npm install supervisor -g

## 使用pm2

启动命令：`pm2 start ./www`

停止命令：`pm2 stop ./www`

重启运行：`pm2 start ./www -f`