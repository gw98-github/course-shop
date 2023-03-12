import { reactive } from 'vue'

class DeviceResolutionService {
  public device: any
  constructor() {
    this.device = reactive({
      isMobile: false,
      change(newValue: boolean) {
        this.isMobile = newValue
      }
    })

    this.onResize()
  }

  public onResize() {
    addEventListener('resize', () => {
      if (window.outerWidth >= 768) {
        this.device.change(false)
      } else {
        this.device.change(true)
      }
    })
  }
}

export default new DeviceResolutionService()
