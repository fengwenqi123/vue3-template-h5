export function createPermissionGuard(router) {
  router.beforeEach(async (to) => {
    console.log(to)
    return true
  })
}
