import * as cdk from "@aws-cdk/core"
import { Stack } from "./stack"
import { stacks } from "./parameters"

/** Initialise a CDK application using the project parameters. */
export const init = (app = new cdk.App()) => {
  stacks.map(({ stackName, ...parameters }) => {
    new Stack(app, stackName, parameters)
  })
  return app
}
