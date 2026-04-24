class SanityMeter {
  constructor() {
    this.sanityLevel = 100; // 100 is fully sane
    this.darknessExposure = 0;
    this.flashlightBattery = 100;
    this.isFlickering = false;
    this.flickerRate = 0.1; // Rate at which the flashlight flickers
    this.charmaticAberrationEffect = false;
    this.cameraShakeEffect = false;
    this.ctrcScanlines = false;
  }

  update(deltaTime) {
    this.checkSanity()
    this.applyEffects();
  }

  checkSanity() {
    // Update sanity level based on conditions
    this.sanityLevel -= this.darknessExposure * 0.1;
    this.sanityLevel -= this.isFlickering ? this.flickerRate : 0;
    this.sanityLevel = Math.max(0, this.sanityLevel);
  }

  applyEffects() {
    if (this.sanityLevel < 30) {
      this.charmaticAberrationEffect = true;
      this.cameraShakeEffect = true;
    } else {
      this.charmaticAberrationEffect = false;
      this.cameraShakeEffect = false;
    }

    if (this.sanityLevel < 50) {
      this.ctrcScanlines = true;
    } else {
      this.ctrcScanlines = false;
    }
  }

  setDarknessExposure(value) {
    this.darknessExposure = value;
  }

  drainFlashlight(value) {
    this.flashlightBattery -= value;
    this.flashlightBattery = Math.max(0, this.flashlightBattery);
    this.isFlickering = this.flashlightBattery < 20; // Flicker when battery is low
  }
}