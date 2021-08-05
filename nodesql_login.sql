/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50730
Source Host           : localhost:3306
Source Database       : nodesql_login

Target Server Type    : MYSQL
Target Server Version : 50730
File Encoding         : 65001

Date: 2021-06-13 17:49:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `buy`
-- ----------------------------
DROP TABLE IF EXISTS `buy`;
CREATE TABLE `buy` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `data` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `number` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `much` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `classes` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `supplier` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `brand` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of buy
-- ----------------------------
INSERT INTO `buy` VALUES ('1', '2021-05-16', '可乐', '200', '500ml', '3.50', '饮料类', '商品批发市场', '百事');
INSERT INTO `buy` VALUES ('2', '2021-04-08', '小米锅巴', '200', '200g', '2.50', '零食类', '商品批发市场', '琥珀');
INSERT INTO `buy` VALUES ('3', '2021-04-08', '玉米味香肠', '200', '200g', '2.50', '零食类', '商品批发市场', '双汇');
INSERT INTO `buy` VALUES ('4', '2021-04-08', '抹茶曲奇', '200', '102g', '6.00', '零食类', '商品批发市场', '德芙');
INSERT INTO `buy` VALUES ('5', '2021-04-08', '果粒橙', '200', '500ml', '4.50', '饮料类', '商品批发市场', '美汁源');
INSERT INTO `buy` VALUES ('6', '2021-04-08', '冰红茶', '200', '500ml', '3.50', '饮料类', '商品批发市场', '康师傅');
INSERT INTO `buy` VALUES ('7', '2021-04-08', '茉莉绿茶', '200', '500ml', '4.50', '饮料类', '商品批发市场', '康师傅');
INSERT INTO `buy` VALUES ('8', '2021-04-08', '维他柠檬茶', '200', '500ml', '5.50', '饮料类', '商品批发市场', '可口可乐');
INSERT INTO `buy` VALUES ('9', '2021-04-08', '牙膏', '200', '200g', '8.50', '生活用品类', '商品批发市场', '佳洁士');
INSERT INTO `buy` VALUES ('10', '2021-04-08', '洗发乳', '200', '900g', '26.00', '生活用品类', '商品批发市场', '力士');
INSERT INTO `buy` VALUES ('11', '2021-04-08', '婴儿洗发精', '200', '608ml', '16.00', '生活用品类', '商品批发市场', '强生');
INSERT INTO `buy` VALUES ('12', '2021-04-08', '湿纸巾', '200', '600g', '9.00', '生活用品类', '商品批发市场', '强生');
INSERT INTO `buy` VALUES ('13', '2021-04-18', '薯片', '200', '208g', '4.50', '零食类', '商品批发市场', '乐事');
INSERT INTO `buy` VALUES ('14', '2021-04-14', '洗衣液', '200', '800ml', '9.90', '生活用品类', '商品批发市场', '蓝月亮');
INSERT INTO `buy` VALUES ('15', '2021-06-08', '卫生纸', '200', '1.5kg', '15.00', '生活用品类', '商品批发市场', '清风');
INSERT INTO `buy` VALUES ('16', '2021-04-08', '士力架', '200', '105g', '4.50', '零食类', '商品批发市场', '德芙');
INSERT INTO `buy` VALUES ('17', '2021-04-21', '大辣片', '200', '104g', '3.50', '零食类', '商品批发市场', '贤哥');
INSERT INTO `buy` VALUES ('18', '2021-06-16', '雪碧', '200', '500ml', '3.50', '饮料类', '商品批发市场', '可口可乐');
INSERT INTO `buy` VALUES ('19', '2021-06-10', '冰激凌', '200', '208g', '4.50', '零食类', '雪糕批发市场', '巧乐兹');
INSERT INTO `buy` VALUES ('25', '2021-06-10', '巧克力', '200', '200g', '8.00', '零食类', '商品批发市场', '德芙');
INSERT INTO `buy` VALUES ('26', '2021-06-18', '洗发水', '300', '600ml', '15.00', '生活用品类', '商品批发市场', '力士');

