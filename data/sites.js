/* ==========================================================================
   IA托者 · 站点数据
   --------------------------------------------------------------------------
   整站内容都在这一个文件里，改完保存刷新即可，无需构建。
   新增一个入口，复制下面这段放进对应分类的 items 数组：

     { name: "站点名", url: "https://example.com", desc: "一句话说明" },

   可选字段：
     tags  → ["课程", "工具"]     会被搜索命中
     logo  → "./assets/img/xx.png" 卡片标题前的小图标（可省略）

   新增一个分类，复制 categories 里的一项：

     { id: "dev", name: "开发与协作", icon: "office", items: [] },

   icon 可选值：campus / book / forum / ai / zap / model / office / design / media / link
   ========================================================================== */

window.IA_DATA = {
  site: {
    title: "IA托者",
    brandSub: "连接浙大人的信息入口",
    heroTitle: "信息入口，从这里开始。",
    heroSub: "浙大人的常用入口：教务课程、学习资源、社区工具，外加一份 CC98 热帖存档。",

    // 填成 "用户名/仓库名" 或完整链接即可显示 GitHub 入口与「提交入口」按钮
    repo: "ChihMo002344/Information-Archive-to-ZJUers",
    // 「提交入口」按钮的地址；留空时自动用 repo + /issues/new/choose
    submitUrl: "",

    // 分类为空时，每类铺多少张「待添加」虚位卡片
    placeholderCount: 3
  },

  categories: [
    {
      id: "campus",
      name: "校园服务",
      icon: "campus",
      items: [
        { name: "学在浙大", url: "https://course.zju.edu.cn", desc: "课程、作业与在线学习", tags: ["课程", "教务"] },
        { name: "智云课堂", url: "https://classroom.zju.edu.cn", desc: "课堂直播与课程回放", tags: ["课程", "直播"] },
        { name: "统一身份认证", url: "https://zjuam.zju.edu.cn", desc: "一次登录，通行校内系统", tags: ["登录", "账号"] },
        { name: "浙大邮箱", url: "https://mail.zju.edu.cn", desc: "学号邮箱与校内通知", tags: ["邮件"] },
        { name: "正版软件", url: "https://ms.zju.edu.cn", desc: "Office、MATLAB 等授权下载", tags: ["软件", "Office"] },
        { name: "ZJU Mirror", url: "https://mirrors.zju.edu.cn", desc: "开源镜像与软件源", tags: ["镜像", "下载"] },
        { name: "ZJU Git", url: "https://git.zju.edu.cn", desc: "校内代码托管", tags: ["Git", "代码"] },
        { name: "校园地图", url: "https://map.zju.edu.cn", desc: "校区、教学楼与班车", tags: ["地图"] },
        { name: "教务评价", url: "https://eta.zju.edu.cn", desc: "教学评价与申请结果查询", tags: ["教务", "评教"] },
        { name: "素质拓展", url: "https://sztz.zju.edu.cn", desc: "第二课堂与素拓学分", tags: ["二课", "学分"] },
        { name: "蓝田学园", url: "http://lantian.zju.edu.cn", desc: "学园办公与通知", tags: ["学园"] },
        { name: "WebVPN", url: "https://webvpn.zju.edu.cn", desc: "校外访问校内资源", tags: ["VPN", "校外"] }
      ]
    },
    {
      id: "study",
      name: "课程与学习",
      icon: "book",
      items: [
        { name: "中国大学MOOC", url: "https://www.icourse163.org", desc: "慕课与 SPOC 课程", tags: ["慕课", "课程"] },
        { name: "智慧树", url: "https://onlineweb.zhihuishu.com", desc: "在线学堂与学分课", tags: ["网课", "学分"] },
        { name: "大英默写器", url: "https://eng.zjueva.net", desc: "大学英语单词默写", tags: ["英语", "背单词"] },
        { name: "帆楼的图书馆", url: "https://hollow.ink", desc: "浙大课程笔记与资料", tags: ["笔记", "复习"] },
        { name: "ZJU-icicles", url: "https://github.com/QSCTech/zju-icicles", desc: "浙大课程攻略共享计划", tags: ["资料", "真题"] },
        { name: "WintermelonC Docs", url: "https://wintermelonc.github.io/WintermelonC_Docs/", desc: "计算机课程复习笔记", tags: ["笔记", "计算机"] }
      ]
    },
    {
      id: "community",
      name: "社区与信息",
      icon: "forum",
      items: [
        { name: "CC98", url: "https://www.cc98.org", desc: "浙大校内论坛", tags: ["论坛", "98"] },
        { name: "ZJUers 轻首页", url: "https://zjuers.com", desc: "浙大人自己的导航页", tags: ["导航"] },
        { name: "查老师", url: "https://chalaoshi.netlify.app", desc: "浙大匿名教评", tags: ["选课", "教评"] },
        { name: "知乎", url: "https://www.zhihu.com", desc: "问答与专栏", tags: ["问答"] },
        { name: "卫星百科", url: "https://sat.huijiwiki.com", desc: "航天器与卫星资料", tags: ["航天", "百科"] }
      ]
    },
    {
      id: "ai",
      name: "AI 与开发",
      icon: "ai",
      items: [
        { name: "DeepSeek", url: "https://chat.deepseek.com", desc: "对话、推理与写作", tags: ["AI", "对话"] },
        { name: "DeepSeek 开放平台", url: "https://platform.deepseek.com", desc: "API 与用量管理", tags: ["API", "开发"] },
        { name: "Qwen", url: "https://chat.qwen.ai", desc: "通义千问网页版", tags: ["AI", "通义"] },
        { name: "GitHub", url: "https://github.com", desc: "代码托管与开源项目", tags: ["代码", "开源"] },
        { name: "gh-proxy", url: "https://gh-proxy.com", desc: "GitHub 加速下载", tags: ["加速", "下载"] },
        { name: "Markdown 教程", url: "https://markdown.com.cn", desc: "语法速查", tags: ["写作", "文档"] }
      ]
    },
    {
      id: "tools",
      name: "工具与效率",
      icon: "zap",
      items: [
        { name: "AirPortal", url: "https://www.airportal.cn", desc: "跨设备空投快传", tags: ["传输", "文件"] },
        { name: "百度网盘", url: "https://pan.baidu.com", desc: "课件与资料分享", tags: ["网盘", "资料"] },
        { name: "Bing", url: "https://cn.bing.com", desc: "搜索与资讯", tags: ["搜索"] },
        { name: "网易云音乐", url: "https://music.163.com", desc: "歌单与电台", tags: ["音乐"] },
        { name: "RoboMaster 社区", url: "https://bbs.robomaster.com", desc: "机甲大师赛事与论坛", tags: ["竞赛", "机器人"] }
      ]
    },
    {
      id: "cc98-talk",
      name: "CC98 · 讨论",
      icon: "hash",
      items: [
        { name: "被讨厌的yq", url: "https://www.cc98.org/topic/6677529/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "深度解析yq弱势的原因", url: "https://www.cc98.org/topic/6677494/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq的坏处极大", url: "https://www.cc98.org/topic/6677489/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "为什么我不信yq", url: "https://www.cc98.org/topic/6677484/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "为什么yq现在烂完了", url: "https://www.cc98.org/topic/6677434/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq比较招人烦的点", url: "https://www.cc98.org/topic/6677464/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "大家不要再乱用yq啦", url: "https://www.cc98.org/topic/6677433/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "为什么要坚决防控yq", url: "https://www.cc98.org/topic/6677394/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "如何控制网络yq", url: "https://www.cc98.org/topic/6677411/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq或将成为/已经成为下一个方能", url: "https://www.cc98.org/topic/6677423/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "我为什么讨厌yq", url: "https://www.cc98.org/topic/6677216/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "死yq虫子咋那么多", url: "https://www.cc98.org/topic/6677480/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "以诚相待，和而不同，方能收获长久的yq*", url: "https://www.cc98.org/topic/6677498/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "我们为什么反yq", url: "https://www.cc98.org/topic/6677532/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq这东西为什么是祸害", url: "https://www.cc98.org/topic/6677549/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq是什么意思啊", url: "https://www.cc98.org/topic/6677563/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] }
      ]
    },
    {
      id: "cc98-mood",
      name: "CC98 · 抒情",
      icon: "hash",
      items: [
        { name: "又是怀念yq的一天", url: "https://www.cc98.org/topic/6677514/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "挺喜欢yq的", url: "https://www.cc98.org/topic/6677504/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "好像要yq啊", url: "https://www.cc98.org/topic/6677416/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "我真的好想yq", url: "https://www.cc98.org/topic/6677449/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "没了yq感觉生活好窒息", url: "https://www.cc98.org/topic/6677443/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "我们为什么喜欢yq", url: "https://www.cc98.org/topic/6677440/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq生活已经结束这么久了吗", url: "https://www.cc98.org/topic/6677456/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "我要玩yq！", url: "https://www.cc98.org/topic/6677424/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "真的吗，真的可以yq吗？", url: "https://www.cc98.org/topic/6677430/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "你们都比不上我，其实我几个月前就已经有yq了", url: "https://www.cc98.org/topic/6677450/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "吧友们太yq了", url: "https://www.cc98.org/topic/6677561/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "有yq", url: "https://www.cc98.org/topic/6677550/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "小水yq", url: "https://www.cc98.org/topic/6677545/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "啊啊啊到底发生了啊什么yq", url: "https://www.cc98.org/topic/6677547/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] }
      ]
    },
    {
      id: "cc98-meme",
      name: "CC98 · 整活",
      icon: "hash",
      items: [
        { name: "漫画推荐：yq", url: "https://www.cc98.org/topic/6677524/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "出了几个yq（怡情）诗词猜谜，请大家同赏", url: "https://www.cc98.org/topic/6677521/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yqqyqq", url: "https://www.cc98.org/topic/6677515/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "对他使用yq吧，yq超人！", url: "https://www.cc98.org/topic/6677503/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyqyq", url: "https://www.cc98.org/topic/6677432/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "我宣布，嘻嘻酒吧2026年最有创新性的热梗诞生了", url: "https://www.cc98.org/topic/6677488/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "苏轼：yqyq", url: "https://www.cc98.org/topic/6677481/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "没人觉得yq的yq剧场很热吗", url: "https://www.cc98.org/topic/6677414/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "今天yq是黄色的！", url: "https://www.cc98.org/topic/6677391/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq真好看", url: "https://www.cc98.org/topic/6677486/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "我必须立刻加入我们yq大军", url: "https://www.cc98.org/topic/6677495/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq是强者的谦辞", url: "https://www.cc98.org/topic/6677505/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq风发啊，牢师", url: "https://www.cc98.org/topic/6677437/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "我在yqyq的一天", url: "https://www.cc98.org/topic/6677466/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "吟诗一首《yq》（2）", url: "https://www.cc98.org/topic/6677572/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "吟诗一首《yq》", url: "https://www.cc98.org/topic/6677566/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "小米yq", url: "https://www.cc98.org/topic/6677553/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "为什么我不想和庄方宜yq", url: "https://www.cc98.org/topic/6677542/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] }
      ]
    },
    {
      id: "cc98-brain",
      name: "CC98 · 脑洞",
      icon: "hash",
      items: [
        { name: "为什么yq正在离地球越来越远", url: "https://www.cc98.org/topic/6677372/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq守不住怎么办", url: "https://www.cc98.org/topic/6677400/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq的故事", url: "https://www.cc98.org/topic/6677368/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "到底是哪个yq", url: "https://www.cc98.org/topic/6677477/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq已成废墟", url: "https://www.cc98.org/topic/6677463/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq干崩了Deepseek的思考", url: "https://www.cc98.org/topic/6677482/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq进阶教学", url: "https://www.cc98.org/topic/6677406/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq现在热度高，重发一次", url: "https://www.cc98.org/topic/6677332/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "期待明天的yj美学", url: "https://www.cc98.org/topic/6677457/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "全世界最不吃压力的yq", url: "https://www.cc98.org/topic/6677558/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] }
      ]
    },
    {
      id: "cc98-meta",
      name: "CC98 · 论坛生态",
      icon: "hash",
      items: [
        { name: "98全是yq，方能yq全是", url: "https://www.cc98.org/topic/6677513/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "最近98怎么老是有一些莫名其妙的帖子", url: "https://www.cc98.org/topic/6677367/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "98或将爆发空前绝后的yq帖潮", url: "https://www.cc98.org/topic/6677417/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "CC98已被yq攻占", url: "https://www.cc98.org/topic/6677459/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "发现了氵98的另一种路径", url: "https://www.cc98.org/topic/6677453/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "话说98有没有那种历史之最的记录", url: "https://www.cc98.org/topic/6677454/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq：98人自己的67", url: "https://www.cc98.org/topic/6677506/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "98上为什么大家都在发yq", url: "https://www.cc98.org/topic/6677554/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] }
      ]
    },
    {
      id: "cc98-life",
      name: "CC98 · 校园日常",
      icon: "hash",
      items: [
        { name: "转专业求助，不想去 yq", url: "https://www.cc98.org/topic/6677509/1", desc: "98 热帖 · 10-28", tags: ["转专业", "98"] },
        { name: "有没有人来分享一下yq的求职经验", url: "https://www.cc98.org/topic/6677448/1", desc: "98 热帖 · 10-28", tags: ["求职", "98"] },
        { name: "看玉泉笑话看到自己身上了", url: "https://www.cc98.org/topic/6677405/1", desc: "98 热帖 · 10-28", tags: ["玉泉", "98"] },
        { name: "小登搬玉泉（tag：yq ）", url: "https://www.cc98.org/topic/6677420/1", desc: "98 热帖 · 10-28", tags: ["玉泉", "98"] },
        { name: "银泉在zjg给到一个夯", url: "https://www.cc98.org/topic/6677421/1", desc: "98 热帖 · 10-28", tags: ["紫金港", "98"] },
        { name: "礼貌问下…", url: "https://www.cc98.org/topic/6676983/1", desc: "98 热帖 · 10-28", tags: ["98"] },
        { name: "今天才发现银泉食堂有二楼", url: "https://www.cc98.org/topic/6677555/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "感觉yq美食节好一般啊", url: "https://www.cc98.org/topic/6677538/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "yq图书馆还有绝版饮料", url: "https://www.cc98.org/topic/6677560/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "学xd一点都不yq", url: "https://www.cc98.org/topic/6677559/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] }
      ]
    },
    {
      id: "cc98-misc",
      name: "CC98 · 其他",
      icon: "hash",
      items: [
        { name: "好笑程度+10086（tag：应奇，拓浙AI，yq）", url: "https://www.cc98.org/topic/6677179/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "我的 claude 帐号，还没通过就要被封禁了吗", url: "https://www.cc98.org/topic/6677091/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "【合订本】dHo=AI，eXEK，建工，AI，至尊", url: "https://www.cc98.org/topic/6676581/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "某社团太像传销组织了咋办", url: "https://www.cc98.org/topic/6675590/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "【公告】关于禁止网络挂人行为的提示", url: "https://www.cc98.org/topic/6560234/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "AI+X 黑客松竞赛加分求问", url: "https://www.cc98.org/topic/6663469/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "“析境杯”量化金融前沿分享 + 现场招聘", url: "https://www.cc98.org/topic/6675659/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "浙大AI极速黑客松", url: "https://www.cc98.org/topic/6492173/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "。", url: "https://www.cc98.org/topic/6593416/1", desc: "98 热帖 · 10-28", tags: ["yq", "98"] },
        { name: "CC98 帖子（无标题）", url: "https://www.cc98.org/topic/6674747/1", desc: "98 热帖 · 10-26", tags: ["yq", "98"] }
      ]
    }
  ]
};
