interface DeviceInfo {
  ua: string;
  browser: {
    name: string;
    version: string;
    major: string;
  };
  cpu: {
    architecture: string;
  };
  device: {};
  engine: {
    name: string;
    version: string;
  };
  os: {
    name: string;
    version: string;
  };
}

export interface UserInfo {
  deviceInfo: DeviceInfo;
  device: {};
  browser: {
    name: string;
    version: string;
    major: string;
  };
  os: {
    name: string;
    version: string;
  };
  ip: string;
}
