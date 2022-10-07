export const heartbeatTemplate: any = {
  type: "AdaptiveCard",
  body: [
    {
      type: "ActionSet",
    },
    {
      type: "TextBlock",
      size: "Medium",
      weight: "Bolder",
      text: "${title}",
      isVisible: true,
    },
    {
      type: "ColumnSet",
      columns: [
        {
          type: "Column",
          items: [
            {
              type: "Image",
              style: "Default",
              url: "${$root.marcomLogo}",
              size: "Small",
            },
          ],
          width: "auto",
        },
        {
          type: "Column",
          items: [
            {
              type: "TextBlock",
              text: "${location}",
              wrap: true,
            },
            {
              type: "TextBlock",
              spacing: "None",
              text: "${createdDate}",
              isSubtle: true,
              wrap: true,
            },
          ],
          width: "stretch",
        },
      ],
    },
    {
      type: "TextBlock",
      text: "${description}",
      wrap: true,
    },
    {
      type: "FactSet",
      facts: [
        {
          $data: "${tags}",
          title: "${key}:",
          value: "${value}",
        },
      ],
    },
    {
      type: "ActionSet",
      actions: [
        {
          type: "Action.OpenUrl",
          title: "View",
          url: "${viewUrl}",
        },
      ],
    },
    {
      type: "ActionSet",
      $when: '${$root.runbookUrl != ""}',
      isVisible: true,
      actions: [
        {
          type: "Action.OpenUrl",
          title: "Runbook",
          url: "${runbookUrl}",
        },
      ],
    },
  ],
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.3",
};
