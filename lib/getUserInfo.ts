import { UAParser } from "ua-parser-js";

export const getUserInfo = (req: Request) => {
  console.log(req.headers.get("user-agent"));
  const userAgent = req.headers.get("user-agent") as string;
  const ip = req.headers.get("x-forwarded-for");

  const parser = new UAParser();
  parser.setUA(userAgent);
  const deviceInfo = parser.getResult();

  return {
    deviceInfo,
    browser: deviceInfo.browser,
    os: deviceInfo.os,
    ip,
  };
};
