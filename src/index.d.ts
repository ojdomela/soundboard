declare module "contentful" {
  type Asset = {
    fields: {
      file: {
        url: string;
        fileName: string;
        contentType: string;
        details: {
          size: number;
        };
      };
      title: string;
    };
    sys: {
      id: string;
      createdAt: string;
      updatedAt: string;
      locale: string;
      revision: number;
      type: string;
      space: {
        sys: {
          type: string;
          linkType: string;
          id: string;
        };
      };
      environment: {
        sys: {
          id: string;
          type: string;
          linkType: string;
        };
      };
    };
  };
}

declare module 'global' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
    };
  }
}
