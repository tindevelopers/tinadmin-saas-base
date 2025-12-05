export interface Database {
  public: {
    Tables: {
      tenants: {
        Row: {
          id: string;
          name: string;
          domain: string;
          status: "active" | "pending" | "suspended";
          plan: string;
          region: string;
          avatar_url: string | null;
          features: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          domain: string;
          status?: "active" | "pending" | "suspended";
          plan: string;
          region: string;
          avatar_url?: string | null;
          features?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          domain?: string;
          status?: "active" | "pending" | "suspended";
          plan?: string;
          region?: string;
          avatar_url?: string | null;
          features?: string[];
          created_at?: string;
          updated_at?: string;
        };
      };
      roles: {
        Row: {
          id: string;
          name: string;
          description: string;
          coverage: string;
          max_seats: number;
          current_seats: number;
          permissions: string[];
          gradient: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          coverage: string;
          max_seats: number;
          current_seats?: number;
          permissions: string[];
          gradient: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          coverage?: string;
          max_seats?: number;
          current_seats?: number;
          permissions?: string[];
          gradient?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          avatar_url: string | null;
          role_id: string | null;
          tenant_id: string | null;
          plan: string;
          status: "active" | "pending" | "suspended";
          last_active_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          full_name: string;
          avatar_url?: string | null;
          role_id?: string | null;
          tenant_id?: string | null;
          plan: string;
          status?: "active" | "pending" | "suspended";
          last_active_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          avatar_url?: string | null;
          role_id?: string | null;
          tenant_id?: string | null;
          plan?: string;
          status?: "active" | "pending" | "suspended";
          last_active_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      workspaces: {
        Row: {
          id: string;
          tenant_id: string;
          name: string;
          slug: string;
          description: string | null;
          avatar_url: string | null;
          settings: Record<string, any>;
          status: "active" | "suspended" | "archived";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          tenant_id: string;
          name: string;
          slug: string;
          description?: string | null;
          avatar_url?: string | null;
          settings?: Record<string, any>;
          status?: "active" | "suspended" | "archived";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          tenant_id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          avatar_url?: string | null;
          settings?: Record<string, any>;
          status?: "active" | "suspended" | "archived";
          created_at?: string;
          updated_at?: string;
        };
      };
      workspace_users: {
        Row: {
          id: string;
          workspace_id: string;
          user_id: string;
          role_id: string | null;
          permissions: string[];
          joined_at: string;
        };
        Insert: {
          id?: string;
          workspace_id: string;
          user_id: string;
          role_id?: string | null;
          permissions?: string[];
          joined_at?: string;
        };
        Update: {
          id?: string;
          workspace_id?: string;
          user_id?: string;
          role_id?: string | null;
          permissions?: string[];
          joined_at?: string;
        };
      };
    };
    audit_logs: {
      Row: {
        id: string;
        user_id: string;
        tenant_id: string | null;
        workspace_id: string | null;
        action: string;
        resource: string;
        permission: string;
        allowed: boolean;
        reason: string | null;
        metadata: Record<string, any>;
        ip_address: string | null;
        user_agent: string | null;
        created_at: string;
      };
      Insert: {
        id?: string;
        user_id: string;
        tenant_id?: string | null;
        workspace_id?: string | null;
        action: string;
        resource: string;
        permission: string;
        allowed?: boolean;
        reason?: string | null;
        metadata?: Record<string, any>;
        ip_address?: string | null;
        user_agent?: string | null;
        created_at?: string;
      };
      Update: {
        id?: string;
        user_id?: string;
        tenant_id?: string | null;
        workspace_id?: string | null;
        action?: string;
        resource?: string;
        permission?: string;
        allowed?: boolean;
        reason?: string | null;
        metadata?: Record<string, any>;
        ip_address?: string | null;
        user_agent?: string | null;
        created_at?: string;
      };
    };
  };
}