-- ----------------------------
-- Table structure for `daohang`
-- ----------------------------
DROP TABLE IF EXISTS `daohang`;
CREATE TABLE `daohang` (
  `id` int(10) NOT NULL,
  `name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of daohang
-- ----------------------------
INSERT INTO `daohang` VALUES ('1', '首页', '/index');
INSERT INTO `daohang` VALUES ('2', '销售管理', '/stats');
INSERT INTO `daohang` VALUES ('3', '收银台', '/check');
INSERT INTO `daohang` VALUES ('4', '采购管理', '/buy');
INSERT INTO `daohang` VALUES ('5', '库存管理', '/store');
INSERT INTO `daohang` VALUES ('6', '反馈管理', '/evaluate');
INSERT INTO `daohang` VALUES ('7', '用户管理', '/user/list');
INSERT INTO `daohang` VALUES ('8', '权限管理', '/role');

-- ----------------------------
-- Table structure for `evaluate`
-- ----------------------------
DROP TABLE IF EXISTS `evaluate`;
CREATE TABLE `evaluate` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `supplier` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `pingjia` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `main` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of evaluate
-- ----------------------------
INSERT INTO `evaluate` VALUES ('1', '冰红茶', '商品批发市场', '比较满意', '日期新鲜，运输快速。加油！！！下次更好！！', '运输方面');
INSERT INTO `evaluate` VALUES ('2', '果汁', '旅游商品批发城', '不满意', '沉淀物太多，顾客反响不好！！！', '质量方面');
INSERT INTO `evaluate` VALUES ('3', '小米锅巴', '旅游商品批发城', '还可以', '有商品出现破损，下次运输，请提醒运输司机途中请注意！！', '运输方向');
INSERT INTO `evaluate` VALUES ('4', '士力架', '旅游商品批发城', '不满意', '商品出现破损现象，希望运输下次注意！！', '质量方面');
INSERT INTO `evaluate` VALUES ('6', '洗发水', '商品批发市场', '不满意', '日期临近！！', '生产日期或保质期方面');
INSERT INTO `evaluate` VALUES ('7', '商品批发市场', '商品批发市场', '还可以', '不错！！', '质量方面');

-- ----------------------------
-- Table structure for `role_menu_rel`
-- ----------------------------
DROP TABLE IF EXISTS `role_menu_rel`;
CREATE TABLE `role_menu_rel` (
  `rel_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `menu_id` int(11) NOT NULL COMMENT '菜单id',
  PRIMARY KEY (`rel_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7820 DEFAULT CHARSET=utf8 COMMENT='角色菜单关联表';

-- ----------------------------
-- Records of role_menu_rel
-- ----------------------------
INSERT INTO `role_menu_rel` VALUES ('7771', '1', '1');
INSERT INTO `role_menu_rel` VALUES ('7772', '1', '2');
INSERT INTO `role_menu_rel` VALUES ('7773', '1', '3');
INSERT INTO `role_menu_rel` VALUES ('7774', '1', '4');
INSERT INTO `role_menu_rel` VALUES ('7775', '1', '5');
INSERT INTO `role_menu_rel` VALUES ('7776', '1', '6');
INSERT INTO `role_menu_rel` VALUES ('7777', '1', '7');
INSERT INTO `role_menu_rel` VALUES ('7778', '1', '8');
INSERT INTO `role_menu_rel` VALUES ('7812', '3', '1');
INSERT INTO `role_menu_rel` VALUES ('7813', '3', '6');
INSERT INTO `role_menu_rel` VALUES ('7817', '2', '1');
INSERT INTO `role_menu_rel` VALUES ('7818', '2', '2');
INSERT INTO `role_menu_rel` VALUES ('7819', '2', '3');

-- ----------------------------
-- Table structure for `sales`
-- ----------------------------
DROP TABLE IF EXISTS `sales`;
CREATE TABLE `sales` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `number` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `much` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `classes` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sales
-- ----------------------------
INSERT INTO `sales` VALUES ('35', '冰激凌', '1', '208g', '4.50', '零食类');
INSERT INTO `sales` VALUES ('36', '雪碧', '2', '500ml', '3.50', '饮料类');
INSERT INTO `sales` VALUES ('37', '大辣片', '3', '104g', '3.50', '零食类');
INSERT INTO `sales` VALUES ('38', '士力架', '4', '105g', '4.50', '零食类');
INSERT INTO `sales` VALUES ('39', '卫生纸', '5', '1.5kg', '15.00', '生活用品类');
INSERT INTO `sales` VALUES ('40', '洗衣粉', '6', '506g', '9.90', '生活用品类');
INSERT INTO `sales` VALUES ('41', '薯片', '7', '208g', '4.50', '零食类');
INSERT INTO `sales` VALUES ('42', '湿纸巾', '8', '600g', '9.00', '生活用品类');
INSERT INTO `sales` VALUES ('43', '婴儿洗发精', '9', '900g', '12.00', '生活用品类');
INSERT INTO `sales` VALUES ('50', '洗发水', '2', '600ml', '15.00', '生活用品类');
INSERT INTO `sales` VALUES ('51', '可乐', '1', '500ml', '3.50', '饮料类');
INSERT INTO `sales` VALUES ('52', '果粒橙', '10', '500ml', '4.50', '饮料类');
INSERT INTO `sales` VALUES ('53', '冰激凌', '8', '208g', '4.50', '零食类');
INSERT INTO `sales` VALUES ('54', '雪碧', '1', '500ml', '3.50', '饮料类');

-- ----------------------------
-- Table structure for `shopcar`
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `much` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `number` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT '1',
  `classes` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of shopcar
-- ----------------------------

-- ----------------------------
-- Table structure for `store`
-- ----------------------------
DROP TABLE IF EXISTS `store`;
CREATE TABLE `store` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `data` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `number` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `much` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `classes` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of store
-- ----------------------------
INSERT INTO `store` VALUES ('1', '2021-05-16', '可乐', '197', '500ml', '3.50', '饮料类');
INSERT INTO `store` VALUES ('2', '2021-04-08', '小米锅巴', '200', '200g', '2.50', '零食类');
INSERT INTO `store` VALUES ('3', '2021-04-08', '玉米味香肠', '200', '200g', '2.50', '零食类');
INSERT INTO `store` VALUES ('4', '2021-04-08', '抹茶曲奇', '200', '102g', '6.00', '零食类');
INSERT INTO `store` VALUES ('5', '2021-04-08', '果粒橙', '199', '500ml', '4.50', '饮料类');
INSERT INTO `store` VALUES ('6', '2021-04-08', '冰红茶', '200', '500ml', '4.55', '零食类');
INSERT INTO `store` VALUES ('7', '2021-04-08', '茉莉绿茶', '200', '500ml', '4.50', '饮料类');
INSERT INTO `store` VALUES ('8', '2021-04-08', '维他柠檬茶', '200', '500ml', '5.50', '饮料类');
INSERT INTO `store` VALUES ('9', '2021-04-08', '牙膏', '200', '200g', '8.50', '生活用品类');
INSERT INTO `store` VALUES ('10', '2021-04-08', '洗发乳', '200', '900g', '26.00', '生活用品类');
INSERT INTO `store` VALUES ('11', '2021-04-08', '婴儿洗发精', '199', '900g', '12.00', '生活用品类');
INSERT INTO `store` VALUES ('12', '2021-04-08', '湿纸巾', '199', '600g', '9.00', '生活用品类');
INSERT INTO `store` VALUES ('13', '2021-04-18', '薯片', '199', '208g', '4.50', '零食类');
INSERT INTO `store` VALUES ('14', '2021-05-10', '洗衣粉', '199', '506g', '9.90', '生活用品类');
INSERT INTO `store` VALUES ('15', '2021-06-08', '卫生纸', '199', '1.5kg', '15.00', '生活用品类');
INSERT INTO `store` VALUES ('16', '2021-04-08', '士力架', '199', '105g', '4.50', '零食类');
INSERT INTO `store` VALUES ('17', '2021-04-21', '大辣片', '199', '104g', '3.50', '零食类');
INSERT INTO `store` VALUES ('18', '2021-06-16', '雪碧', '197', '500ml', '3.50', '饮料类');
INSERT INTO `store` VALUES ('19', '2021-06-10', '冰激凌', '198', '208g', '4.50', '零食类');
INSERT INTO `store` VALUES ('30', '2021-06-18', '洗发水', '199', '600ml', '15.00', '生活用品类');
INSERT INTO `store` VALUES ('32', '2021-06-09', '矿泉水', '300', '500ml', '2.00', '饮料类');

-- ----------------------------
-- Table structure for `usermessage`
-- ----------------------------
DROP TABLE IF EXISTS `usermessage`;
CREATE TABLE `usermessage` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  `age` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `data` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `job` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `sex` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of usermessage
-- ----------------------------
INSERT INTO `usermessage` VALUES ('1', 'admin', '123456', '18', '111111111@qq.com', '湖北武汉', '17689787656', '2021-04-08', '1', '男');
INSERT INTO `usermessage` VALUES ('2', '李依依', '123456', '19', '222222222@qq.com', '湖北武汉', '17673892345', '2021-04-08', '2', '女');
INSERT INTO `usermessage` VALUES ('3', '吴二尔', '123456', '20', '333333333@qq.com', '湖北武汉', '33333333333', '2021-04-08', '2', '女');
INSERT INTO `usermessage` VALUES ('4', '姜姗姗', '123456', '21', '444444444@qq.com', '湖北武汉', '44444444444', '2021-04-08', '2', '女');
INSERT INTO `usermessage` VALUES ('5', '赵思思', '123456', '22', '555555555@qq.com', '湖北武汉', '55555555555', '2021-04-08', '2', '女');
INSERT INTO `usermessage` VALUES ('6', '徐慧慧', '123456', '24', '1111@qq.com', '湖北武汉', '66666666666', '2021-04-08', '3', '女');
INSERT INTO `usermessage` VALUES ('9', '中的', '123456', '22', '233@qq.com', '湖北', '1234567643', '2021-06-11', '3', '女');

-- ----------------------------
-- Table structure for `user_role`
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `role_name` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '角色名称',
  `remark` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='角色';

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES ('1', '超市管理员', '超市管理员可以操作整个系统，管理商品进销存的业务以及系统用户信息以及系统权限的管理');
INSERT INTO `user_role` VALUES ('2', '店员', '店员需要做好超市销售工作。');
INSERT INTO `user_role` VALUES ('3', '供应商', '供货商可以登录系统查看商品反馈，得到反馈后对工作做出整改');
