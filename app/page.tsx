import { Button } from "@/components/ui/button"
import TeachableMachineComponent from "@/components/TeachableMachineComponent";

export function page() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">SuperAcme Attendance</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
        <TeachableMachineComponent />
        <Button className="w-full max-w-md" size="lg">
          Take Attendance
        </Button>
      </main>
    </div>
  )
}

function CameraIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}

