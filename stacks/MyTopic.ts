import { Topic, StackContext } from "@serverless-stack/resources";
import * as sns from "aws-cdk-lib/aws-sns";

export function MyTopic({ stack }: StackContext) {
  const topicArn = process.env.IS_LOCAL
    ? "arn for local"
    : "arn for not local";
  new Topic(stack, "Topic", {
    subscribers: {
      subscriber: "functions/subscriber.main",
    },
    cdk: {
      topic: sns.Topic.fromTopicArn(stack, "MyTopic", topicArn),
    },
  });
}