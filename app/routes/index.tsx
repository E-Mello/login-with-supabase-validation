import DrawerRoutes from "./drawer.routes";
import StackRoutes from "./stack.routes";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { AuthProvider } from "../components/AuthSupabase";

export default function Routes() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    try {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });

      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });
    } catch (error) {
      setSession(null);
    }
  });

  return (
    <AuthProvider>
      {session && session.user ? <DrawerRoutes /> : <StackRoutes /> }
    </AuthProvider>
  );
}
