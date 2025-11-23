export declare const initApiData: {
  type: string;
  title: string;
  isContainer: boolean;
  properties: {
    url: {
      type: string;
      title: string;
      default: string;
      description: string;
      isRequired: boolean;
    };
    method: {
      type: string;
      title: string;
      default: string;
      options: {
        label: string;
        value: string;
      }[];
      isRequired: boolean;
    };
    headers: {
      type: string;
      title: string;
      default: string;
      description: string;
    };
    data: {
      type: string;
      title: string;
      default: string;
      description: string;
    };
  };
  propertyOrder: string[];
};
export declare const EmptyApiCont: {
  url: string;
  method: string;
  headers: {};
  data: {};
};
