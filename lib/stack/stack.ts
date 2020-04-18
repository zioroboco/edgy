import * as cdk from "@aws-cdk/core"
import { StackProps } from "./parameters"

export class Stack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: StackProps & cdk.StackProps) {
    super(scope, id, props)
    new cdk.CfnOutput(this, "DemoOutput", {
      value: this.stackName,
    })
  }
}
