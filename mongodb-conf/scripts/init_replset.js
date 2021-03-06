config = { "_id" : "replset", 
  "members" : 
    [
    { "_id" : 1, "host" : "127.0.0.1:27027", priority: 3},
    { "_id" : 2, "host" : "127.0.0.1:27028", arbiterOnly: true},
    { "_id" : 3, "host" : "127.0.0.1:27029"},
    ]
};
rs.initiate(config)

//members 数组：
//_id：在副本集中的每一个成员都必须有一个_id表示，这个_id是通常是数字，从0开始增长。
//需要注意的是当其中一个成员退休了（指从副本集config中移除了），新加入的成员不能重新使用这个退休成员的_id；
//host：ip地址和端口号；
//arbiterOnly（false）：如果是true，则表示这个成员为仲裁节点，不接收数据；
//buildIndexes（true）：如果设置为false，则会阻止在这个节点上创建第二索引，通常
//这个节点是作为纯粹的数据备份，从不用来被查询。不过也因为此节点没有第二索引，所以他写入的东西很少，
//也就需要很少的内存和磁盘。_id的索引还是会被创建的。只有当priority属性设置为0时，此项才能设置为false，一般不会用到这个选项；
//hidden（false）：如果此项为true，不要告诉客户端的此节点的存在，设置隐藏节点的原因
//是此节点的数据的使用模式和其他节点大为不同，比如：报表，统计，备份等。设置为ture时，允许你针对这个节点发送非主要查询。
//priority（1.0）：权重，更高的权重会被选举为主节点.取值范围0-100，数字越大优先级越高，
//0代表永不能成为主节点。只有优先级为0（即被动成员）才可以设置为隐藏成员（hidden=0）
//
//tags（｛｝）：一个文档代表这台服务器的位置，有利于位置感知的读写。其实就是表示此节点位于哪个数据中心的，mongodb会根据tags找近的数据中心节点同步数据。
//slaveDelay（0）：同步数据的延迟，设置为0表示立即更新同步数据。
//votes（1）：此节点可以发出的投票数，一般不用修改他.
//
//
//var config=rs.config()
//config.members[1].priority=0
//config.members[1].hidden=0
//rs.reconfig(config)
//如果想让节点变为 延迟备份节点 （slaveDelay 属性）那么该节点的优先级也必须是 0
//和隐藏成员，目的是避免路由服务奖客户的读请求路由到该备份节点。
//



//如果不想让一个从节点成为主节点可以怎么操作？
//a、使用rs.freeze(120)冻结指定的秒数不能选举成为主节点。
//b、按照上一篇设置节点为Non-Voting类型。
//
//
//
//
//
//
//
//
//
