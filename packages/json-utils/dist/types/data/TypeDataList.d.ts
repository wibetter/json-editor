export declare const TypeDataList: any;
export declare const EventTypeDataList: {
  on: {
    type: string;
    title: string;
    isContainer: boolean;
    properties: {
      type: {
        default: string;
        type: string;
        options: {
          label: string;
          value: string;
        }[];
        title: string;
      };
      register: {
        type: string;
        default: string;
        title: string;
        description: string;
        placeholder: string;
      };
      actionFunc: {
        title: string;
        type: string;
        default: string;
        description: string;
      };
    };
    propertyOrder: string[];
  };
  emit: {
    type: string;
    title: string;
    isContainer: boolean;
    properties: {
      type: {
        default: string;
        type: string;
        options: {
          label: string;
          value: string;
        }[];
        title: string;
      };
      trigger: {
        type: string;
        default: string;
        title: string;
        description: string;
        placeholder: string;
      };
      eventData: {
        title: string;
        type: string;
        default: string;
        description: string;
      };
    };
    propertyOrder: string[];
  };
};
export declare const DataSourceTypeList: {
  local: {
    type: string;
    title: string;
    isContainer: boolean;
    properties: {
      type: {
        default: string;
        type: string;
        options: {
          label: string;
          value: string;
        }[];
        title: string;
      };
      data: {
        title: string;
        placeholder: string;
        type: string;
        default: string;
        description: string;
        isRequired: boolean;
      };
      filter: {
        title: string;
        type: string;
        default: string;
        description: string;
        isRequired: boolean;
      };
    };
    propertyOrder: string[];
  };
  remote: {
    type: string;
    title: string;
    isContainer: boolean;
    properties: {
      type: {
        type: string;
        default: string;
        options: {
          label: string;
          value: string;
        }[];
        title: string;
      };
      data: {
        type: string;
        title: string;
        placeholder: string;
        default: string;
        isRequired: boolean;
        description: string;
      };
      filter: {
        type: string;
        title: string;
        default: string;
        description: string;
        isRequired: boolean;
      };
    };
    propertyOrder: string[];
  };
};
