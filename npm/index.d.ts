declare module '@apiverve/svgconverter' {
  export interface svgconverterOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface svgconverterResponse {
    status: string;
    error: string | null;
    data: SVGConverterData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SVGConverterData {
      id:           null | string;
      inputFormat:  null | string;
      outputFormat: null | string;
      inputSize:    number | null;
      outputSize:   number | null;
      mimeType:     null | string;
      expires:      number | null;
      downloadURL:  null | string;
  }

  export default class svgconverterWrapper {
    constructor(options: svgconverterOptions);

    execute(callback: (error: any, data: svgconverterResponse | null) => void): Promise<svgconverterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: svgconverterResponse | null) => void): Promise<svgconverterResponse>;
    execute(query?: Record<string, any>): Promise<svgconverterResponse>;
  }
}
