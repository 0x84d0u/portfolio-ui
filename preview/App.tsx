import { Button } from "@/ui/shadcn/button";


function App() {
  return (
    <div className="p-8 flex flex-col items-start gap-4">
      <h1 className="text-2xl font-bold">Component Workbench 🎨</h1>
      
      <h2 className="text-xl font-semibold">Button Variants</h2>
      <div className="flex flex-wrap gap-2">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        {/* ...etc */}
      </div>
    </div>
  );
}

export default App;