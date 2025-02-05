# 归子莫的科技周刊#5：关关难过关关过

> 本周刊[开源](https://github.com/guizimo/weekly)，欢迎[投稿](https://github.com/guizimo/weekly/issues)。
>
> 刊期：2025.1.26 - 2025.2.1。[原文地址](https://blog.guizimo.com/archives/tywHKzRu)。

## 封面图

![即将落幕的太阳](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205104618575.png)

平原上即将落幕的太阳。

## 关关难过关关过

关关难过关关过，是中国文化中“韧性生存”的缩影，既是对现实的清醒认知（难），也是对生命力的笃定信任（过）。它不美化苦难，却赋予人一种“悲壮前行”的勇气，与“明知不可为而为之”“行到水穷处，坐看云起时”等精神一脉相承。

**年关已至，行且欢歌**。

## 科技新闻

### 1、深度求索 DeepSeek 登顶苹果 App Store 免费应用榜

IT之家 | [阅读原文](https://www.ithome.com/0/827/472.htm)

![DeepSeek](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250127173704273.png)

幻方量化旗下 AI 公司深度求索（DeepSeek）本月（1 月 20 日）正式发布 [DeepSeek-R1](https://www.ithome.com/0/826/014.htm) 模型，并同步开源模型权重。据官方介绍，DeepSeek-R1 在后训练阶段大规模使用了强化学习技术，在仅有极少标注数据的情况下，极大提升了模型推理能力。在数学、代码、自然语言推理等任务上，性能比肩 OpenAI o1 正式版。

### 2、豆包团队视频生成新突破：无需语言模型，仅凭“视觉”就能学习复杂任务

量子位 | [阅读原文](https://www.qbitai.com/2025/01/249194.html)

![豆包团队视频生成新突破：无需语言模型，仅凭“视觉”就能学习复杂任务](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/79ee6ac4e66de65160179d6a384aa5b0.png)

现有的视频生成模型，大多依赖语言或标签数据学习知识，很少涉及纯视觉信号的学习，比如Sora。

然而，语言并不能捕捉真实世界中的所有知识，例如，折纸、打领结等复杂任务难以通过语言清晰表达。

**那么，模型能否不依赖语言模型，从纯视觉视角学习知识、认知世界进而掌握推理和规划等能力？**

现在，豆包大模型团队联合北京交通大学、中国科学技术大学提出了**VideoWorld**。

### 3、xAI Grok-3 有望下周登场，推理性能超 OpenAI o1

量子位 | [阅读原文](https://www.oschina.net/news/331081/tailwindcss-v4)

![Grok-3](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250127174250066.png)

科技媒体 testingcatalog 今天（1 月 27 日）发布博文，报道称 xAI 官方虽然尚未公布，但 Grok-3 已短暂现身独立平台和 X 平台，开启内部测试，有望下周正式发布。

测试结果显示其在回答问题方面表现出色，甚至超越了 o1 和 DeepSeek R1 等模型。种种迹象表明，Grok-3 的正式发布近在咫尺，**或将成为迄今为止最先进的 AI 模型。**

### 4、DeepSeek甚至绕过了CUDA

量子位 | [阅读原文](https://www.qbitai.com/2025/01/249537.html)

![DeepSeek](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205112614536.png)

硬件媒体Tom‘s Hardware带来开年最新热议：**DeepSeek甚至绕过了CUDA，使用更底层的编程语言做优化。**

### 5、阿里除夕发布Qwen2.5-Max反超DeepSeek V3，一句话开发小游戏

量子位 | [阅读原文](https://www.qbitai.com/2025/01/249587.html)

![Qwen2.5-Max](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205112827580.png)

就在春晚直播进行时，**阿里通义Qwen发布新春节礼第三弹**：**Qwen2.5-Max**来袭，多个基准测试中超越当红炸子鸡DeepSeek V3。

## 有趣的工具

### 开源

**1、open-webui**

掘金 | [地址](https://github.com/open-webui/open-webui)

![open-webui](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205143931661.png)

User-friendly AI Interface (Supports Ollama, OpenAI API, ...)

一个开源的AI相关的 API 的聚合 Web 端的 UI 界面。

**2、GPT Academic**

小红书 | [地址](https://github.com/binary-husky/gpt_academic)

![GPT Academic](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205144624912.png)

为GPT/GLM等LLM大语言模型提供实用化交互接口，特别优化论文阅读/润色/写作体验，模块化设计，支持自定义快捷按钮&函数插件，支持Python和C++等项目剖析&自译解功能，PDF/LaTex论文翻译&总结功能，支持并行问询多种LLM模型，支持chatglm3等本地模型。接入通义千问, deepseekcoder, 讯飞星火, 文心一言, llama2, rwkv, claude2, moss等。

**3、ToolJet**

掘金 | [地址](https://github.com/ToolJet/ToolJet)

![ToolJet](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205173154749.png)

ToolJet 是一个开源的低代码平台，可帮助您以更少的资源构建和维护整个内部工具堆栈。创建可扩展、安全和企业就绪的工具。

**4、DeepSeekAI**

Github | [地址](https://github.com/DeepLifeStudio/DeepSeekAI)

![DeepSeekAI](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205173439290.png)

DeepSeekAI 是一款非官方的浏览器扩展插件，基于 [DeepSeek](https://deepseek.com/) API，为用户提供智能的网页交互体验。通过简单的文本选择，即可获得 AI 驱动的实时响应，让您的网页浏览体验更加智能和高效。

**5、d2**

Github | [地址](https://github.com/terrastruct/d2)

![image-20250205173647924](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205173647924.png)

D2 是一种将文本转换为图表的现代图表脚本语言。

### 有用的工具

**1、Trae**

发现 | [地址](https://www.trae.ai/)

![image-20250205160232786](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205160232786.png)

Trae is an adaptive AI IDE that transforms how you work, collaborating with you to run faster.

字节的又一个 AI 编辑工具，界面很清爽，可以试用一下。

**2、Halo**

发现 | [地址](https://www.halo.run/)

![Halo](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205163314293.png)

一个快速建站的博客平台，商店有很多免费的主题。

**3、Follow**

发现 | [地址](https://follow.is/)

![Follow](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205174556710.png)

一款 RSS 工具，界面比较的美观大气。

**4、Content Core**

发现 | [地址](https://contentcore.xyz/)

![image-20250205174434954](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205174434954.png)

一款 3D 的展示工具。

**5、sampler**

发现 | [地址](https://sampler.dev/)

![image-20250205174805213](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205174805213.png)

一个很酷的命令行工具。

## 输入

### 文章

**1、漂白还是“白嫖”——数字时代，我们如何面对文艺创作“抄袭”困境？**

少数派 | [地址](https://sspai.com/post/95861)

文艺创作领域的发展和追求方向使得创作行为的合法性判断日趋复杂，可能文艺创作的发展速度将与法律制度供给的步伐拉开更多的距离。但在文化工业与数字文明的双重语境下，我们究竟需要怎样的创作生态？或许答案并是非此即彼的二元对立，而在于构建动态平衡的治理体系。

### 电影

**1、【送你一朵小红花】**

![送你一朵小红花](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20250205110643106.png)

该影片于 2020 年 12 月 31 日在中国内地上映。影片以两个抗癌家庭为背景，讲述了患有脑瘤的韦一航手术后变得忧郁孤僻，在病友追思会上结识了同样患癌但乐观开朗的马小远。马小远带着韦一航在城市里 “环游世界”，帮助他打开心扉。然而韦一航病情出现反复，两人一度闹僵，后来韦一航向马小远表明心意后重归于好。在前往青海寻找韦一航梦中之地的途中，马小远癌症复发离世。一年后，韦一航独自前往青海，仿佛看到了马小远和另一个自己在没有痛苦的平行世界中走向彼此。

身体健康是一种资本，而积极面对病痛更是一种爱人的能力。

## 碎碎念

1、春节期间的一周都在拜年之中，基本都是玩老家的土特产，是什么都的都懂。

2、我发现一个问题，写周刊的时间被压缩的越短，越容易使得内容显得瘦小。久而久之就会失去周刊的意义，因为没了内容了，就无法支撑周刊了。

3、湖南不语，只是一味的放爆竹。因为初一，全是雾霾。熟悉的爆竹声，吓走了年兽，带来了热闹与团圆。

4、见证幸福也是一种幸福，感觉到了我这个年纪了，周边的同学和朋友都开始进入到这个阶段了，这种见证幸福的场面估计会越来越多了。

5、愿天下有情人总成眷属。世间唯有痴情不容耻笑！
