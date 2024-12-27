type AppData = {
  id: number;
  name: string;
  description: string;
  download_link: string;
  last_updated: string;
  image: string;
}

export type AppType = {
  data: AppData;
}