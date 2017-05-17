export interface Collection {
  name: {
    en: string;
    pt: string;
  };
  tags: string[];
  images: {url: string}[];
  enabled: boolean;
  parent: Collection;
  metadata: any;
  createdAt: string;
}
