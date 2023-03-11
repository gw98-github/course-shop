class DeviceResolutionService {
  private isMobile = false

  public onResize() {
    addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.isMobile = false
      } else {
        this.isMobile = true
      }
    })
  }

  public isMobileDevice() {
    return this.isMobile
  }
}

export default new DeviceResolutionService()
