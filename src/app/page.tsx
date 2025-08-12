export default function Home() {
  return (
    <main className="min-h-dvh p-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold text-blue-500">
        Tailwind v4 is working 🎉
      </h1>
      <p className="mt-4">
        This is using the new config-less setup from Tailwind CSS v4.
      </p>
      <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Click me
      </button>
    </main>
  );
}
