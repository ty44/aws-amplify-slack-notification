import { SNSHandler } from "aws-lambda";
import * as https from "https";

export const main: SNSHandler = (event) => {
  const message = event.Records[0].Sns.Message;
    
  let color: string = "info";
  if (message.includes("SUCCEED")) {
    color = "good";
  } else if (message.includes("FAILED")) {
    color = "danger";
  }

  const data = JSON.stringify({
    attachments: [{
      color: color,
      text: message,
    }]
  });

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  const url = process.env.IS_LOCAL
    ? "slack webhook url for local"
    : "slack webhook url for not local";
  const request = https.request(url, options);
  request.write(data);
  request.end();
};