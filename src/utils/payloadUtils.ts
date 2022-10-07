import * as ACData from "adaptivecards-templating";
import * as templates from "../templates/templates";
import { environments } from "../constants/environments";
import { teams } from "../constants/teams";
import { basePayload } from "../constants/basePayload";
import { Payload } from "../interfaces/payload";

export const formatCardPayloads = (payload: Payload) => {
  const source = payload.source;

  switch (source) {
    case "heartbeat":
      const template = new ACData.Template(templates.heartbeatTemplate);

      const cardPayloads = [];

      for (const document of payload.documents) {
        let env = "";
        let servicesAffected = "";
        let team = "";

        const tags = document.tags.split(",");

        for (const tag of tags) {
          if (environments.includes(tag)) {
            env = tag;
          } else if (teams.includes(tag)) {
            team = tag;
          } else {
            servicesAffected = tag;
          }
        }

        cardPayloads.push(
          template.expand({
            $root: {
              ...basePayload,
              title: `${document.title} ${env} ${servicesAffected}`,
              env,
              servicesAffected,
              team,
              location: document.location,
              description: document.description,
              createdDate: new Date(document.createdDate).toDateString(),
              viewUrl: payload.viewUrl,
              runbookUrl: "",
              tags: [
                {
                  key: "Env",
                  value: env,
                },
                {
                  key: "Services Affected",
                  value: servicesAffected,
                },
                {
                  key: "Assigned to",
                  value: team,
                },
                {
                  key: "Location",
                  value: document.location,
                },
              ],
            },
          })
        );
      }

      return cardPayloads;
    default:
      return [];
  }
};
