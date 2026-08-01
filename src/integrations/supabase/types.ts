export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      access_tokens: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          label: string | null
          max_uses: number | null
          project_id: string
          token_hash: string
          use_count: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          label?: string | null
          max_uses?: number | null
          project_id: string
          token_hash: string
          use_count?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          label?: string | null
          max_uses?: number | null
          project_id?: string
          token_hash?: string
          use_count?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "access_tokens_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_agents: {
        Row: {
          created_at: string
          created_by: string | null
          display_name: string | null
          enabled: boolean
          endpoint_id: string | null
          id: string
          kind: string
          model: string | null
          name: string
          system_prompt: string | null
          updated_at: string
          version: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          display_name?: string | null
          enabled?: boolean
          endpoint_id?: string | null
          id?: string
          kind: string
          model?: string | null
          name: string
          system_prompt?: string | null
          updated_at?: string
          version?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          display_name?: string | null
          enabled?: boolean
          endpoint_id?: string | null
          id?: string
          kind?: string
          model?: string | null
          name?: string
          system_prompt?: string | null
          updated_at?: string
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_agents_endpoint_id_fkey"
            columns: ["endpoint_id"]
            isOneToOne: false
            referencedRelation: "ai_endpoints"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_conversations: {
        Row: {
          created_at: string
          id: string
          system_prompt: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          system_prompt?: string | null
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          system_prompt?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_endpoints: {
        Row: {
          api_key: string | null
          api_version: string | null
          base_url: string | null
          created_at: string
          created_by: string | null
          deployment_name: string | null
          enabled: boolean
          extra_headers: Json | null
          id: string
          is_default: boolean
          last_checked_at: string | null
          last_latency_ms: number | null
          last_status: string | null
          model: string
          name: string
          provider: string
          updated_at: string
          use_apim: boolean
        }
        Insert: {
          api_key?: string | null
          api_version?: string | null
          base_url?: string | null
          created_at?: string
          created_by?: string | null
          deployment_name?: string | null
          enabled?: boolean
          extra_headers?: Json | null
          id?: string
          is_default?: boolean
          last_checked_at?: string | null
          last_latency_ms?: number | null
          last_status?: string | null
          model: string
          name: string
          provider?: string
          updated_at?: string
          use_apim?: boolean
        }
        Update: {
          api_key?: string | null
          api_version?: string | null
          base_url?: string | null
          created_at?: string
          created_by?: string | null
          deployment_name?: string | null
          enabled?: boolean
          extra_headers?: Json | null
          id?: string
          is_default?: boolean
          last_checked_at?: string | null
          last_latency_ms?: number | null
          last_status?: string | null
          model?: string
          name?: string
          provider?: string
          updated_at?: string
          use_apim?: boolean
        }
        Relationships: []
      }
      ai_messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          metadata: Json | null
          role: string
          tokens: number
          user_id: string | null
        }
        Insert: {
          content?: string
          conversation_id: string
          created_at?: string
          id?: string
          metadata?: Json | null
          role: string
          tokens?: number
          user_id?: string | null
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          role?: string
          tokens?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "ai_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_usage_logs: {
        Row: {
          completion_tokens: number
          conversation_id: string | null
          created_at: string
          endpoint_id: string | null
          error: string | null
          flagged: boolean
          id: string
          latency_ms: number
          model: string | null
          prompt_tokens: number
          request_id: string | null
          status: string
          total_cost_usd: number
          total_tokens: number
          user_id: string
        }
        Insert: {
          completion_tokens?: number
          conversation_id?: string | null
          created_at?: string
          endpoint_id?: string | null
          error?: string | null
          flagged?: boolean
          id?: string
          latency_ms?: number
          model?: string | null
          prompt_tokens?: number
          request_id?: string | null
          status?: string
          total_cost_usd?: number
          total_tokens?: number
          user_id: string
        }
        Update: {
          completion_tokens?: number
          conversation_id?: string | null
          created_at?: string
          endpoint_id?: string | null
          error?: string | null
          flagged?: boolean
          id?: string
          latency_ms?: number
          model?: string | null
          prompt_tokens?: number
          request_id?: string | null
          status?: string
          total_cost_usd?: number
          total_tokens?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_usage_logs_endpoint_id_fkey"
            columns: ["endpoint_id"]
            isOneToOne: false
            referencedRelation: "ai_endpoints"
            referencedColumns: ["id"]
          },
        ]
      }
      annotations: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          id: string
          image_id: string
          title: string | null
          user_id: string
          x_ratio: number
          y_ratio: number
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_id: string
          title?: string | null
          user_id: string
          x_ratio: number
          y_ratio: number
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_id?: string
          title?: string | null
          user_id?: string
          x_ratio?: number
          y_ratio?: number
        }
        Relationships: [
          {
            foreignKeyName: "annotations_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
        ]
      }
      apim_policies: {
        Row: {
          applies_to_endpoint_id: string | null
          config: Json
          created_at: string
          enabled: boolean
          id: string
          name: string
          policy_type: string
          updated_at: string
        }
        Insert: {
          applies_to_endpoint_id?: string | null
          config?: Json
          created_at?: string
          enabled?: boolean
          id?: string
          name: string
          policy_type: string
          updated_at?: string
        }
        Update: {
          applies_to_endpoint_id?: string | null
          config?: Json
          created_at?: string
          enabled?: boolean
          id?: string
          name?: string
          policy_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "apim_policies_applies_to_endpoint_id_fkey"
            columns: ["applies_to_endpoint_id"]
            isOneToOne: false
            referencedRelation: "ai_endpoints"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          content: string
          created_at: string
          email: string | null
          id: string
          image_id: string
          is_approved: boolean | null
          name: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string
          email?: string | null
          id?: string
          image_id: string
          is_approved?: boolean | null
          name?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          email?: string | null
          id?: string
          image_id?: string
          is_approved?: boolean | null
          name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
        ]
      }
      daftra_audit_log: {
        Row: {
          actor: string | null
          created_at: string
          duration_ms: number | null
          error: string | null
          id: string
          meta: Json | null
          method: string | null
          ok: boolean
          path: string | null
          status: number | null
          tool: string
          version: string | null
        }
        Insert: {
          actor?: string | null
          created_at?: string
          duration_ms?: number | null
          error?: string | null
          id?: string
          meta?: Json | null
          method?: string | null
          ok?: boolean
          path?: string | null
          status?: number | null
          tool: string
          version?: string | null
        }
        Update: {
          actor?: string | null
          created_at?: string
          duration_ms?: number | null
          error?: string | null
          id?: string
          meta?: Json | null
          method?: string | null
          ok?: boolean
          path?: string | null
          status?: number | null
          tool?: string
          version?: string | null
        }
        Relationships: []
      }
      foundry_agents: {
        Row: {
          active: boolean
          agent_id: string
          capabilities: Json
          created_at: string
          description: string | null
          id: string
          last_seen_at: string | null
          name: string
          owner_user_id: string | null
          token_hash: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          agent_id: string
          capabilities?: Json
          created_at?: string
          description?: string | null
          id?: string
          last_seen_at?: string | null
          name: string
          owner_user_id?: string | null
          token_hash: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          agent_id?: string
          capabilities?: Json
          created_at?: string
          description?: string | null
          id?: string
          last_seen_at?: string | null
          name?: string
          owner_user_id?: string | null
          token_hash?: string
          updated_at?: string
        }
        Relationships: []
      }
      foundry_messages: {
        Row: {
          acked_at: string | null
          content: Json
          created_at: string
          delivered_at: string | null
          from_agent: string
          id: string
          metadata: Json
          role: string
          thread_id: string
          to_agent: string
        }
        Insert: {
          acked_at?: string | null
          content: Json
          created_at?: string
          delivered_at?: string | null
          from_agent: string
          id?: string
          metadata?: Json
          role?: string
          thread_id?: string
          to_agent: string
        }
        Update: {
          acked_at?: string | null
          content?: Json
          created_at?: string
          delivered_at?: string | null
          from_agent?: string
          id?: string
          metadata?: Json
          role?: string
          thread_id?: string
          to_agent?: string
        }
        Relationships: []
      }
      images: {
        Row: {
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          image_url: string
          project_id: string
          storage_path: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          project_id: string
          storage_path?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          project_id?: string
          storage_path?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "images_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      model_pricing: {
        Row: {
          created_at: string
          currency: string
          id: string
          input_per_1k: number
          model: string
          output_per_1k: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency?: string
          id?: string
          input_per_1k?: number
          model: string
          output_per_1k?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency?: string
          id?: string
          input_per_1k?: number
          model?: string
          output_per_1k?: number
          updated_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          is_private: boolean | null
          location: string | null
          status: string | null
          title: string
          updated_at: string
          user_id: string
          year: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_private?: boolean | null
          location?: string | null
          status?: string | null
          title: string
          updated_at?: string
          user_id: string
          year?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_private?: boolean | null
          location?: string | null
          status?: string | null
          title?: string
          updated_at?: string
          user_id?: string
          year?: number | null
        }
        Relationships: []
      }
      rate_limit_counters: {
        Row: {
          count: number
          created_at: string
          endpoint_id: string | null
          id: string
          tokens: number
          updated_at: string
          user_id: string
          window_key: string
          window_start: string
        }
        Insert: {
          count?: number
          created_at?: string
          endpoint_id?: string | null
          id?: string
          tokens?: number
          updated_at?: string
          user_id: string
          window_key: string
          window_start: string
        }
        Update: {
          count?: number
          created_at?: string
          endpoint_id?: string | null
          id?: string
          tokens?: number
          updated_at?: string
          user_id?: string
          window_key?: string
          window_start?: string
        }
        Relationships: []
      }
      storage_providers: {
        Row: {
          config: Json
          created_at: string
          created_by: string | null
          display_name: string
          enabled: boolean
          id: string
          is_default: boolean
          provider: string
          updated_at: string
        }
        Insert: {
          config?: Json
          created_at?: string
          created_by?: string | null
          display_name: string
          enabled?: boolean
          id?: string
          is_default?: boolean
          provider: string
          updated_at?: string
        }
        Update: {
          config?: Json
          created_at?: string
          created_by?: string | null
          display_name?: string
          enabled?: boolean
          id?: string
          is_default?: boolean
          provider?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      comments_public: {
        Row: {
          content: string | null
          created_at: string | null
          id: string | null
          image_id: string | null
          is_approved: boolean | null
          name: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string | null
          image_id?: string | null
          is_approved?: boolean | null
          name?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string | null
          image_id?: string | null
          is_approved?: boolean | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
