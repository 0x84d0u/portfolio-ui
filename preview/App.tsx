
import { Layout, Toaster } from "@ui/index";
import { PreviewPage } from "./components/preview-page";
import Playground from "./Playground";

const groups: {
  [key: string]: {
    [key: string]: string[]
  }
} = {
  "Helpers": {
    "types": ["...", "..."],
    "utils": ["...", "..."]
  },
  "Patterns": {
    "Authenetication": ["AuthForm", "..."],
    "Copywritting": ["...", "..."],
    "Ecommerce": ["...", "..."]
  },
  "UI": {
    "Form": ["FormControl", "FormWrapper"],
    "Layout": ["LayoutContainer", "LayoutGrid", "LayoutSection", "LayoutStack"],
    "Misc": ["Icon", "..."],
    "Navigation": ["NavigationLink", "..."],
    "Typography": ["TypographyBase", "..."],
  }
}


function App() {

  return <PreviewPage>
    {/* <div>
      {Object.keys(groups).map((group, i) => {
        const lists = groups[group as keyof typeof groups];
        const lists_has_children = Object.keys(lists).length > 0

        return <Layout.Section key={i}>
          <h1 className="text-xl font-bold">{group}</h1>
          <div className="border-l pl-4">
            {lists_has_children && Object.keys(lists).map((list, j) => {
              const items = lists[list as keyof typeof lists];
              return <div key={j} className="flex gap-2">
                <b>{list} : </b>
                <p>{items.join(", ")}</p>
              </div>
            })}
          </div>
        </Layout.Section>
      })}
    </div> */}

    <Layout.Section className='bg-slate-200' containerProps={{ className: "py-12 flex flex-col gap-12" }}>
      <h1 className="text-3xl"> Playground </h1>
      <Playground />
    </Layout.Section>

      <Toaster />
  </PreviewPage >
}

export default App;