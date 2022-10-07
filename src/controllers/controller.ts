import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { validate } from "jsonschema";

import { formatCardPayloads } from "../utils/payloadUtils";
import payloadSchema from "../schemas/payload.json";

export const get = (req: Request, res: Response, next: NextFunction) => {
  res.send("OK");
};

export const getSchema = (req: Request, res: Response, next: NextFunction) => {
  res.send(payloadSchema);
};

export const post = async (req: Request, res: Response, next: NextFunction) => {
  const payload = JSON.parse(req.body);

  // Filter out empty documents
  payload.documents = payload.documents.filter((document: any) => {
    return Object.keys(document).length !== 0;
  });

  const result = validate(payload, payloadSchema);

  if (!result.valid) {
    res.statusCode = 409;
    res.send(
      "Schema validation failed. Please visit /schema for schema definition"
    );
  }

  const cardPayloads = formatCardPayloads(payload);

  for (const cardPayload of cardPayloads) {
    try {
      const res = await axios.post(process.env.WEBHOOK_URL, {
        type: "message",
        attachments: [
          {
            contentType: "application/vnd.microsoft.card.adaptive",
            contentUrl: null,
            content: cardPayload,
          },
        ],
      });
    } catch (error) {
      console.error(
        error.response.status,
        error.response.statusText,
        error.response.data
      );
    }
  }
  res.statusCode = 200;
  res.send();
};
