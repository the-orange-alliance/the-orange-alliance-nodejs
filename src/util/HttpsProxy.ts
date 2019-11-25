type HttpsProxy = {
  host: string;
  port: number;
  auth: AuthType | undefined;
};

type AuthType = {
  username: string;
  password: string;
};

export default HttpsProxy;
