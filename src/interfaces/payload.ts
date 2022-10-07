export interface Document {
  title: string;
  description: string;
  location: string;
  createdDate: string;
  tags: string;
}

export interface Payload {
  source: string;
  viewUrl: string;
  documents: Document[];
}

export interface CardPayload {
  marcomLogo: string;
  title: string;
  env: string;
  servicesAffected: string;
  team: string;
  location: string;
  description: string;
  createdDate: string;
  viewUrl: string;
  runbookUrl: string;
  tags: string;
}
