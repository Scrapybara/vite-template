// Shared type definitions used by both client and server

export interface HealthCheck {
  status: "ok" | "error";
  timestamp: string;
  version?: string;
} 