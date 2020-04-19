import { context, request, requestEvent } from "./fixtures/cloudfront-event"
import { handler } from "../lib"

describe("when called with a cloudfront request event", () => {
  const call = handler(requestEvent, context)

  it("returns the original request", () => {
    expect(call).resolves.toStrictEqual(request)
  })
})
