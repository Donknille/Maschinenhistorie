export default function HomePage() {
  return (
    <main className="p-8 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">
        Maschinenhistorie – Basis läuft
      </h1>

      <p className="text-sm text-neutral-600">
        Diese Instanz wurde automatisch erstellt und läuft auf Vercel.
      </p>

      <div className="text-xs text-neutral-500">
        Nächster Schritt: Login & Mandanten (Supabase).
      </div>
    </main>
  );
}
