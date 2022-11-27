import { App } from "@serverless-stack/resources";
import { MyTopic } from "./MyTopic";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(MyTopic);
}
