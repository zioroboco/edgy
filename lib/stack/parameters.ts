const globals = {}

type Parameters = typeof globals & {
  stackName: string
}

export const stacks: Parameters[] = [
  {
    stackName: "edgy-demo",
  },
].map(stack => ({
  ...globals,
  ...stack,
}))

export type StackProps = Omit<Parameters, "stackName">
