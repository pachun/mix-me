const DEVELOPMENT_ENV = process.env.APP_VARIANT === "development"
const MAIN_ENV = process.env.APP_VARIANT === "main"
const PRODUCTION_ENV = process.env.APP_VARIANT === "production"

const name = () => {
  if (DEVELOPMENT_ENV) {
    return "Mix Me (dev)"
  } else if (MAIN_ENV) {
    return "Mix Me (main)"
  } else {
    return "Mix Me"
  }
}

const bundleIdentifier = () => {
  if (DEVELOPMENT_ENV) {
    return "com.pachun.mixme.development"
  } else if (MAIN_ENV) {
    return "com.pachun.mixme.main"
  } else {
    return "com.pachun.mixme"
  }
}

export default {
  name: name(),
  slug: "mix-me",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 5000,
    url: "https://u.expo.dev/6b860cd9-090b-4bb2-a1ac-b18bb3bea241",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: bundleIdentifier(),
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    package: bundleIdentifier(),
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  extra: {
    eas: {
      projectId: "6b860cd9-090b-4bb2-a1ac-b18bb3bea241",
    },
  },
}
