export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user_scrapes: {
        Row: {
          id: string
          created_at: string
          url: string
          status: string
          user_id: string
          data: Json | null
          analysis: Json | null
        }
        Insert: {
          id?: string
          created_at?: string
          url: string
          status: string
          user_id: string
          data?: Json | null
          analysis?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          url?: string
          status?: string
          user_id?: string
          data?: Json | null
          analysis?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "user_scrapes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}