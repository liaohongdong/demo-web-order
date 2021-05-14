/*
 * @Author: hongdong.liao
 * @Date: 2021-01-08 09:54:38
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 18:22:28
 * @FilePath: /microDemo/demo-web/demo-web-order/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * 此处配置子应用自身的详情页面
 * 其他列表页面根据views中文件路径动态加载
 */
const routes = [
  {
    path: '/autoDisposeOrder',
    name: '自动处理订单',
    component: () =>
      import(
        /* webpackChunkName: "autoDisposeOrder" */ '@/views/autoDisposeOrder.vue'
      )
  },
  {
    path: '/delayedShipmentReport',
    name: '延迟发货报告',
    component: () =>
      import(
        /* webpackChunkName: "delayedShipmentReport" */ '@/views/delayedShipmentReport.vue'
      )
  },
  {
    path: '/orderList',
    name: '订单列表',
    component: () =>
      import(
        /* webpackChunkName: "orderList" */ '@/views/orderList.vue'
      )
  },
  {
    path: '/orderRecord',
    name: '订单记录',
    component: () =>
      import(
        /* webpackChunkName: "orderRecord" */ '@/views/orderRecord.vue'
      )
  }
]

export default routes
