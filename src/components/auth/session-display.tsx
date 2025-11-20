"use client";

import { authClient, useSession } from "@/lib/auth-client";

export function SessionDisplay() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Not signed in</div>;
  }

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Welcome, {session.user.name}!</h2>
        <p className="text-gray-600">{session.user.email}</p>
      </div>

      <button
        onClick={handleSignOut}
        className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
}
