import {
  Context,
  CloudFrontRequest as Request,
  CloudFrontRequestEvent as RequestEvent,
} from "aws-lambda"

export const handler = async (
  { Records: [{ cf: cloudfrontEvent }] }: RequestEvent,
  context: Context
): Promise<Request> => ({ ...cloudfrontEvent.request })
