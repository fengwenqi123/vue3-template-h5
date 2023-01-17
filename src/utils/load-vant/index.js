import { Lazyload } from 'vant'
import { ImagePreview } from 'vant'
export const loadVant = (app) => {
  app.use(Lazyload).use(ImagePreview)
}
