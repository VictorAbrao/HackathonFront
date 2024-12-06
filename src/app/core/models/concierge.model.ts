export interface ConciergeItem {
    id: number;
    uf: string;
    vigency: string;
    type: string;
    view: string;
    title: string;
    status: string;
    body: string;
    document: string;
    summary: string;
  }
  
  export interface ConciergeResponse {
    totalPages: number;
    totalItems: number;
    items: ConciergeItem[];
  }
  