export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbackCreateResponse {
  id: string;
  type: string;
  comment: string;
  screenshot?: string | undefined;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}
