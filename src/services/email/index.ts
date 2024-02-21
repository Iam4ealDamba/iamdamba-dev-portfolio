import emailjs, { init } from "@emailjs/browser";

export const InitEmail = () => {
  const options = {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PK,
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      // list: ["foo@emailjs.com", "bar@emailjs.com"],
      // The variable contains the email address
      // watchVariable: "userEmail",
    },
    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 30s
      throttle: 30000,
    },
  };

  init(options);
};
