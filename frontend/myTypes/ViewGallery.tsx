export interface TypeGallery {
  caption?: React.ReactNode;
  source: string;
  src:
    | string
    | {
        download?: string;
        fullscreen?: string;
        regular: string;
        thumbnail?: string;
      };
  width: number;
  height: number;
  title: string;
}
