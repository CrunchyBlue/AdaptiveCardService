import { CardPayload } from "../interfaces/payload";

export const basePayload: CardPayload = {
  marcomLogo: process.env.LOGO_URL,
  title: "",
  env: "",
  servicesAffected: "",
  team: "",
  location: "",
  description: "",
  createdDate: "",
  viewUrl: "",
  runbookUrl: "",
  tags: "",
};
