import axios from "axios";

// Define the base URL for the API
const API_BASE_URL = "https://muneer320-chempath.hf.space";

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define types for API responses
export interface Compound {
  formula: string;
  properties?: {
    name?: string;
    molecular_weight?: number;
    state?: string;
    class?: string;
  };
}

// Define the actual API response format
export interface CompoundResponse {
  name?: string;
  formula: string;
  molecular_weight?: number;
  class?: string;
  state?: string;
}

export interface ReactionCondition {
  reagent: string;
  temperature?: number;
  pressure?: number;
  mechanism?: string;
  description?: string;
}

export interface PathInfo {
  compounds: Compound[];
  reactions: ReactionCondition[];
  reagents: string[];
  total_steps: number;
}

// API functions
export const apiService = {
  // Health check
  healthCheck: async () => {
    const response = await api.get("/health");
    return response.data;
  },

  // Get all compounds with optional search
  getCompounds: async (search?: string) => {
    const params = search ? { search } : {};
    const response = await api.get<CompoundResponse[]>("/compounds/", {
      params,
    });
    return response.data;
  },

  // Get a specific compound by formula
  getCompound: async (formula: string) => {
    const response = await api.get<CompoundResponse>(`/compounds/${formula}`);
    return response.data;
  },

  // Get compound suggestions for autocomplete
  getCompoundSuggestions: async (prefix: string, limit: number = 10) => {
    const response = await api.get<CompoundResponse[]>(
      "/compounds/suggestions/",
      {
        params: { prefix, limit },
      }
    );
    return response.data;
  },

  // Find paths between compounds
  findPaths: async (start: string, end: string, maxSteps: number = 5) => {
    const response = await api.get<PathInfo[]>("/paths/", {
      params: { start, end, max_steps: maxSteps },
    });
    return response.data;
  },

  // Create a new compound
  createCompound: async (compound: {
    formula: string;
    name?: string;
    molecular_weight?: number;
    state?: string;
    class?: string;
  }) => {
    const response = await api.post<CompoundResponse>("/compounds/", compound);
    return response.data;
  },

  // Create a new reaction
  createReaction: async (reaction: {
    reactant: string;
    product: string;
    conditions: ReactionCondition;
  }) => {
    const response = await api.post<string>("/reactions/", reaction);
    return response.data;
  },
};

export default apiService;
