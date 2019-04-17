export const ARTICLE_SOURCE = [
  {
    label: "原创",
    value: 0,
    code: "original",
    isActive: true
  },
  {
    label: "转载",
    value: 1,
    code: "reprint",
    isActive: false
  },
  {
    label: "混撰",
    value: 2,
    code: "hybrid",
    isActive: false
  },
  {
    label: "翻译",
    value: 3,
    code: "translate",
    isActive: false
  }
];

export const FN_CATEGORYS = [
  {
    label: "前端技术",
    value: 0,
    code: "icon-qianduan",
    isActive: true
  },
  {
    label: "后端技术",
    value: 1,
    code: "icon-fuwuqi",
    isActive: false
  },
  {
    label: "情感文字",
    value: 2,
    code: "icon-shenghuo",
    isActive: false
  },
  {
    label: "人在路上",
    value: 3,
    code: "icon-travel",
    isActive: false
  }
];

export const FN_MESSAGE = {
  waifu: {
    console_open_msg: ["哈哈，你打开了控制台，是想要看看我的秘密吗？"],
    copy_message: ["你都复制了些什么呀，转载要记得加上出处哦"],
    screenshot_message: ["照好了嘛，是不是很可爱呢？"],
    hidden_message: ["我们还能再见面的吧…"],
    load_rand_textures: ["我还没有其他衣服呢", "我的新衣服好看嘛"],
    hour_tips: {
      "t5-7": ["早上好！一日之计在于晨，美好的一天就要开始了"],
      "t7-11": ["上午好！工作顺利嘛，不要久坐，多起来走动走动哦！"],
      "t11-14": ["中午了，工作了一个上午，现在是午餐时间！"],
      "t14-17": ["午后很容易犯困呢，今天的运动目标完成了吗？"],
      "t17-19": ["傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~"],
      "t19-21": ["晚上好，今天过得怎么样？"],
      "t21-23": ["已经这么晚了呀，早点休息吧，晚安~"],
      "t23-5": ["你是夜猫子呀？这么晚还不睡觉，明天起的来嘛"],
      default: ["嗨~ 快来逗我玩吧！"]
    },
    referrer_message: {
      localhost: [
        '欢迎阅读<span style="color:#0099cc;">『',
        "』</span>",
        " - "
      ],
      baidu: [
        'Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">',
        "</span> 找到的我吗？"
      ],
      so: [
        'Hello! 来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">',
        "</span> 找到的我吗？"
      ],
      google: [
        'Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『',
        "』</span>",
        " - "
      ],
      default: ['Hello! 来自 <span style="color:#0099cc;">', "</span> 的朋友"],
      none: ['欢迎阅读<span style="color:#0099cc;">『', "』</span>", " - "]
    },
    referrer_hostname: {
      "baidu.com": ["百度"],
      "www.google.net": ["谷歌"]
    },
    model_message: {
      "1": ["来自 Potion Maker 的 Pio 酱 ~"],
      "2": ["来自 Potion Maker 的 Tia 酱 ~"]
    },
    hitokoto_api_message: {
      "lwl12.com": [
        '这句一言来自 <span style="color:#0099cc;">『{source}』</span>',
        '，是 <span style="color:#0099cc;">{creator}</span> 投稿的',
        "。"
      ],
      "fghrsh.net": [
        '这句一言出处是 <span style="color:#0099cc;">『{source}』</span>，是 <span style="color:#0099cc;">FGHRSH</span> 在 {date} 收藏的！'
      ],
      "jinrishici.com": [
        '这句诗词出自 <span style="color:#0099cc;">《{title}》</span>，是 {dynasty}诗人 {author} 创作的！'
      ],
      "hitokoto.cn": [
        '这句一言来自 <span style="color:#0099cc;">『{source}』</span>，是 <span style="color:#0099cc;">{creator}</span> 在 hitokoto.cn 投稿的。'
      ]
    }
  },
  mouseover: [
    {
      selector: ".container a[href^='http']",
      text: ['要看看 <span style="color:#0099cc;">{text}</span> 么？']
    },
    {
      selector: ".fui-home",
      text: ["点击前往首页，想回到上一页可以使用浏览器的后退功能哦"]
    },
    {
      selector: ".fui-chat",
      text: ["一言一语，一颦一笑。一字一句，一颗赛艇。"]
    },
    {
      selector: ".fui-eye",
      text: ["嗯··· 要切换 看板娘 吗？"]
    },
    {
      selector: ".fui-user",
      text: ["喜欢换装 Play 吗？"]
    },
    {
      selector: ".fui-photo",
      text: ["要拍张纪念照片吗？"]
    },
    {
      selector: ".fui-info-circle",
      text: ["这里有关于我的信息呢"]
    },
    {
      selector: ".fui-cross",
      text: ["你不喜欢我了吗..."]
    },
    {
      selector: "#tor_show",
      text: ["翻页比较麻烦吗，点击可以显示这篇文章的目录呢"]
    },
    {
      selector: "#comment_go",
      text: ["想要去评论些什么吗？"]
    },
    {
      selector: "#night_mode",
      text: ["深夜时要爱护眼睛呀"]
    },
    {
      selector: "#qrcode",
      text: ["手机扫一下就能继续看，很方便呢"]
    },
    {
      selector: ".comment_reply",
      text: ["要吐槽些什么呢"]
    },
    {
      selector: "#back-to-top",
      text: ["回到开始的地方吧"]
    },
    {
      selector: "#author",
      text: ["该怎么称呼你呢"]
    },
    {
      selector: "#mail",
      text: ["留下你的邮箱，不然就是无头像人士了"]
    },
    {
      selector: "#url",
      text: ["你的家在哪里呢，好让我去参观参观"]
    },
    {
      selector: "#textarea",
      text: ["认真填写哦，垃圾评论是禁止事项"]
    },
    {
      selector: ".OwO-logo",
      text: ["要插入一个表情吗"]
    },
    {
      selector: "#csubmit",
      text: ["要[提交]^(Commit)了吗，首次评论需要审核，请耐心等待~"]
    },
    {
      selector: ".ImageBox",
      text: ["点击图片可以放大呢"]
    },
    {
      selector: "input[name=s]",
      text: ["找不到想看的内容？搜索看看吧"]
    },
    {
      selector: ".previous",
      text: ["去上一页看看吧"]
    },
    {
      selector: ".next",
      text: ["去下一页看看吧"]
    },
    {
      selector: ".dropdown-toggle",
      text: ["这里是菜单"]
    },
    {
      selector: "c-player a.play-icon",
      text: ["想要听点音乐吗"]
    },
    {
      selector: "c-player div.time",
      text: ['在这里可以调整<span style="color:#0099cc;">播放进度</span>呢']
    },
    {
      selector: "c-player div.volume",
      text: ['在这里可以调整<span style="color:#0099cc;">音量</span>呢']
    },
    {
      selector: "c-player div.list-button",
      text: ['<span style="color:#0099cc;">播放列表</span>里都有什么呢']
    },
    {
      selector: "c-player div.lyric-button",
      text: ['有<span style="color:#0099cc;">歌词</span>的话就能跟着一起唱呢']
    },
    {
      selector: ".waifu #live2d",
      text: ["干嘛呢你，快把手拿开", "鼠…鼠标放错地方了！"]
    },
    {
      selector: ".post-body img",
      text: ["文章特色配图好看嘛？"]
    },
    {
      selector: ".fe-sidebar__gitee",
      text: ["我命令你给主人个star，哦不是...求求你了~~"]
    },
    {
      selector: "fancybox.image img",
      text: ["点击图片可以放大了噢~~"]
    },
    {
      selector: ".fe-sidebar__index",
      text: ["要返回主页嘛？"]
    },
    {
      selector: ".fe-sidebar__about",
      text: ["想要了解更多关于主人，那就再深入点吧~~"]
    },
    {
      selector: ".fe-sidebar__item-list",
      text: ["无敌换色 赤橙黄绿青蓝紫 来玩玩~~"]
    },
    {
      selector: ".meta-footer__chat-item",
      text: ["主人的社交ID，不关注下嘛？"]
    },
    {
      selector: ".reward-content",
      text: ["客官大人，是要准备给主人打赏吗？谢谢啦~~"]
    },
    {
      selector: ".back-to-top",
      text: ["回到顶部去吧~~"]
    },
    {
      selector: "#post-box input[name=name]",
      text: ["敢问客官尊姓大名~~"]
    },
    {
      selector: "#post-box input[name=email]",
      text: ["留下你的邮箱呗~这样我才能提醒到你呢~"]
    },
    {
      selector: "#post-box input[name=url]",
      text: ["客官的博客在哪儿呢？我要去看看。"]
    },
    {
      selector: "#post-box .markdown-editor",
      text: ["嘛，东西可以乱吃，话可不能乱说噢~~"]
    },
    {
      selector: ".reference .like",
      text: ["客官要给个大大的喜欢吗 小的感激不尽..."]
    },
    {
      selector: "#post-box .submit",
      text: ["写好了就回复吧！我会第一时间通知主人的~~"]
    }
  ],
  click: [
    {
      selector: ".waifu #live2d",
      text: [
        "是…是不小心碰到了吧",
        "萝莉控是什么呀",
        "你看到我的小熊了吗",
        "再摸的话我可要报警了！⌇●﹏●⌇",
        "110吗，这里有个变态一直在摸我(ó﹏ò｡)"
      ]
    }
  ],
  seasons: [
    {
      date: "01/01",
      text: [
        '<span style="color:#0099cc;">元旦</span>了呢，新的一年又开始了，今年是{year}年~'
      ]
    },
    {
      date: "02/14",
      text: [
        '又是一年<span style="color:#0099cc;">情人节</span>，{year}年找到对象了嘛~'
      ]
    },
    {
      date: "03/08",
      text: ['今天是<span style="color:#0099cc;">妇女节</span>！']
    },
    {
      date: "03/12",
      text: ['今天是<span style="color:#0099cc;">植树节</span>，要保护环境呀']
    },
    {
      date: "04/01",
      text: [
        '悄悄告诉你一个秘密~<span style="background-color:#34495e;">今天是愚人节，不要被骗了哦~</span>'
      ]
    },
    {
      date: "05/01",
      text: [
        '今天是<span style="color:#0099cc;">五一劳动节</span>，计划好假期去哪里了吗~'
      ]
    },
    {
      date: "06/01",
      text: [
        '<span style="color:#0099cc;">儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…'
      ]
    },
    {
      date: "09/03",
      text: [
        '<span style="color:#0099cc;">中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。'
      ]
    },
    {
      date: "09/10",
      text: [
        '<span style="color:#0099cc;">教师节</span>，在学校要给老师问声好呀~'
      ]
    },
    {
      date: "10/01",
      text: [
        '<span style="color:#0099cc;">国庆节</span>，新中国已经成立69年了呢'
      ]
    },
    {
      date: "11/05-11/12",
      text: [
        '今年的<span style="color:#0099cc;">双十一</span>是和谁一起过的呢~'
      ]
    },
    {
      date: "12/20-12/31",
      text: [
        '这几天是<span style="color:#0099cc;">圣诞节</span>，主人肯定又去剁手买买买了~'
      ]
    }
  ]
};
