import * as yaml from "js-yaml"
import { resolve } from "path"
import { toMatchFile } from "jest-file-snapshot"

import { init } from "."

expect.extend({ toMatchFile })

const assembly = init().synth()

assembly.artifacts
  .filter(({ id }) => id !== "Tree")
  .forEach(({ id: stackName }) =>
    describe(stackName, () => {
      const { template } = assembly.getStackByName(stackName)
      it("returns expected cloudformation", () => {
        expect(yaml.safeDump(template)).toMatchFile(
          resolve(__dirname, "snapshots", `${stackName}.yaml`)
        )
      })
    })
  )
