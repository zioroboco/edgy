import {
  CloudFrontEvent,
  CloudFrontRequest,
  CloudFrontRequestEvent,
  Context,
} from "aws-lambda"

// See: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-event-structure.html

export const context = {} as Context

export const config: CloudFrontEvent["config"] = {
  distributionDomainName: "d111111abcdef8.cloudfront.net",
  distributionId: "EDFDVBD6EXAMPLE",
  eventType: "origin-request",
  requestId: "4TyzHTaYWb1GX1qTfsHhEqV6HUDd_BzoBZnwfnvQc_1oF26ClkoUSEQ==",
}

export const request: CloudFrontRequest = {
  clientIp: "203.0.113.178",
  headers: {
    "x-forwarded-for": [{ key: "X-Forwarded-For", value: "203.0.113.178" }],
    "user-agent": [{ key: "User-Agent", value: "Amazon CloudFront" }],
    via: [
      {
        key: "Via",
        value:
          "2.0 2afae0d44e2540f472c0635ab62c232b.cloudfront.net (CloudFront)",
      },
    ],
    host: [{ key: "Host", value: "example.org" }],
    "cache-control": [{ key: "Cache-Control", value: "no-cache, cf-no-cache" }],
  },
  method: "GET",
  origin: {
    s3: {
      authMethod: "none",
      customHeaders: {},
      domainName: "example.org",
      path: "",
      region: "us-east-1",
    },
  },
  querystring: "",
  uri: "/",
}

export const requestEvent: CloudFrontRequestEvent = {
  Records: [{ cf: { config, request } }],
}
