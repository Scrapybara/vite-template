// Shared type definitions used by both client and server

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  status: "success" | "error";
}

export interface HealthCheck {
  status: "ok" | "error";
  timestamp: string;
  version?: string;
} 