import { Form } from "devlink/Form";

export default function Home() {
  return (
    <main className="bg-background min-h-screen w-full flex items-center justify-center">
      <div className="max-w-[600px] h-full">
        <h1 className="text-6xl font-semibold">Hello Frontinvale</h1>
        <p className="text-lg">
          this is a component that was fetched from webflow:
        </p>
        <Form />
      </div>
    </main>
  );
}
