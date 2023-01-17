import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home/index.vue'
import param from '@/views/home/param/index.vue'
import device from '@/views/home/device/index.vue'
import picture from '@/views/home/picture/index.vue'
import pictureSet from '@/views/home/picture/setting.vue'
// import { createPermissionGuard } from '@/router/permission-guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/param',
          name: 'param',
          component: param,
          meta: {
            title: '参数配置',
            navBar: {
              leftArrow: false,
            },
          },
        },
        {
          path: '/home/device',
          name: 'device',
          component: device,
          meta: {
            title: '设备工况',
            navBar: {
              leftArrow: false,
            },
          },
        },
        {
          path: '/home/picture',
          name: 'picture',
          component: picture,
          meta: {
            title: '图片监控',
            navBar: false,
          },
        },
        {
          path: '/home/pictureSet',
          name: 'pictureSet',
          component: pictureSet,
          meta: {
            title: '图像参数设置',
            navBar: {
              leftArrow: true,
            },
          },
        },
      ],
    },
  ],
})
// createPermissionGuard(router)

export default router
