declare module '@apiverve/svgconverter' {
  export interface svgconverterOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface svgconverterResponse {
    status: string;
    error: string | null;
    data: SVGConverterData;
    code?: number;
  }


  interface SVGConverterData {
      id:           string;
      inputFormat:  string;
      outputFormat: string;
      inputSize:    number;
      outputSize:   number;
      mimeType:     string;
      expires:      number;
      downloadURL:  string;
  }

  export default class svgconverterWrapper {
    constructor(options: svgconverterOptions);

    execute(callback: (error: any, data: svgconverterResponse | null) => void): Promise<svgconverterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: svgconverterResponse | null) => void): Promise<svgconverterResponse>;
    execute(query?: Record<string, any>): Promise<svgconverterResponse>;
  }
}
