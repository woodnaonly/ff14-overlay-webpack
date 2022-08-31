const whatShouldIDo = {
  26073: "右刀", //惩罚击
  26074: "左刀", //惩罚击
  26079: "右刀+地板", //惩罚爆锁
  26080: "左刀+地板", //惩罚爆锁
  26085: "击退接分摊", //惩罚连击
  26088: "分摊", //惩罚连击・圣爆锁
  26089: "AOE+入狱", //光炎监狱
  26090: "AOE+出狱", //监狱閉塞
  26091: "去反色地板", //爆锁
  26094: "赋予冰火状态", //冰火侵蚀
  26095: "去找相反颜色", //执行侵蚀
  26099: "死刑", //痛击
  26100: "AOE", //魔锁乱流
  26154: "AOE", //魔锁乱流
  26102: "右刀→左刀", //惩罚击
  26103: "左刀→右刀", //惩罚击
  26104: "钢铁→月环", //惩罚击
  26105: "钢铁→月环", //惩罚击
  26106: "月环→钢铁", //惩罚击
  26126: "击退死刑+分摊", //惩罚暴锁·圣
  26132: "分摊", //惩罚暴锁：圣暴锁
  26133: "核爆", //惩罚暴锁：炎暴锁
  26143: "侵蚀执行", //侵蚀执行
  26152: "诅咒发动", //诅咒发动
  26153: "小死刑", //痛击
  26262: "场中大圈", //魔力炼成：劫火天焦
  26264: "场边旋转黄圈", //魔力炼成：劫火天焦
  26268: "8人红圈", //魔力炼成：暗的劫火天焦
  26281: "AOE", //黑色不死鸟
  26282: "4小鸟扇形", //群鸟飞翔
  26283: "面前扇形", //暗之瞳
  26285: "俯冲", //火狱之焰
  26286: "俯冲", //火狱之焰
  26287: "俯冲", //火狱之焰
  26290: "双T死刑", //火狱之炎击
  26291: "双T死刑", //火狱之炎击
  26292: "右刀", //右翼焚烧
  26293: "左刀", //左翼焚烧
  26294: "8人黄圈", //热喷射
  26295: "3连3人黄圈", //热喷射
  26296: "AOE", //灰烬之炎
  26297: "站位放鸟", //暗之炎
  26300: "炸火苗", //光之炎
  26301: "炸火苗", //光之炎
  26302: "引导钢铁", //魔力炼成：劫火天焦
  26304: "九连环", //魔力炼成：劫火天焦
  26306: "即将分摊", //魔力炼成：劫火天焦
  26308: "即将散开", //魔力炼成：劫火天焦
  26310: "引导钢铁+注意看黑色", //魔力炼成：炎暗劫火
  26314: "九连环+注意看黑色", //魔力炼成：炎暗劫火
  26340: "大AOE", //死而复生
  26349: "死之超越1外2斜4中间", //死亡命运
  26350: "大AOE", //惊愕之炎
  26352: "AOE", //边狱炎暴
  26353: "三穿一", //边狱之炎
  26357: "引导火龙卷", //边狱之暴
  26360: "前往黑色连线", //地狱黑暗火旋风
  26367: "两两分摊", //狱炎之火花
  26368: "截线T死刑", //狱炎之炎击
  26369: "截线T死刑", //狱炎之炎击
  26370: "右刀 去<-", //右翼焚烧
  26371: "左刀 去->", //左翼焚烧
  26372: "集合放圈", //热喷射
  26373: "集合放圈", //热喷射
  26374: "AOE", //灰烬之炎
  26614: "AOE+水毒生成", //系统化设计
  26615: "直线+面向攻击", //呼吸&白内障
  26616: "直线+面向攻击", //呼吸&白内障
  26617: "直线+面向攻击", //呼吸&白内障
  26622: "直线+面向攻击", //呼吸&白内障
  26625: "距离衰减+直线分摊", //一致性
  26621: "直线+面向攻击", //呼吸&白内障
  26628: "头尾分离+俯冲", //解离
  26630: "头尾分离+俯冲", //解离
  26631: "跳跃击退", //冲击波
  26632: "6人红圈散开", //洪水泛滥
  26633: "6人红圈散开", //洪水泛滥
  26634: "孤独感", //生饵之刻印
  26635: "孤独感", //生饵之刻印
  26636: "三连黄圈", //楔形架设
  26637: "三连黄圈", //楔形架设
  26638: "双T死刑", //双重冲击
  26639: "AOE", //深标记
  26640: "大AOE", //污水泛滥
  26647: "真：去背后", //呼吸&白内障
  26648: "假：去面前", //翅膀&白内障
  26649: "死刑", //优雅掏膛
  26650: "截线+挡枪", //凝聚
  26651: "截线+挡枪", //凝聚
  26652: "截线+挡枪", //凝聚
  26654: "第一次普通对冲", //沟渠漩涡
  26659: "麻将,连线13去对面", //冠军槌击
  26660: "麻将", //冠军槌击
  26661: "麻将", //冠军槌击
  26662: "麻将", //冠军槌击
  26663: "被点远离,H分摊", //多重刻印
  26666: "双H分摊", //灵水弹
  26667: "双H分摊", //灵水弹
  26671: "跳跃击退", //冲击波
  26672: "三连黄圈", //污水喷发
  26673: "三连黄圈", //污水喷发
  26674: "分摊死刑", //双重冲击
  26675: "AOE", //阴暗深渊
  26676: "大AOE", //污水泛滥
  26679: "红圈散开", //污染洪水
  26680: "红圈散开", //污染洪水
  27097: "反职能：撞球", //魔法佩罗：爆裂
  27101: "反职能：踩塔", //魔法佩罗：圆
  27125: "毒散开", //匾画：剧毒
  27126: "火分摊", //匾画：岩浆
  27127: "水击退", //匾画：水溅
  27128: "雷远离", //匾画：闪雷
  27129: "毒散开", //匾画：剧毒
  27130: "火分摊", //匾画：岩浆
  27131: "水击退", //匾画：水溅
  27132: "雷远离", //匾画：闪雷
  27133: "上北A点：击退", //转移：北
  27134: "下南C点：击退", //转移：南
  27135: "右东B点：击退", //转移：东
  27136: "左西D点：击退", //转移：西
  27137: "传跃后击退", //转移侵袭
  27138: "上北A点：扇形", //转移：北
  27139: "下南C点：扇形", //转移：南
  27140: "右东B点：扇形", //转移：东
  27141: "左西D点：扇形", //转移：西
  27142: "传跃后扇形", //转移侵袭
  27143: "前方直线", //地狱穿刺
  27144: "死刑", //优雅掏膛
  27145: "AOE", //装潢
  27147: "AOE", //装潢
  27148: "一运", //荆棘：序幕
  27170: "超级跳+大地摇动", //系带靴踢
  27171: "超级跳+大地摇动", //系带靴踢
  27174: "T近,人群远离", //近思的魔击
  27175: "T远,人群靠近", //远见的魔击
  27177: "放置黄圈", //暗黑创设
  27178: "放置黄圈", //暗黑创设
  27179: "Dot死刑", //心钉
  27180: "AOE", //究极冲击
  27181: "AOE", //灼热流
  27186: "紫顺1,蓝顺3", //荆棘篱
  27191: "AOE", //究极冲击
  27210: "上北A点：扇形", //转移：北
  27211: "下南C点：扇形", //转移：南
  27212: "右东B点：扇形", //转移：东
  27213: "左西D点：扇形", //转移：西
  27214: "传跃后扇形", //转移侵袭
  27215: "前方直线", //地狱穿刺
  27216: "小死刑", //优雅掏膛
  27217: "AOE", //装潢
  27358: "月环", //漩涡风暴
  27691: "狂暴：豪火燃烬", //豪火燃烬
  28078: "上北A点：击退", //转移：北
  28079: "下南C点：击退", //转移：南
  28080: "右东B点：击退", //转移：东
  28081: "左西D点：击退", //转移：西
  28082: "传跃后击退", //转移侵袭
  28098: "对冲 长短分组", //窜流溢出
  28280: "分摊死刑", //半神的双击
  28340: "二运", //荆棘：第二幕
  28341: "三运", //荆棘：第三幕
  28342: "四运", //荆棘：第四幕
  28343: "五运", //荆棘：终幕
  28378: "站位放火", //暗之炎
  28380: "去炸小怪", //光之火
  28382: "大AOE", //死而复生
  30478: "先后面=>最后穿",
  30482: "去前面=>立即穿",
  30486: "散开=>放圈=>治疗分摊组",
  30487: "治疗分摊组=>放圈=>散开",
  30455: "射线攻击去对面格",
  30458: "抓抓攻击去屁股后",
  30816: "AoE",
  30858: "分摊死刑",
  30865: "治疗分摊组",
  30825: "水波",
  30855: "双死刑",
  30859: "引导黄圈",
  30861: "X字分散",
  30863: "黑白格散开",
  30849: "先去左右",
  30851: "先去前后",
};
export { whatShouldIDo };
console.log("指示内容更新日期: 2022.9.1");
